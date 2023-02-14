<p align="center">
<img src="https://user-images.githubusercontent.com/38559002/218804399-0deb9611-aa27-444b-aad6-749a1995f22b.png">
</p>
<h1 align="center" id="top">AWS SQS - FRONTEND</h1>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;  
  <a href="#hammer_and_wrench-prerequisites">Prerequisites</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#zap-running-the-project">Running the Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>


## :dart: About

Small example of a message queue-based microservice using Amazon SQS. Frontend is responsible for producing messages in AWS SQS based on the number of images requested in the form.

The [Backend (aws-sqs-backend)](https://github.com/ricellicarvalho/aws-sqs-backend) is in charge of consuming the messages in AWS SQS and generating an image for each message. To generate the images I used an API called Cat as a service (https://cataas.com)

Images are being saved locally within the backend project, next step is to save to Amazon S3 bucket.

### **Preview the application**

https://user-images.githubusercontent.com/38559002/218755305-adb87101-f366-41e4-92c2-770c7a6c756d.mp4

<p align="right">(<a href="#top">Back to top</a>)</p>

## :rocket: Technologies

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [AWS SQS](https://aws.amazon.com/sqs/)
- [Alpine.js](https://alpinejs.dev/)
- [Docker](https://www.docker.com/)

<p align="right">(<a href="#top">Back to top</a>)</p>


## :hammer_and_wrench: Prerequisites

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/package/npm)

<p align="right">(<a href="#top">Back to top</a>)</p>

## :zap: Running the project
**It is necessary that you create a queue in Amazon SQS and rename the .env-example file to .env and inform the values for the variables below:**

| Parameter         | Type   | Description |
| ----------------- | ------ | ----------- |
| *region*          | String | AWS region (eg. `"us-east-1"`) |
| *accessKeyId*     | String | IAM Access Key ID |
| *secretAccessKey* | String | IAM Secret Access Key |
| *sqs url*         | String | URL Of Your Queue |

```bash
# Clone this repository
$ git clone git@github.com:ricellicarvalho/aws-sqs-frontend.git

# Install dependencies
$ npm install
```
Open the browser at the following url to access the application [`http://localhost:3000`](http://localhost:3000)

<p align="right">(<a href="#top">Back to top</a>)</p>

## :memo: License

This project is under the ISC license. See file [LICENSE](LICENSE.md) for more details.

<p align="right">(<a href="#top">Back to top</a>)</p>

---

<p align="center">Made with :heart: by <a href="https://github.com/ricellicarvalho" target="_blank">Ricelli Carvalho</a></p>
