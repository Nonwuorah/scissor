// import { React, useState } from 'react';
// import Header from "./components/Header";
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ContactUs from './pages/ContactUs';
import Pricing from './components/Pricing';
import Features from './components/Features';
import NotFound from './pages/NotFound';
import ErrorBoundary from './pages/ErrorBoundary';
import FormUrl from './components/FormUrl';
import './App.css';
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import ForgotPassword from './pages/ForgetPassword';
import { GetUserProfile } from './services/auth';

function App() {
    var user = GetUserProfile();
    return (
        <Router>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/contactUs" element={<ContactUs />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/features" element={<Features />} />
              <Route path="/formUrl" element={<FormUrl />} />
              <Route path="/forgotPassword" element={<ForgotPassword />} />

              {/* redirect to login page if user is not authenticated */}
              <Route
                path="/dashboard"
                element={
                  user ? (
                    <Dashboard />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
              {/* redirect to profile page if user is already authenticated */}
              <Route
                path="/login"
                element={
                  user ? <Navigate to="/Dashboard" /> : <Login />
                }
              />
              {/* catch any other routes and render the 404 page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </ErrorBoundary>
        </Router>
    )
}


export default App
