import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Footer from './component/Footer/Footer';
import NavBar from './component/Nav_Bar/NavBar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Form from './component/Sign_In_Page/Form';
import UserIndex from './component/User_Page/UserIndex';
import UserIndexTransaction from './component/User_Page/UserIndexTransaction';
import { Provider } from 'react-redux';
import { store } from './Store';
import Error401 from './component/Error/Error401';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Form />} />
          <Route path="/user/profile" element={<UserIndex />} />
          <Route path="/user/transaction" element={<UserIndexTransaction />} />
          <Route path="/error401" element={<Error401 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  </Provider>
);