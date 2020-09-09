import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ToDoItemsContext} from './ToDoList';

const ToDoItems = () => {
  const {items: entries, deleteItem: deleteTask} = useContext(ToDoItemsContext);

  const Task = ({item}) => {
    return (
      <View style={styles.rowContainer} key={item.key}>
        <View style={styles.ToDoListMainListItem}>
          <Text style={styles.listItemText}>{item.text}</Text>
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
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 30,
  },
  submitButtonText: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25,
    marginTop: 10,
    color: '#fff',
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
    borderRadius: 7,
    borderWidth: 2,
    width: 250,
    lineHeight: 60,
    textAlign: 'center',
    justifyContent: 'center',
  },
  listItemText: {
    paddingLeft: 10,
    fontSize: 25,
    margin: 5,
    color: '#7C77B9',
  },
});
