# D A N I E L W E L L I N G T O N  case interview by Thilina

## Technologies
***
To view the architecture diagramme open dw_architecture.png
A list of technologies used within the project:
* node js with typescripts
* AWS - Lamda,API Gateway,S3,Event bridge
* Git hub actions to develop serveless functions in AWS

## How to setup the project
***
Steps
* Create a AWS IAM user that have programmatic access to Lamda,API Gateway,S3,Event bridge
* Download Access key ID and Secret access key that provided by AWS
* Create a git hub repositery
* Go to settings -> secrets -> Actions
* Cick on New repositery secrect and add AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION
* Download soucrce from my repositery into a local computer
* Change the git remote url
* And push changes into new repositery
* Now, git hub actions trigger on push and build the code, then automatically deploy soloution in AWS cloud

## How to run test cases
***
* unit test -> run 'node t' in terminal
* integration test -> run 'npm run integ-test' in terminal
* unit test coverage -> run 'npm run coverage' in terminal

## How to build project locally
***
*  run 'npm run build' in terminal

## Notes
***
* AWS serverless configs included in serverless.yml
* git hub action configs included in github\workflows\main.yml
* To change load prodcuts data frequency, edit 'schedule: rate(60 minutes)' in serverless.yml

## What I intentionally leave
*** With time limitations 
* Swagger integration
* Some unit testing parts, But i have a good code coverage with current test cases (Please check unit_test_code_coverage.png )


