import React, { useEffect, useState } from 'react';
import SettingProvider from '../../Context/'
import Header from '../Header';
import List from '../List';
import Form from '../Form';

const Todo = () => {
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
      <Header />
      <Form list={list} setList={setList} />
      <List list={list} incomplete={incomplete} toggleComplete={toggleComplete} />
    </>
  );
};

export default Todo;