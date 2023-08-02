import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FullTodoList from './components/FullTodoList'

import  './styles/Styles.css'
import {createBrowserRouter,
  RouterProvider,
} from "react-router-dom"


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/fulltodolist",
    element:<FullTodoList/>
  },

])



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <RouterProvider router={router} />
)
