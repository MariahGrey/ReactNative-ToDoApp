import React, {useState, createContext} from 'react';
import {View} from 'react-native';
import ToDoItems from './ToDoItems.js';
import CountItems from './CountItems.js';
import {Header} from 'react-native-elements';
import styled from 'styled-components';

export const ToDoItemsContext = createContext({
  items: [],
  deleteItem: () => null,
});

const ToDoList = () => {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (inputValue === '') {
      return null;
    }

    const newItem = {text: inputValue, key: Date.now()};
    const newItemsArray = items.concat(newItem);
    setItems(newItemsArray);
    setInputValue('');
  };

  const deleteItem = (key) => {
    const filteredItems = items.filter((item) => {
      return item.key !== key;
    });

    setItems(filteredItems);
  };

  return (
    <ToDoItemsContext.Provider value={{items, deleteItem}}>
      <StyledHeader
        placement="left"
        leftComponent={<HeaderText>To Do App</HeaderText>}
        rightComponent={<CountItems />}
      />
      <Container>
        <RowContainer>
          <ToDoListMainHeaderInput
            value={inputValue}
            onChangeText={(value) => setInputValue(value)}
            placeholder="Enter Task"
          />
          <SubmitButton onPress={addItem}>
            <SubmitButtonText>Add</SubmitButtonText>
          </SubmitButton>
        </RowContainer>
        <View>
          <ToDoItems />
        </View>
      </Container>
    </ToDoItemsContext.Provider>
  );
};

export default ToDoList;

const StyledHeader = styled(Header).attrs({
  containerStyle: {
    backgroundColor: '#7C77B9',
    height: 200,
  },
})``;

const HeaderText = styled.Text`
  font-size: 40px;
  margin-left: 25px;
  color: #fff;
`;

const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin: 15px;
`;

const SubmitButtonText = styled.Text`
  flex-direction: row;
  justify-content: center;
  font-size: 25px;
  margin-top: 10px;
  margin-left: 20px;
  color: #fff;
`;

const Container = styled.ScrollView`
  background-color: #c2e7d9;
  height: 1200px;
`;

const ToDoListMainHeaderInput = styled.TextInput`
  padding: 5px;
  margin: 15px;
  font-size: 25px;
  border-radius: 7px;
  border-width: 2px;
  border-color: #fff;
  color: #7c77b9;
  background-color: #fff;
  padding-left: 10px;
  width: 250px;
  height: 60px;
`;

const SubmitButton = styled.TouchableOpacity`
  padding: 5px;
  margin: 15px;
  background-color: #7c77b9;
  border-radius: 7px;
  border-width: 2px;
  border-color: #7c77b9;
  width: 100px;
  height: 60px;
`;
