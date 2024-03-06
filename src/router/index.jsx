import Home from "../pages/Home";
import {
    createBrowserRouter
  } from "react-router-dom";
import Layout from "../pages/layouts/Layout";
import Project from "../pages/Project";
import Skill from "../pages/Skill";
import Experience from "../pages/Experience";
import About from "../pages/About";
import Contact from '../pages/Contact'
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"",
          element: <Home/>
        },
        {
          path:"/project",
          element: <Project/>
        },
        {
          path:"/skill",
          element: <Skill/>
        },
        {
          path:"/experience",
          element: <Experience/>
        },
        {
          path:"/about",
          element: <About/>
        },
        {
          path:"/contact",
          element: <Contact/>
        },
      ]
    },
  ]);

  export default router;