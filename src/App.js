import {useState} from 'react'
import {BrowserRouter} from 'react-dom'
import {BookList} from './FrontPage_BookList'
import {AddBook} from './AddBook'
import { createBrowserRouter,
          RouterProvider,
          Route,
          Link,useLocation,
          useNavigate, redirect, Navigate } from "react-router-dom"


// CONSTANTS

export const API_SERVER = 'http://localhost:5000/'




export const router = createBrowserRouter([
{
  path:"/create-book",
  element:(<div><AddBook/></div>)
},
{
  path:"/",
  element:(<App/>)
},
{
  path:"*",
  element:(<NotFound/>)
}

])




function NotFound()
{
  return (
    <div>
      <p>The page you are trying to reach could not be found.  Redirect to <Link to='/'>homepage</Link></p>
    </div>
  )
}

function App() {
  const [props, set_props] = useState({})
  const nav = useNavigate()

  return (
    <BookList/>
  );
}

export default App;
