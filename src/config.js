export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-uploads"
  },
  apiGateway: {
		REGION: 'us-east-2',
		URL: 'https://38q6xux1n0.execute-api.us-east-2.amazonaws.com/dev'
	},
	cognito: {
		REGION: 'us-east-2',
		USER_POOL_ID: 'us-east-2_1zPou98cG',
		APP_CLIENT_ID: '342c0b3jtf5tsr22tr51f18tp4',
		IDENTITY_POOL_ID: 'YOUR_IDENTITY_POOL_ID'
	}
};
