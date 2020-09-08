import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ToDoItemsContext} from './ToDoList';

const ToDoItems = () => {
  const {items: entries, deleteItem: deleteTask} = useContext(ToDoItemsContext);

  const Task = ({item}) => {
    return (
      <View key={item.key}>
        <View style={styles.ToDoListMainListItem}>
          <Text>{item.text}</Text>
        </View>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteTask(item.key)}>
          <Text style={styles.submitButtonText}>X</Text>
        </TouchableOpacity>
      </View>
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
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#80D39B',
    color: '#888',
    height: 1200,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 15,
  },
  largeText: {
    fontSize: 30,
    marginBottom: 15,
    marginLeft: 15,
  },
  submitButton: {
    padding: 5,
    margin: 15,
    backgroundColor: '#7C77B9',
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#7C77B9',
    width: 100,
    height: 60,
  },
  submitButtonText: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25,
    marginTop: 10,
    color: '#fff',
  },
  ToDoListMainHeaderInput: {
    padding: 5,
    margin: 15,
    fontSize: 25,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#ffffff',
    color: '#7C77B9',
    backgroundColor: '#ffffff',
    width: 250,
    height: 60,
  },
  deleteButton: {
    padding: 5,
    margin: 15,
    backgroundColor: '#7C77B9',
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#7C77B9',
    width: 60,
    height: 60,
  },
  ToDoListMainListItem: {
    color: '#7C77B9',
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderColor: 'rgba(255,255,255,0.2)',
    margin: 15,
    padding: 5,
    fontSize: 50,
    borderRadius: 7,
    borderWidth: 2,
    width: 250,
    height: 60,
    textAlign: 'center',
    justifyContent: 'center',
  },
});
