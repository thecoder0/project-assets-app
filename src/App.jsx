import "./App.css"
import "@aws-amplify/ui-react/styles.css"
import { Button } from "./components/ui/button"
import { Plus } from "lucide-react"
import { useState, useEffect } from "react"
import { withAuthenticator } from "@aws-amplify/ui-react"
import ProjectCard from "./components/project-card"
import Header from "./components/header"
import ProjectForm from "./components/project-form"
import { 
  addProject, 
  listProject, 
  updateProject, 
  deleteProject 
} from "./api/project"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover"

function App({user, signOut}) {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    listProject().then((projects) => {
      setProjects(projects);
    })
  }, [])

  async function handleAdd(newProject) {
    const project = await addProject(newProject);
    setProjects((p) => [...p, project])
  }

  async function handleUpdate(id, attrs) {
    await updateProject(id, attrs);
    setProjects((projects) =>
      projects.map((project) => {
        if (project.id === id) {
          return {
            ...project,
            ...attrs,
          }
        }
        return project
      })
    )
  }

  async function handleDelete(id) {
    try {
      await deleteProject(id);
      setProjects(projects.filter(project => project.id !== id));
    } catch (error) {
      console.error('Failed to delete project:', error)
    }
  }

  return (
    <div>
      <h1>Vite + React Project</h1>
  
      <div>
        <Header email={user.signInDetails.loginId} logout={signOut} />
        <div className="container max-w-screen-lg grid grid-cols-4 gap-5 mt-10">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
            />
          ))}
          <Popover>
            <PopoverTrigger asChild>
              <Button>
               <span className="mr-2">Add Project</span>
               <Plus />
             </Button>
            </PopoverTrigger>
           <PopoverContent>
             <ProjectForm handleAdd={handleAdd} />
           </PopoverContent>
         </Popover>
        </div>
      </div>
    </div>
  )
}

export default withAuthenticator(App)