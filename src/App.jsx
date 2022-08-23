import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import Dashboard from './components/Layout/Dashboard/Dashboard';
import { useSelector } from 'react-redux';
import Discussion from './components/Layout/Discussion/Discussion';
import './app.scss';
import Spinner from './components/shared/Spinner/Spinner';
import Layout from './components/Layout/Layout';

function App() {
  const { show } = useSelector(state => state.spinner);

  return (
    <>
      <Layout>
        <Spinner open={show} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/discussion" element={<Discussion />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
