import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MakeTodo = () => {
    const [user] = useAuthState(auth);
    
    const createTodoList = (e) => {
        e.preventDefault();
        const taskName = e.target.taskName.value;
        const deadLine = e.target.deadLine.value;
        console.log(taskName,deadLine);
        const myTodoList = {
            taskName,
            deadLine,
            user: user.email
            
        }
        fetch(`http://localhost:5000/todo`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(myTodoList)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Your Todo is successfully created')
                    e.target.reset();
                }
        })
    }
    return (
        <div>
            <h2 className='text-purple-500 font-bold uppercase text-center mt-20 mb-10 text-4xl'>welcome to your todo Dashboard</h2>

            <div className="flex w-[500px] p-10 shadow-xl mx-auto bg-base-100 justify-center mt-20 mb-[500px]">
            <div className="card w-full bg-base-100 ">
          <form className='w-full h-full' onSubmit={createTodoList}>
            <input type="text" placeholder='Task Name' name="taskName" className='w-full h-[40px] my-5 px-4 border-2' required />
            <input type="date" placeholder='Dead Line' name="deadLine" className='w-full h-[40px] my-5 px-4 border-2'  required/>
            
            <input type="submit"  value="Create" className='w-full h-[40px] my-5 px-4 border-2 bg-purple-500 btn' />
          </form>
        </div>
      </div>
        </div>
    );
};

export default MakeTodo;