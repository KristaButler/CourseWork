import CreateProjectButton from './CreateProjectButton';

export default function Sidebar({projects, onAdd, onSelect}) {
   return (
      <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">YOUR PROJECTS</h2>
        <CreateProjectButton text="+ Add Project" onAdd={onAdd} />
        <ul className="mt-8">
         {projects.map((row, rowIndex) => (
            <li key={`project${rowIndex}`}>
               <button className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800" onClick={() => onSelect(row.id)}>{row.title}</button>
            </li>
         ))}
         </ul>
      </aside>
   );
}