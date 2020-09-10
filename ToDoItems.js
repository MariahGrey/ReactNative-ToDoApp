import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {ToDoItemsContext} from './ToDoList';
import styled from 'styled-components';

const ToDoItems = () => {
  const {items: entries, deleteItem: deleteTask} = useContext(ToDoItemsContext);

  const Task = ({item}) => {
    return (
      <RowContainer key={item.key}>
        <ToDoListMainListItem>
          <ListItemText>{item.text}</ListItemText>
        </ToDoListMainListItem>

        <DeleteButton onPress={() => deleteTask(item.key)}>
          <SubmitButtonText>X</SubmitButtonText>
        </DeleteButton>
      </RowContainer>
    );
  };

  const listItems = entries.map((item) => <Task key={item.key} item={item} />);

  return (
    <View>
      <Text>{listItems}</Text>
    </View>
  );
};

export default ToDoItems;

const RowContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-left: 30px;
`;

const SubmitButtonText = styled.Text`
  flex-direction: row;
  justify-content: center;
  text-align: center;
  font-size: 25px;
  margin-top: 10px;
  color: #fff;
`;

const DeleteButton = styled.TouchableOpacity`
  padding: 5px;
  margin: 15px;
  background-color: #7c77b9;
  border-radius: 7px;
  border-width: 2px;
  border-color: #7c77b9;
  width: 60px;
  height: 60px;
`;

const ToDoListMainListItem = styled.View`
  color: #7c77b9;
  background-color: 'rgba(255,255,255,0.5)';
  border-color: 'rgba(255,255,255,0.2)';
  margin: 15px;
  padding: 5px;
  border-radius: 7px;
  border-width: 2px;
  width: 250px;
  line-height: 60px;
  text-align: center;
  justify-content: center;
`;

const ListItemText = styled.Text`
  padding-left: 10px;
  font-size: 25px;
  margin: 5px;
  color: #7c77b9;
`;
