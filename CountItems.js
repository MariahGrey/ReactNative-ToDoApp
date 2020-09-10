import React, {useContext} from 'react';
import {ToDoItemsContext} from './ToDoList';
import styled from 'styled-components';

const CountItems = () => {
  const {items: entries} = useContext(ToDoItemsContext);
  const numberOfItems = entries.length;

  return (
    <Counter disabled={numberOfItems === 0}>
      <CounterText>{numberOfItems}</CounterText>
    </Counter>
  );
};

export default CountItems;

const Counter = styled.View`
  color: #7c77b9;
  background-color: ${(props) =>
    props.disabled ? '#555' : 'rgba(255,255,255,0.3)'}
  border-color: 'rgba(255,255,255,0.2)';
  padding: 5px;
  margin: 15px;
  border-radius: 7px;
  border-width: 2px;
  height: 60px;
  width: 60px;
  text-align: center;
  justify-content: center;
`;

const CounterText = styled.Text`
  flex-direction: row;
  justify-content: center;
  text-align: center;
  font-size: 25px;
  margin: 10px;
  color: #fff;
`;
