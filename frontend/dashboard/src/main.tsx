import React from 'react';
import ReactDOM from 'react-dom/client';
import { DashboardLayout } from './components/DashboardLayout';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DashboardLayout />
  </React.StrictMode>
);
