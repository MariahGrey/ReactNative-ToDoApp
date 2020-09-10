import React from 'react';
import ToDoList from './ToDoList.js';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styled from 'styled-components';

function HomeScreen() {
  return (
    <StyledTab>
      <ToDoList />
    </StyledTab>
  );
}

function SettingsScreen() {
  return (
    <StyledTab>
      <StyledContainer>
        <StyledText>Settings!</StyledText>
      </StyledContainer>
    </StyledTab>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StyledNavigator>
        <Tab.Screen name="ToDo List" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </StyledNavigator>
    </NavigationContainer>
  );
}

const StyledTab = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const StyledContainer = styled.View`
  background-color: #c2e7d9;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const StyledText = styled.Text`
  font-size: 25px;
  color: #555;
`;

const StyledNavigator = styled(Tab.Navigator).attrs({
  tabBarOptions: {
    activeTintColor: '#7C77B9',
    inactiveTintColor: '#555',
    labelStyle: {
      fontSize: 25,
    },
  },
})``;
