import {useState,useRef, useDebugValue} from 'react';
import Sidebar from './components/Sidebar';
import SelectProject from './components/SelectProject';
import AddProject from './components/AddProject';
import ViewProject from './components/ViewProject';

const initProjects = [
  {
    id: 0,
    title: "Test Project",
    description: "A project to test the app with.",
    dueDate: "2026-01-01",
    tasks: []
  }
];

function App() {
  const [projects, setProjects] = useState(initProjects);
  const [selectedProjectId, setSelectedProjectId] = useState(-1);
  const [isAdding, setIsAdding] = useState();

  const newProject = useRef();
  const editProject = useRef();

  function clearAll() {
    setSelectedProjectId(-1);
    setIsAdding(false);
  }

  function updateTasks() {
    setProjects(prevProjects => prevProjects.map((row, rowIndex) => {
      if (row.id === selectedProjectId) {
        row.tasks = [...editProject.current.getTasks()];
      } 

      return {...row};
    }));
  }

  function beforeSwitchProject() {
    if (selectedProjectId > -1) {
      updateTasks();
    }
  }

  function handleSelect(index) {
    //If we already have a selected project, we need to update the tasks before we switch.
    beforeSwitchProject();

    setIsAdding(false);
    setSelectedProjectId(index);
  }

  function addProject() {
    //If we already have a selected project, we need to update the tasks before we switch.
    beforeSwitchProject();

    setSelectedProjectId(-1);
    setIsAdding(true);
  }

  function handleCancel() {
    clearAll();
  }

  function handleCreate() {
    setProjects(prevProjects => [...prevProjects, {id: prevProjects.length, ...newProject.current.getData()}]);
    clearAll();
  }

  function handleDelete(id) {
    setProjects(prevProjects => prevProjects.filter((row) => row.id != id));
    clearAll();
  }
  
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar projects={projects} onAdd={addProject} onSelect={handleSelect} />
        {selectedProjectId === -1 && !isAdding && <SelectProject onAdd={addProject} />}
        {isAdding && <AddProject onCancel={handleCancel} onSave={handleCreate} ref={newProject} />}
        {selectedProjectId > -1 && <ViewProject project={projects[selectedProjectId]} onDelete={handleDelete} ref={editProject} />}
      </main> 
    </>
  );
}

export default App;
