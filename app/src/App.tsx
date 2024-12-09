import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { CreateEvent } from './admins/CreateEvent';
import { RegisterParticipant } from './participants/RegisterParticipant';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Dashboard } from './admins/Dashboard';
import { ListUsers } from './admins/ListUsers';
import { ListEvents } from './admins/ListEvents';
import { ListTeams } from './admins/ListTeams';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/home",
    element:<Dashboard/>
  },
  {
    path:"/user/list",
    element:<ListUsers/>
  },
  {
    path:"/event/list",
    element:<ListEvents/>
  },
  {
    path:"/team/list",
    element:<ListTeams/>
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
    element:<div>Jess</div>
  },
  {
    path:"/CreateEvent",
    element:<CreateEvent/>
  },
  {
    path: "/register-participants",
    element: <RegisterParticipant/>,
  },
  {
    path: "/crear-evento",
    element: <CreateEvent/>,
  },
  {
    path: "/show-list",
    // element: <ShowList/>,
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