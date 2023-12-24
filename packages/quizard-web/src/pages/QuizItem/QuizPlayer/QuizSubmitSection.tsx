import { Text, Loader, View, Message } from '@aws-amplify/ui-react';
import React from 'react';
import { StoredQuiz } from './QuizPlayerHooks';
import { gql } from '@gql/gql';
import { useMutation } from '@apollo/client';
import { maybe } from '@utils/dataUtils';
import { AddScoreMutation } from '@gql/graphql';

const addScoreMutation = gql(/* GraphQL */ `
    mutation addScore($input: ScoreInput!) {
        addScore(input: $input) {
            username
            percentage
            nCorrect
            nQuestions
        }
    }
`);

interface Props {
    storedQuiz: StoredQuiz;
    onCompleted: () => void;
}
const QuizSubmitSection: React.FC<Props> = ({ storedQuiz, onCompleted }) => {
    const [error, setError] = React.useState('');
    const [addScoreResult, setAddScoreResult] = React.useState<AddScoreMutation | null>(null);
    const [addScore, addScoreState] = useMutation(addScoreMutation);

    const uploadScore = React.useCallback(() => {
        return addScore({
            variables: {
                input: {
                    quizId: storedQuiz.quizId,
                    nQuestions: storedQuiz.questions.length,
                    nCorrect: storedQuiz.questions.filter((q) => {
                        const selectedOption = maybe(q.options[q.userSelected]);
                        return selectedOption?.isCorrect;
                    }).length,
                },
            },
        })
            .then((result) => {
                setAddScoreResult(result.data || null);
                onCompleted();
            })
            .catch((err) => {
                console.error(err);
                setError(`An error occurer when trying to submit your answers :(`);
            });
    }, []);
    React.useEffect(() => {
        uploadScore();
    }, []);
    if (addScoreState.loading || !addScoreState.called) {
        return (
            <View>
                <Text>Submitting your answers. Please wait</Text>
                <Loader variation="linear" />
            </View>
        );
    }
    if (error) {
        return <Message colorTheme="error" hasIcon={true} heading={error} />;
    }
    return (
        <View>
            <Message colorTheme="success" hasIcon={true} heading={<Text>Your score has been uploaded</Text>} />
            {!!addScoreResult && (
                <Text>
                    Your score is {addScoreResult.addScore.nCorrect}/{addScoreResult.addScore.nQuestions}
                </Text>
            )}
        </View>
    );
};

export default QuizSubmitSection;