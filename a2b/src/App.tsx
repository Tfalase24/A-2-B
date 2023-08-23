import React, { lazy } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

const Start = lazy(() => import('./pages/start/Start'));
const Home = lazy(() => import('./pages/home-page/Home'));
const Signup = lazy(() => import('./pages/sign-up/Signup'));
const Login = lazy(() => import('./pages/log-in/Login'));
const SavedLocations = lazy(
  () => import('./pages/saved-locations/Savedlocations')
);
const CreateARoute = lazy(() => import('./pages/create-a-route/CreateARoute'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />}></Route>
      <Route path="signup" element={<Signup />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="saved-locations" element={<SavedLocations />}></Route>
      <Route path="create-a-route" element={<CreateARoute />}></Route>
    </Routes>
  );
}

export default App;
