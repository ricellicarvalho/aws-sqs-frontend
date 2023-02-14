import express from 'express';
import { config } from 'dotenv';
import aws from 'aws-sdk';

config();

const server = express();

const folder = process.env.PWD;

aws.config.update({ 
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const sqs = new aws.SQS();

server.use(express.json());
server.use(express.static(folder));

server.post('/request_images', (req, res) => {
  const quantityImages = parseInt(req.body.quantityImages);

  for (let index = 0; index < quantityImages; index++) {
    sqs.sendMessage({
      MessageBody: "image_"+index,
      QueueUrl: process.env.AWS_QUEUE_URL
    },

    (error, data) => {
      if (error) {
        console.log("Error", error);
      } else {
        console.log("Image ID:", data.MessageId);
      }
    }
    )
  }

  console.log("Quantity images:", quantityImages);

  res.json({ body: req.body, ok: true })
});

server.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT || 3333}`);
});