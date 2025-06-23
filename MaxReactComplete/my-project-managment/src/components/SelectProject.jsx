import no_projects from '../assets/no-projects.png';
import CreateProjectButton from './CreateProjectButton';

export default function SelectProject({onAdd}) {
   return(
      <div className="mt-24 text-center w-2/3">
         <img className="w-16 h-16 object-contain mx-auto" src={no_projects} alt="Clipboard list with pen"/>
         <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
         <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
         <p className="mt-8">
            <CreateProjectButton text="Create new project" onAdd={onAdd} />
         </p>
      </div>
   );
}