import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { CreateEvent } from './admins/CreateEvent';
import { RegisterParticipant } from './participants/RegisterParticipant';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/register",
    element:<RegisterParticipant/>
  },
  {
    path:"/recover",
    element:<div>rec</div>
  },
  {
    path:"/home",
    element:<div>pipipi</div>
  },
  {
    path:"/createEvent",
    element:<CreateEvent/>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;