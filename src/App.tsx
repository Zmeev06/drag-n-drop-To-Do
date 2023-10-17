import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { TasksPage } from './pages/TasksPage'
import { Helmet } from 'react-helmet'
import { ProjectsPage } from './pages/ProjectsPage'

export const App = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<ProjectsPage />} />
            <Route path="project/:id" element={<TasksPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
