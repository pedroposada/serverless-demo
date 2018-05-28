# Serverless demo app (AWS)

![favicon](client/public/favicon-16x16.png) [Live demo](https://notes.pedroposada.be/)

## AWS services used in this demo
  - API Gateway
  - S3
  - CloudFront
  - Certificate Manager
  - Route 53
  - Lambda
  - DynamoDB
  - Cognito

## Summary
  - Used one lambda pero CRUD operation
  - Used API Gateway to route requests to lambdas
  - Used serverless framework to manage the backend (api)
  - Used react-create-app for the client
  - Hosted client in S3 via CloudFront and Route 53
  - User authentication built with Cognito User Pool and Federated Identities

## Test Lambda Functions
You will need calid AWS credentials in your .aws file
```
cd api // go into the api folder

sls invoke local -f create -p mocks/create-event.json;
sls invoke local -f get -p mocks/get-event.json;
sls invoke local -f list -p mocks/list-event.json;
sls invoke local -f update -p mocks/update-event.json;
sls invoke local -f delete -p mocks/delete-event.json;
```

## Notes
  - Its very important to use the same REGION for all services
  - Handy snippet to unblock lambdas
    ```
    // https://serverless-stack.com/chapters/debugging-serverless-api-issues.html
    export async function handler(event, context, callback) {
      // don't wait until event loop is free
      context.callbackWaitsForEmptyEventLoop = false;
      
      ...
    };
    ```
  - Demo based on [tutorial](https://serverless-stack.com/#table-of-contents)
