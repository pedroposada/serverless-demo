import { call } from "./libs/dynamoDbLib";
import { success, failure } from "./libs/responseLib";

export async function main(event, context, callback) {
  const params = {
    TableName: "notes",
    KeyConditionExpression: "userId = :userId",
    ExpressionAttributeValues: {
      ":userId": event.requestContext.identity.cognitoIdentityId
    }
  }

  try {
    const result = await call("query", params);
    callback(null, success(result.Items))
  } catch (e) {
    callback(null, failure({ status: false }))
  }
}
