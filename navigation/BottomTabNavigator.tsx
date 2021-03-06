import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import Exam from '../screens/exams/Exam';
import ExamResult from '../screens/exams/ExamResult';
import NotificationScreen from '../screens/extensions/NotificationScreen';
import GrammarDetail from '../screens/grammars/GrammarDetail';
import GrammarTestingResult from '../screens/grammars/GrammarTestingResult';
import ListLessons from '../screens/grammars/ListLessons';
import TestingGrammar from '../screens/grammars/TestingGrammar';
import Home from '../screens/Home';
import ListeningCategory from '../screens/listening/ListeningCategory';
import ListeningDetail from '../screens/listening/ListeningDetail';
import ListeningLessons from '../screens/listening/ListeningLessons';
import ListeningResult from '../screens/listening/ListeningResult';
import ListeningTesting from '../screens/listening/ListeningTesting';
import TestingResult from '../screens/listening/TestingResult';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import ReadingCategory from '../screens/reading/ReadingCategory';
import ReadingDetail from '../screens/reading/ReadingDetail';
import ReadingLessons from '../screens/reading/ReadingLessons';
import ReadingResult from '../screens/reading/ReadingResult';
import ReadingStartTesting from '../screens/reading/ReadingStartTesting';
import ReadingTest from '../screens/reading/ReadingTest';
import Register from '../screens/Register';
import TabTwoScreen from '../screens/TabTwoScreen';
import Vocabularies from '../screens/Vocabularies';
import VocabularyLession from "../screens/vocabularies/VocabularyLession";
import VocabularyList from "../screens/vocabularies/VocabularyList";
import VocabularyTopic from "../screens/vocabularies/VocabularyTopic";
import VocabularyTest from "../screens/vocabularies/VocabularyTest";
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabStackParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-person" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const TabStack = createStackNavigator<TabStackParamList>();
export function TabStackNavigator() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen
        name="Login"
        component={Login}
        options = {{
          headerTitle: '',
          headerLeft: () => null,
          headerShown: false
        }}
      />
      <TabStack.Screen
        name="Register"
        component={Register}
        options = {{
          headerTitle: '',
          headerLeft: () => null,
          headerShown: false
        }}
      />
      <TabStack.Screen
        name="HomeApp"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <TabStack.Screen
        name="VocabularyOverview"
        component={TabTwoScreen}
        options={{
          headerTitle: 'Từ vựng',
          headerStyle: { backgroundColor: "#00CE9F" },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
          headerBackTitleStyle: {color: 'white'},
          headerBackTitle: 'Home'
        }}
      />
      <TabStack.Screen
        name="VocabularyTopic"
        component={VocabularyTopic}
        options={{
          headerTitle: 'Từ vựng N3',
          headerStyle: { backgroundColor: "#00CE9F" },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
          headerBackTitleStyle: {color: 'white'},
          headerBackTitle: 'Home'
        }}
      />
      <TabStack.Screen
        name="Lesson"
        component={Vocabularies}
        options={{
          headerTitle: 'Bài học',
          headerStyle: { backgroundColor: "#00CE9F", },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
        }}
      />
       <TabStack.Screen
        name="VocabularyLession"
        component={VocabularyLession}
        options={{
          headerTitle: 'Chủ đề từ vựng',
          headerStyle: { backgroundColor: "#00CE9F" },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
          headerBackTitleStyle: {color: 'white'},
          headerBackTitle: 'Home' 
        }}
        />
       <TabStack.Screen
        name="VocabularyList"
        component={VocabularyList}
        options={{
          headerTitle: 'Danh sách từ vựng',
          headerStyle: { backgroundColor: "#00CE9F" },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
          headerBackTitleStyle: {color: 'white'},
          headerBackTitle: 'Home' 
        }}
        />
       <TabStack.Screen
        name="VocabularyTest"
        component={VocabularyTest}
        options={{
          headerTitle: 'Bài test trắc nghiệm',
          headerStyle: { backgroundColor: "#00CE9F" },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
          headerBackTitleStyle: {color: 'white'},
          headerBackTitle: 'Home' 
        }}
        />
      <TabStack.Screen
        name="GrammarLessons"
        component={ListLessons}
        options={{
          headerTitle: 'Ngữ pháp',
          headerStyle: { backgroundColor: "#00CE9F", },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
        }}
      />
      <TabStack.Screen
        name="GrammarDetail"
        component={GrammarDetail}
        options={{
          headerTitle: 'Học Ngữ Pháp',
          headerStyle: { backgroundColor: "#00CE9F", },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
        }}
      />
      <TabStack.Screen
        name="ReadingCategory"
        component={ReadingCategory}
        options={{
          headerTitle: 'Đọc hiểu N3',
          headerStyle: { backgroundColor: "#00CE9F", },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
        }}
      />
      <TabStack.Screen
        name="ReadingLessons"
        component={ReadingLessons}
        options={{
          headerTitle: 'Bài học',
          headerStyle: { backgroundColor: "#00CE9F", },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
        }}
      />
      <TabStack.Screen
        name="ReadingDetail"
        component={ReadingDetail}
        options={{
          headerTitle: 'Luyện tập',
          headerStyle: { backgroundColor: "#00CE9F", },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
        }}
      />
      <TabStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          headerTitle: 'Bắt đầu',
          headerStyle: { backgroundColor: "#00CE9F", },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
        }}
      />
      <TabStack.Screen
        name="ReadingTest"
        component={ReadingTest}
        options={{
          headerTitle: () => null,
          headerStyle: { backgroundColor: "#00CE9F", },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
        }}
      />
      <TabStack.Screen
        name="ListeningCategory"
        component={ListeningCategory}
        options={{
          headerTitle: "Nghe hiểu N3",
          headerStyle: { backgroundColor: "#00CE9F", },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
        }}
      />
      <TabStack.Screen
        name="ListeningLessons"
        component={ListeningLessons}
        options={{
          headerTitle: "Bài học",
          headerStyle: { backgroundColor: "#00CE9F", },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
        }}
      />
      <TabStack.Screen
        name="ListeningDetail"
        component={ListeningDetail}
        options={{
          header: () => null,
          headerTitle: "Luyện tập",
          headerStyle: { backgroundColor: "#00CE9F", },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
        }}
      />
      <TabStack.Screen
        name="ListeningResult"
        component={ListeningResult}
        options={{
          headerTitle: "Đáp án",
          headerStyle: { backgroundColor: "#00CE9F", },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
        }}
      />
      <TabStack.Screen
        name="ListeningTesting"
        component={ListeningTesting}
        options={{
          headerTitle: () => null,
          headerStyle: { backgroundColor: "#00CE9F", },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
        }}
      />
      <TabStack.Screen
        name="TestingResult"
        component={TestingResult}
        options={{
          headerTitle: "Đáp án",
          headerStyle: { backgroundColor: "#00CE9F", },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
        }}
      />
      <TabStack.Screen
        name="ReadingResult"
        component={ReadingResult}
        options={{
          headerTitle: "Đáp án",
          headerStyle: { backgroundColor: "#00CE9F", },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
        }}
      />
      <TabStack.Screen
        name="TestingGrammar"
        component={TestingGrammar}
        options={{
          headerTitle: () => null,
          headerStyle: { backgroundColor: "#00CE9F", },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
        }}
      />
      <TabStack.Screen
        name="GrammarTestingResult"
        component={GrammarTestingResult}
        options={{
          headerTitle: "Đáp án ngữ pháp",
          headerStyle: { backgroundColor: "#00CE9F", },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
        }}
      />
      <TabStack.Screen
        name="Exam"
        component={Exam}
        options={{
          headerTitle: () => null,
          headerStyle: { backgroundColor: "#00CE9F", },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
        }}
      />
      <TabStack.Screen
        name="ExamResult"
        component={ExamResult}
        options={{
          headerTitle: "Đáp án thi thử",
          headerStyle: { backgroundColor: "#00CE9F", },
          headerTitleStyle: { fontWeight: "bold", color: "white", fontSize: 20 },
        }}
      />
    </TabStack.Navigator>
  )
}
