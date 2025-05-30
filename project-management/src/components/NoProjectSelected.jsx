import noProjectImage from '../assets/no-projects.png';
import Button from './Button';

export default function NoProjectSelected({onStartAddProject}) {
   let cssClasses = `List__item List__item--${$color}`;

   return (<div className="mt-24 text-center w-2/3">
      <img className="w-16 h-16 object-contain mx-auto" src={noProjectImage} alt="An empty task list"/>
      <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
      <p className="text-stone-600 mb-4">Select a project or get started with a new one</p>
      <p className="mt-8">
         <Button className={`List__item List__item--${$color}`} onClick={onStartAddProject}>Create new project</Button>
      </p>
   </div>);
}