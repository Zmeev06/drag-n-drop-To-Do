import { useEffect, useState } from "react"
import { useAppSelector } from "../hooks/redux"
import { selectPaginate } from "../store/slices/paginateSlice"
import { IProject } from "../interfaces/serviceInterfaces"
import { Content } from "../components/UI/Content"
import { ProjectsTopBlock } from "../components/ProjectsPageComp/TopBlock"
import { RecentlyBlock } from "../components/ProjectsPageComp/RecentlyBlock"
import { ProjectsBlock } from "../components/ProjectsPageComp/ProjectsBlock"
import { Paginate } from "../components/ProjectsPageComp/Paginate"


export const ProjectsPage = () => {
  const projects = useAppSelector((state) => state.projects.value)
  const currentPage = useAppSelector(selectPaginate)
  const [paginateProjects, setPaginateProjects] = useState<IProject[]>(
    projects.length > 0
      ? projects.slice(currentPage * 8 - 8, currentPage * 8)
      : [],
  )
  useEffect(() => {
    setPaginateProjects(projects.slice(currentPage * 8 - 8, currentPage * 8))
  }, [currentPage, projects])

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects))
  }, [projects])

  return (
    <Content maxW="lg" pt={10} pb={10}>
      <ProjectsTopBlock />
      <RecentlyBlock />
      <ProjectsBlock projects={paginateProjects} />
      <>{projects.length !== 0 && <Paginate projects={projects} />}</>
    </Content>
  )
}
