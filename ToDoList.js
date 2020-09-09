import React, {useState, createContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import ToDoItems from './ToDoItems.js';
import CountItems from './CountItems.js';
import {Header} from 'react-native-elements';

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
      <Header
        placement="left"
        containerStyle={{backgroundColor: '#7C77B9', height: 200}}
        leftComponent={{text: 'To Do App', style: styles.largeText}}
        rightComponent={<CountItems />}
      />
      <ScrollView style={styles.container}>
        <View style={styles.rowContainerSpaceEven}>
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
        <View>
          <ToDoItems />
        </View>
      </ScrollView>
    </ToDoItemsContext.Provider>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C2E7D9',
    height: 1200,
  },
  rowContainerSpaceEven: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 15,
  },
  largeText: {
    fontSize: 40,
    marginLeft: 25,
    color: '#fff',
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
    paddingLeft: 10,
    width: 250,
    height: 60,
  },
});
