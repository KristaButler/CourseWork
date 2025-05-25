import {useState,useRef,useImperativeHandle} from 'react';

export default function ViewProject({project, onDelete, ref}) {
   const [tasks, setTasks] = useState(project.tasks ?? []);
   const [projectId, setProjectId] = useState(project.id);
   const newTask = useRef();

   if(projectId !== project.id) {
      setProjectId(project.id);
      setTasks(project.tasks ?? []);
   }

   useImperativeHandle(ref, () =>{
      return {
         getTasks() {
            return [...tasks];
         }
      }
   });

   let formattedDate = new Date(`${project.dueDate}T00:00:00`).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short',
      day: 'numeric'
   });

   function handleAddTask() {
      setTasks(prevTasks => [newTask.current.value, ...prevTasks]);
   }

   function handleClearTask(index) {
      setTasks(prevTasks => prevTasks.filter((row, rowIndex) => rowIndex != index ));
   }

   return <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
         <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
            <button className="text-stone-600 hover:text-stone-950" onClick={() => onDelete(project.id)}>Delete</button>
         </div>
         <p className="mb-4 text-stone-400">{formattedDate}</p>
         <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
      </header>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div className="flex items-center gap-4">
         <input ref={newTask} className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
         <button className="text-stone-700 hover:text-stone-950" onClick={handleAddTask}>Add Task</button>
      </div>
      <ul className="p-4 mt-8 rounded-md bg-stone-100">
         {tasks.map((row, rowIndex) => (
            <li key={`task${rowIndex}`} className="flex justify-between my-4">
               {row}
               <button className="text-stone-700 hover:text-red-500" onClick={() => handleClearTask(rowIndex)}>Clear</button>
            </li>
         ))}
      </ul>
   </div>
}