import {
    Button, Col, Content, Grid, Radio, Row, Text, View,
    ActionSheet,
    Container,
    Root,
    Icon,
    Thumbnail,
    Spinner
} from 'native-base';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { connect } from 'react-redux';
import Question from '../../components/Question';
import { readingQuestions } from '../../data/readingQuestions';
const { width, height } = Dimensions.get('screen');
const MARU_IMG = require('../../assets/images/maru.jpg');
const BATSU_IMG = require('../../assets/images/batsu.jpg')
var length: number;
var nextLessonId: number;
const ReadingDetail = ({ route, navigation, reading }: any) => {
    const questions = readingQuestions().questions;
    const { lessonId, readingCategory, currentIndex } = route.params;
    const [userAnswer, setUserAnswer]: any = useState(null);
    const [resultCheck, setResultCheck]: any = useState(false);
    const scrollRef: any = useRef();
    const [result, setResult] = useState(false);
    const showResultCheck = (answerId: any) => {
        if (lesson !== null) {
            if (lesson.correct.id == answerId) {
                setResult(true)
            }
            else {
                setResult(false)
            }
        }
        scrollRef.current.scrollTo({ x: 0, y: 0, animated: true })
        setResultCheck(true);
    }
    const [lesson, setLesson]: any = useState(null);
    useEffect(() => {
        if (reading) {
            if (readingCategory == 1) {
                length = reading.short.length;
                if (currentIndex < length) {
                    setLesson(reading.short[currentIndex])
                }
                if (currentIndex + 1 < length) {
                    nextLessonId = reading.short[currentIndex + 1].id
                }
            }
            else if (readingCategory == 2) {
                length = reading.medium.length;
                if (currentIndex < length) {
                    setLesson(reading.medium[currentIndex])
                }
                if (currentIndex + 1 < length) {
                    nextLessonId = reading.medium[currentIndex + 1].id
                }
            }
            else if (readingCategory == 3) {
                length = reading.long.length;
                if (currentIndex < length) {
                    setLesson(reading.long[currentIndex])
                }
                if (currentIndex + 1 < length) {
                    nextLessonId = reading.long[currentIndex + 1].id
                }
            }
        }
    }, [currentIndex, readingCategory, lessonId])
    return (
        <React.Fragment>
            {lesson !== null ? (
                <ScrollView ref={scrollRef} style={{ backgroundColor: "white" }} scrollEnabled={!resultCheck}>
                    <Animatable.View animation="fadeIn" style={styles.container} duration={1000}>
                        <Text style={styles.indexStyle}>問題：{currentIndex + 1}</Text>
                        <Text style={styles.lessonTitle}>
                            {lesson.title}
                        </Text>
                        <View style={{ borderWidth: 3, margin: 5 }}>
                            <Text style={[styles.lessonDetail]}>
                                {lesson.paragraph}
                            </Text>
                            <Image source={require('../../assets/images/illustration.jpg')} style={{ resizeMode: "cover", maxWidth: 0.956 * width, height: 0.3 * height }} />
                        </View>
                        <Text style={styles.lessonDetail}>
                            <Text style={[{ fontWeight: "bold", color: 'red' }, styles.lessonDetail]}>
                                問題：
                    </Text>
                            {lesson.question}
                        </Text>
                        {lesson.answers.map((answer: any, i: number) => (
                            <View key={i} style={styles.answerRadio}>
                                <Radio color="gray" selected={userAnswer === i + 1} selectedColor="green" onPress={() => setUserAnswer(answer.id)} />
                                <Text style={{ fontSize: 20 }}>{answer.text}</Text>
                            </View>
                        ))}
                        <Grid>
                            <Root>
                                <Row style={{ marginTop: 0.1 * width, marginLeft: 0.17 * width, marginBottom: 0.18 * width }}>
                                    <Col>
                                        <Button success onPress={() => showResultCheck(userAnswer)} disabled={userAnswer !== null ? false : true}>
                                            <Text
                                            >
                                                Đáp án
                                            </Text>
                                        </Button>
                                    </Col>
                                    <Col>
                                        {currentIndex + 1 < length ? (
                                            <Button
                                                primary
                                                onPress={() => {
                                                    navigation.navigate("ReadingDetail", {
                                                        readingCategory: readingCategory,
                                                        lessonId: nextLessonId,
                                                        currentIndex: currentIndex + 1
                                                    });
                                                    scrollRef.current.scrollTo({ x: 0, y: 0, animated: true });
                                                }}
                                            >
                                                <Text>Tiếp theo</Text>
                                            </Button>
                                        ) : (
                                                <Button
                                                    danger
                                                    onPress={() => navigation.navigate("ReadingCategory")}
                                                >
                                                    <Text>Quay về</Text>
                                                </Button>
                                            )}
                                    </Col>
                                </Row>
                            </Root>
                        </Grid>
                        {resultCheck == true ? (
                            <View style={styles.result}>
                                <Button iconLeft danger onPress={() => setResultCheck(false)} large style={{ width: 50 }}>
                                    <Icon name='close' />
                                </Button>
                                <Image source={result == true ? MARU_IMG : BATSU_IMG} style={styles.resultNotification} />
                                {result == true ? (
                                    <Text style={styles.feedback}>Đúng rồi nè 😁</Text>
                                ): (
                                    <React.Fragment>
                                        <Text style={styles.feedback}>{" "} Sai rồi 😢</Text>
                                        <Container style={{paddingTop: 10}}>
                                            <Text style={styles.feedback}>Đáp án</Text>
                                            <Text style={styles.feedback}>{lesson.correct.text}</Text>
                                        </Container>
                                    </React.Fragment>
                                )}
                            </View>
                        ) : null}
                    </Animatable.View>
                </ScrollView>
            ) : (
                    <Spinner />
                )}
        </React.Fragment>
    )
}
const styles = StyleSheet.create({
    indexStyle: {
        fontWeight: "bold",
        fontSize: 20,
    },
    container: {
        marginTop: 0,
    },
    lessonTitle: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 24,
        color: 'blue'
    },
    lessonDetail: {
        lineHeight: 30,
        padding: 10,
        fontSize: 20,
    },
    answerRadio: {
        flexDirection: "row",
        marginTop: 0.01 * height,
        padding: 10,
        marginBottom: 0.01 * height,
    },
    result: {
        height: 0.6 * height,
        backgroundColor: 'white',
        position: "absolute",
        top: 0.1 * height,
        margin: 15,
        borderRadius: 15,
        width: 0.92 * width,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    resultNotification: {
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        height: 0.2 * height,
        width: 0.72 * width,
        resizeMode: "contain"
    },
    feedback: {
        fontSize: 24,
        textAlign: "center",
    }
})
const mapStateToProps = (state: any) => {
    return {
        reading: state.reading,
    }
}
export default connect(mapStateToProps, null)(React.memo(ReadingDetail));