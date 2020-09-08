import React, {useState, createContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import ToDoItems from './ToDoItems.js';

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

    const newItem = {
      text: inputValue,
      key: Date.now(),
    };
    console.log(inputValue);
    const newItemsArray = items.concat(newItem);
    setItems(newItemsArray);
    setInputValue('');
  };

  const deleteItem = (key) => {
    const filteredItems = items.filter((item) => {
      console.log('deleted item: ' + item.key);
      return item.key !== key;
    });

    setItems(filteredItems);
  };

  return (
    <ToDoItemsContext.Provider value={{items, deleteItem}}>
      <View style={styles.container}>
        <Text style={styles.largeText}>To Do App</Text>
        <View style={styles.rowContainer}>
          <TextInput
            style={styles.ToDoListMainHeaderInput}
            value={inputValue}
            onChangeText={(value) => setInputValue(value)}
            placeholder="Enter Task"
            placeholderTextColor="#7C77B9"
          />
          <TouchableOpacity style={styles.submitButton} onPress={addItem}>
            <Text style={styles.submitButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <View style={styles.rowContainer}>
            <ToDoItems styles={styles.ToDoListMainListItem} />
          </View>
        </View>
      </View>
    </ToDoItemsContext.Provider>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  borderRadius: {
    borderRadius: 7,
    borderWidth: 2,
  },
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
    fontSize: 25,
    marginLeft: 20,
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
    fontSize: 75,
    borderRadius: 7,
    borderWidth: 2,
    width: 250,
    height: 60,
  },
});

// Font color wrong, font size wrong, X button needs
// to be in same row as task it corresponds to.
