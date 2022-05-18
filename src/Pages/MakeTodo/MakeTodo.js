import React from 'react';

const MakeTodo = () => {
    return (
        <div>
            <h2 className='text-purple-500 font-bold uppercase text-center mt-20 mb-10 text-4xl'>welcome to your todo Dashboard</h2>

            <div className="flex w-[500px] p-10 shadow-xl mx-auto bg-base-100 justify-center mt-20 mb-[500px]">
            <div className="card w-full bg-base-100 ">
          <form className='w-full h-full' >
            <input type="text" placeholder='Task Name' name="task-name" className='w-full h-[40px] my-5 px-4 border-2' required />
            <input type="text" placeholder='Dead Line' name="password" className='w-full h-[40px] my-5 px-4 border-2'  required/>
            
            <input type="submit"  value="Create" className='w-full h-[40px] my-5 px-4 border-2 bg-purple-500 btn' />
          </form>
        </div>
      </div>
        </div>
    );
};

export default MakeTodo;