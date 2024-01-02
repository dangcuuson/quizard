# Quizard

## Summary

* [Project structure](#project-structure)
* [Local setup and development workflow](#local-setup-and-development-workflow)

## Project structure
Monorepo project setup with 2 packages: `quizard-dev` and `quizard-cdk`
```
├── packages
│   ├── quizard-dev
│   │   ├── src
│   │   └── package.json
│   ├── quizard-cdk
│   │   ├── src
│   │   └── package.json
├── node_modules
├── package.json
```

### quizard-cdk
`aws-cdk` backend to build serverless stack. 
Using `DynamoDB` for storage, `Cognito` for Authentication, `AppSync` for GraphQL API, `Lambda` for GraphQL resolvers

### quizard-web
`React` front-end, using `aws-amplify` for Authentication and UI building.

## Local setup and development workflow

### Local setup

* `npm run install`: install all package dependencies
* `npm run build-gql`: generate typescript definitions from GraphQL schema
* Navigate to `packages/quizard-cdk`
* `aws configure` to setup aws cli. Need AWS CLI installed.
* `npm run deploy`: deploy the stack to AWS. After deployment, a file will be generated in `cdk-outputs/<git_branch>.json`,
which contain information of the stack (e.g userPoolId, GraphQL endpoint). The information will be injected into React front-end
* Navigate to `packages/quizard-web`
* `npm run dev` and open browser on `http://localhost:8000`

### Development workflow

#### When GraphQL change (either it's backend schema def, or front end query/mutation)

`npm run build-gql` at root folder to re-generate TypeScript types

#### When Backend code change
`npm run deploy` on `quizard-cdk` to redeploy stack to the cloud

#### When Frontend code change
Changes should be refresh immediately on browser if using `npm run dev` on `quizard-web`