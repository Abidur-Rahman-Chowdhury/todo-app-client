import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const TodoList = ({ list , index,handelDelete}) => {
    const { _id, taskName, deadLine, complete } = list;
    const [done, setdone] = useState(false);
    useEffect(() => {
        if (done) {
            return <LoadingSpinner></LoadingSpinner>
        }
    },[])
    const handelDone = (id) => {
        const newTodo = list;
        newTodo.complete = 'done';
        console.log(newTodo);
        const url = `http://localhost:5000/todo/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newTodo)


        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Task is completed successfully');
                    setdone(true);
                    
            }
        })

       
    }
   
  
    return (
        <tr>
            <th>{ index+1}</th>
            <td > <span className={`${complete ? 'line-through': '' }`}>{taskName}</span> </td>
            <td>{ deadLine}</td>
            <td>
                <button onClick={()=>handelDone(_id)} class="btn btn-xs btn-success mr-2">Done</button>
                <button onClick={()=>handelDelete(_id)} class="btn btn-xs btn-error">Delete</button>
            </td>
      </tr>
    );
};

export default TodoList;