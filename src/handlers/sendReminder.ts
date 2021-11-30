import { APIGatewayProxyResult } from 'aws-lambda';
import { SNS } from 'aws-sdk';

const sns = new SNS();

export const sendReminder = async (): Promise<APIGatewayProxyResult> => {
    const month = new Date().toLocaleString('default', { month: 'long' });;
    const message = `A reminder to pay your (${month}) rent! Please ignore if you have already paid. Note: this is an automated message`;

    console.info(`${message}`);
    
    try {
        await sns.publish({
            Message: message,
            Subject: 'Rent Reminder',
            TopicArn: process.env.SNS_TOPIC_ARN
        }).promise();

        return {
            statusCode: 200,
            body: 'Success'
        }

    } catch (error) {
        console.error('Something went wrong sending the reminder', error);
        return {
            statusCode: 500,
            body: "Error"
        }
    }
}
