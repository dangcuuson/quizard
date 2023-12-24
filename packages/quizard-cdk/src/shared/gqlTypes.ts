/* tslint:disable */
/* eslint-disable */
import { GraphQLResolveInfo, GraphQLScalarType } from 'graphql';
/**
 * This file is auto-generated by graphql-schema-typescript
 * Please note that any changes in this file may be overwritten
 */
 

/*******************************
 *                             *
 *          TYPE DEFS          *
 *                             *
 *******************************/
export interface GQLQuiz {
  quizId: string;
  topic: string;
  title: string;
  questions: Array<GQLQuizQuestion>;
}

export interface GQLQuizQuestion {
  questionText: string;
  options: Array<GQLQuizQuestionOption>;
}

export interface GQLQuizQuestionOption {
  optionText: string;
  isCorrect: boolean;
}

export interface GQLQuizInput {
  topic: string;
  title: string;
  questions: Array<GQLQuizInputQuestion>;
}

export interface GQLQuizInputQuestion {
  questionText: string;
  options: Array<GQLQuizInputQuestionOption>;
}

export interface GQLQuizInputQuestionOption {
  optionText: string;
  isCorrect: boolean;
}

export interface GQLQuery {
  quizItem: GQLQuiz;
  quizList: Array<GQLQuiz>;
  topicList: Array<string>;
  scoreList: GQLScoreListResult;
}

export interface GQLMutation {
  addQuiz: GQLQuiz;
  populateQuizData: number;
  addScore: GQLScore;
}

export type GQLAWSDate = string;

export type GQLAWSTime = string;

export type GQLAWSDateTime = string;

export type GQLAWSTimestamp = number;

export type GQLAWSEmail = string;

export type GQLAWSJSON = unknown;

export type GQLAWSPhone = string;

export type GQLAWSURL = string;

export type GQLAWSIPAddress = string;

export interface GQLScore {
  username: GQLAWSEmail;
  userNickname: string;
  createdAt: GQLAWSDateTime;
  quizId: string;
  nQuestions: number;
  nCorrect: number;
  percentage: number;
}

export interface GQLScoreListResult {
  scores: Array<GQLScore>;
  lastEvaluatedKey?: GQLAWSJSON;
}

export interface GQLScoreInput {
  quizId: string;
  nQuestions: number;
  nCorrect: number;
}

export interface GQLScoreListIndexSelector {
  quizId_createdAt?: boolean;
  quizId_percentage?: boolean;
  user_createdAt?: boolean;
  user_quizId?: boolean;
}

/*********************************
 *                               *
 *         TYPE RESOLVERS        *
 *                               *
 *********************************/
/**
 * This interface define the shape of your resolver
 * Note that this type is designed to be compatible with graphql-tools resolvers
 * However, you can still use other generated interfaces to make your resolver type-safed
 */
export interface GQLResolver {
  Quiz?: GQLQuizTypeResolver;
  QuizQuestion?: GQLQuizQuestionTypeResolver;
  QuizQuestionOption?: GQLQuizQuestionOptionTypeResolver;
  Query?: GQLQueryTypeResolver;
  Mutation?: GQLMutationTypeResolver;
  AWSDate?: GraphQLScalarType;
  AWSTime?: GraphQLScalarType;
  AWSDateTime?: GraphQLScalarType;
  AWSTimestamp?: GraphQLScalarType;
  AWSEmail?: GraphQLScalarType;
  AWSJSON?: GraphQLScalarType;
  AWSPhone?: GraphQLScalarType;
  AWSURL?: GraphQLScalarType;
  AWSIPAddress?: GraphQLScalarType;
  Score?: GQLScoreTypeResolver;
  ScoreListResult?: GQLScoreListResultTypeResolver;
}
export interface GQLQuizTypeResolver<TParent = any> {
  quizId?: QuizToQuizIdResolver<TParent>;
  topic?: QuizToTopicResolver<TParent>;
  title?: QuizToTitleResolver<TParent>;
  questions?: QuizToQuestionsResolver<TParent>;
}

export interface QuizToQuizIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QuizToTopicResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QuizToTitleResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QuizToQuestionsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLQuizQuestionTypeResolver<TParent = any> {
  questionText?: QuizQuestionToQuestionTextResolver<TParent>;
  options?: QuizQuestionToOptionsResolver<TParent>;
}

export interface QuizQuestionToQuestionTextResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QuizQuestionToOptionsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLQuizQuestionOptionTypeResolver<TParent = any> {
  optionText?: QuizQuestionOptionToOptionTextResolver<TParent>;
  isCorrect?: QuizQuestionOptionToIsCorrectResolver<TParent>;
}

export interface QuizQuestionOptionToOptionTextResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QuizQuestionOptionToIsCorrectResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLQueryTypeResolver<TParent = any> {
  quizItem?: QueryToQuizItemResolver<TParent>;
  quizList?: QueryToQuizListResolver<TParent>;
  topicList?: QueryToTopicListResolver<TParent>;
  scoreList?: QueryToScoreListResolver<TParent>;
}

export interface QueryToQuizItemArgs {
  quizId: string;
}
export interface QueryToQuizItemResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToQuizItemArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToQuizListArgs {
  topic: string;
}
export interface QueryToQuizListResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToQuizListArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToTopicListResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface QueryToScoreListArgs {
  index: GQLScoreListIndexSelector;
  limit: number;
  exclusiveStartKey?: GQLAWSJSON;
}
export interface QueryToScoreListResolver<TParent = any, TResult = any> {
  (parent: TParent, args: QueryToScoreListArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLMutationTypeResolver<TParent = any> {
  addQuiz?: MutationToAddQuizResolver<TParent>;
  populateQuizData?: MutationToPopulateQuizDataResolver<TParent>;
  addScore?: MutationToAddScoreResolver<TParent>;
}

export interface MutationToAddQuizArgs {
  input: GQLQuizInput;
}
export interface MutationToAddQuizResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToAddQuizArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToPopulateQuizDataResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface MutationToAddScoreArgs {
  input: GQLScoreInput;
}
export interface MutationToAddScoreResolver<TParent = any, TResult = any> {
  (parent: TParent, args: MutationToAddScoreArgs, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLScoreTypeResolver<TParent = any> {
  username?: ScoreToUsernameResolver<TParent>;
  userNickname?: ScoreToUserNicknameResolver<TParent>;
  createdAt?: ScoreToCreatedAtResolver<TParent>;
  quizId?: ScoreToQuizIdResolver<TParent>;
  nQuestions?: ScoreToNQuestionsResolver<TParent>;
  nCorrect?: ScoreToNCorrectResolver<TParent>;
  percentage?: ScoreToPercentageResolver<TParent>;
}

export interface ScoreToUsernameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ScoreToUserNicknameResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ScoreToCreatedAtResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ScoreToQuizIdResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ScoreToNQuestionsResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ScoreToNCorrectResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ScoreToPercentageResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface GQLScoreListResultTypeResolver<TParent = any> {
  scores?: ScoreListResultToScoresResolver<TParent>;
  lastEvaluatedKey?: ScoreListResultToLastEvaluatedKeyResolver<TParent>;
}

export interface ScoreListResultToScoresResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}

export interface ScoreListResultToLastEvaluatedKeyResolver<TParent = any, TResult = any> {
  (parent: TParent, args: {}, context: any, info: GraphQLResolveInfo): TResult;
}
