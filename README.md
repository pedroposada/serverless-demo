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
  - Base this demo from this [tutorial](https://serverless-stack.com/#table-of-contents)
