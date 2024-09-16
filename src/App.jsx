import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Comments } from './pages/Comments';
import { SingleComment } from './pages/SingleComment';



function App() {  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Comments/>,
    },
    {
      path: "/det_comments",
      element: <SingleComment/>,
    },

  ]);

  return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
