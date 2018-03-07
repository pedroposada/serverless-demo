import { call } from "./libs/dynamoDbLib";
import { success, failure } from "./libs/responseLib";

export async function main(event, context, callback) {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "notes",
    // 'Key' defines the partition key and sort key of the item to be updated
    // - 'userId': Identity Pool identity id of the authenticated user
    // - 'noteId': path parameter
    Key: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: event.pathParameters.id
    },
    // 'UpdateExpression' defines the attributes to be updated
    // 'ExpressionAttributeValues' defines the value in the update expression
    UpdateExpression: "SET content = :content, attachment = :attachment",
    ExpressionAttributeValues: {
      ":attachment": data.attachment ? data.attachment : null,
      ":content": data.content ? data.content : null
    },
    ReturnValues: "ALL_NEW"
  };

  try {
    const result = await call("update", params);
    callback(null, success({ status: false }))
  } catch (e) {
    callback(null, failure({ status: false }))
  }
}