import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import TodoList from './TodoList';

const MyTodoList = () => {
  const [user] = useAuthState(auth);
  const [myTodoList, setTodoList] = useState([]);

  useEffect(() => {
    const email = user.email;
    const url = `https://cryptic-ridge-60527.herokuapp.com/todo?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTodoList(data));
  }, [user]);

  const handelDelete = (id) => {
    const url = `https://cryptic-ridge-60527.herokuapp.com/todo/${id}`;

    fetch(url, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert('Task successfully deleted');
          const remainingTask = myTodoList.filter((todo) => todo._id !== id);
          setTodoList(remainingTask);
        }
      });
  };
  return (
    <>
      <h2 className="text-center text-4xl mb-4 mt-10 font-bold uppercase">
        Welcome To Your To DO List
      </h2>
      <div className="overflow-x-auto mb-[400px]">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Task Name</th>
              <th>Dead Line</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myTodoList.map((list, index) => (
              <TodoList
                key={index}
                list={list}
                index={index}
                handelDelete={handelDelete}
              ></TodoList>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyTodoList;
