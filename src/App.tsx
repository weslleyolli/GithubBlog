import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { DetailsProfileGithub } from './pages/profile-github/details-profile-github'

import './Styles.css'
import { AllDetailsRepository } from './pages/detail-repository/all-details-repository'

const router = createBrowserRouter([
  {
    path: "/",
    element: <DetailsProfileGithub />
  },
  {
    path: "/Repository/:username/:repoName",
    element: <AllDetailsRepository />
  }
])

export function App() {
  return <RouterProvider router={router} />
}
