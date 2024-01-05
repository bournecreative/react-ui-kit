import 'antd/dist/reset.css'
import '../src/css/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root'
import ErrorPage from './pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/contacts/1',
        element: <div>test</div>,
      },
      {
        path: '/contacts/2',
        element: <div>test 2</div>,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
