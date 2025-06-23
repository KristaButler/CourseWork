import { useImperativeHandle, useRef } from "react";
import Input from './Input';

export default function AddProject({onCancel, onSave, ref}) {
   const title = useRef();
   const description = useRef();
   const dueDate = useRef();

   useImperativeHandle(ref, () =>{
      return {
         getData() {
            return { 
               title: title.current.value,
               description: description.current.value,
               dueDate: dueDate.current.value
            }
         }
      }
   });
   
   return (
      <div className="w-[35rem] mt-16">
         <menu className="flex items-center justify-end gap-4 my-4">
            <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button>
            <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={onSave}>Save</button>
         </menu>
         <p className="flex flex-col gap-1 my-4">             
               <Input ref={title} label="Title" type="text" />
               <Input ref={description} label="Description" type="textarea" />
               <Input ref={dueDate} label="Due Date" type="date" />
         </p>
      </div>
   );
}