import './App.css';
import RootLayout from './layout/RootLayout';
import MainPage, { popularDestinationsLoader } from './pages/MainPage';
import {  createBrowserRouter, Routes, Route, NavLink, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import UserLayout from './layout/UserLayout';
import AccountInformation from './components/UserLayout_components/AccountInformation';
import MyBooking from './components/UserLayout_components/MyBooking'

const router = createBrowserRouter(
  createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
          <Route 
            index 
            element={<MainPage />} 
          />
          <Route path='about' element={<div style={{marginTop: "200px"}}>about</div>}/>

          <Route path='user' element={<UserLayout />}>
            <Route path='account' element={<AccountInformation />}/>
            <Route path='mybooking' element={<MyBooking />}/>
          </Route>

          <Route path='*' element={<NotFound />}/>
        </Route>
  )
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
