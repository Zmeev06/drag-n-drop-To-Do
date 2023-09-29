import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ProjectsPage } from './pages/ProjectsPage'
import { ProjectPage } from './pages/ProjectPage'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<ProjectsPage />} />
            <Route path="project/:id" element={<ProjectPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
