import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ToDoItemsContext} from './ToDoList';

const CountItems = () => {
  const {items: entries} = useContext(ToDoItemsContext);
  const numberOfItems = entries.length;

  return (
    <View style={styles.counter}>
      <Text style={styles.submitButtonText}>{numberOfItems}</Text>
    </View>
  );
};

export default CountItems;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 30,
  },
  counter: {
    color: '#7C77B9',
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderColor: 'rgba(255,255,255,0.2)',
    padding: 5,
    margin: 15,
    borderRadius: 7,
    borderWidth: 2,
    height: 60,
    width: 60,
    textAlign: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25,
    margin: 10,
    color: '#7C77B9',
  },
});
