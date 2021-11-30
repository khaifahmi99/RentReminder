# Rent Reminder with Serverless and Infrastructure as Code

This application is mainly an automated reminder application that will send out
notification to everyone (that subscribed) in your household, so that they will not
forget to pay their rent!

## Resources Used in AWS
1. Lambda
2. SNS
3. Event Bridge

## Steps
1. Make sure you have AWS SAM and AWS CLI installed and setup
2. Clone the repository `git clone git@github.com:khaifahmi99/RentReminder.git`
3. Go inside the directory `cd RentReminder`
4. Make sure you have NodeJS and npm installed
5. Install dependencies `npm install`
6. Copy the `template.yaml.example` to `template.yaml` and fill in the email addresses of anyone in your household (Look for the Subscription part in the file)
7. Since the functions are written in Typescript, we need to compile and then build the SAM application `npm run compile && sam build`
8. Deploy the application for the first time `sam deploy --guided` and follow the prompts given

After a successful deployment, those email listed in the `template.yaml` will receive a
subscription confirmation from AWS that they can accept to receive future notifications. By default, the reminder will be sent on the 9th of every month (12am UTC) - You can modify this in the `template.yaml` (Look for the cron part in the file)