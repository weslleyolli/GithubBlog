import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { DetailsProfileGithub } from './pages/profile-github/details-profile-github'

import './Styles.css'
import { AllDetailsRepository } from './pages/detail-repository/all-details-repository'
import { GitHubUserInput } from './pages/github-user-input/github-user-input'

const router = createBrowserRouter([
  {
    path: "/",
    element: <GitHubUserInput />,
  },
  {
    path: "/profile/:username",
    element: <DetailsProfileGithub />,
  },
  {
    path: "/Repository/:username/:repoName",
    element: <AllDetailsRepository />
  }
])

export function App() {
  return <RouterProvider router={router} />
}
