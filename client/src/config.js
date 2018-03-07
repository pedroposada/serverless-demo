export default {
  s3: {
    BUCKET: "notes-demo-app-uploads-west"
  },
  apiGateway: {
    URL: "https://j4lxvics67.execute-api.us-west-2.amazonaws.com/prod",
    REGION: "us-west-2"
  },
  cognito: {
    USER_POOL_ID: "us-west-2_zR4wCNYxm",
    APP_CLIENT_ID: "3n4s32ooc692euagborkbflic",
    REGION: "us-west-2",
    IDENTITY_POOL_ID: "us-west-2:d7d78b9f-a4ba-4bfa-bb4a-93baa7f80585"
  },
  MAX_ATTACHMENT_SIZE: 5000000 // in bytes
};