const AWS = require("aws-sdk")

AWS.config.update({ region: "us-west-2" });

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const params = {
  TableName: "notes",
  // 'Item' contains the attributes of the item to be created
  // - 'userId': user identities are federated through the
  //             Cognito Identity Pool, we will use the identity id
  //             as the user id of the authenticated user
  // - 'noteId': a unique uuid
  // - 'content': parsed from request body
  // - 'attachment': parsed from request body
  // - 'createdAt': current Unix timestamp
  Item: {
    userId: "11111111",
    noteId: "22222222",
    content: "WWWWWWWWW",
    attachment: null,
    createdAt: new Date().getTime()
  }
};

dynamoDb["put"](params)
  .promise()
  .then(console.log)
  .catch(console.log);



