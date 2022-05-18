import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const TodoList = ({ list, index, handelDelete }) => {
  const { _id, taskName, deadLine, complete } = list;
  const [done, setdone] = useState(false);
  useEffect(() => {
    if (done) {
      return <LoadingSpinner></LoadingSpinner>;
    }
  }, []);
  const handelDone = (id) => {
    const newTodo = list;
    newTodo.complete = 'done';
   
    const url = `https://cryptic-ridge-60527.herokuapp.com/todo/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    })
      .then((res) => res.json())
      .then((data) => {
        
        if (data.modifiedCount > 0) {
          alert('Task is completed successfully');
          setdone(true);
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        {' '}
        <span className={`${complete ? 'line-through' : ''}`}>
          {taskName}
        </span>{' '}
      </td>
      <td>{deadLine}</td>
      <td>
        <button
          onClick={() => handelDone(_id)}
          className="btn btn-xs btn-success mr-2"
        >
          Done
        </button>
        <button onClick={() => handelDelete(_id)} className="btn btn-xs btn-error">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TodoList;
