import _ from 'lodash';
import React from 'react';
import { RouteProps } from 'react-router-dom';

const HomePage = React.lazy(() => import('@pages/Home/HomePage'));
const TopicItemPage = React.lazy(() => import('@pages/TopicItem/TopicItemPage'));
const QuizItemPage = React.lazy(() => import('@pages/QuizItem/QuizItemPage'));

export interface RouteItemConfig<TGet extends Function = Function> {
    props: RouteProps;
    getPath: TGet;
}

const createRouteItemConfig = <TGet extends Function>(config: RouteItemConfig<TGet>): RouteItemConfig<TGet> => {
    return config;
};

// TODO: move this file to @config/routeConfigs
export const routeConfigs = {
    home: createRouteItemConfig({
        getPath: () => '/',
        props: { path: '/', element: <HomePage /> }
    }),
    topicItem: createRouteItemConfig({
        getPath: (topic: string) => `/topic/${decodeURIComponent(topic)}`,
        props: { path: '/topic/:topic', element: <TopicItemPage /> }
    }),
    quizItem: createRouteItemConfig({
        getPath: (quizId: string) => `/quiz/${encodeURIComponent(quizId)}`,
        props: { path: '/quiz/:quizId', element: <QuizItemPage /> }
    }),
}