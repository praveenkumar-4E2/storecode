import React from 'react'
import { Route, Routes } from 'react-router-dom';
import RegisterationPage from './RegisterationPage';
import LoginPage from './LoginPage';
import ForgotPasswordPage from './ForgotPasswordPage';
import NewPasswordPage from './NewPasswordPage';
import OTPverificationPage from './OTPverificationPage';
import PasswordChangesPage from './PasswordChangesPage';
const RouterPage = () => {
  return (
    <div>
          
          <Routes>
              <Route path="/" Component={RegisterationPage}></Route>
              <Route path="/*" Component={RegisterationPage}></Route>
              <Route path="login" Component={LoginPage}></Route>
              <Route path="password/reset" Component={ForgotPasswordPage}></Route>
              <Route path="newpassword" Component={NewPasswordPage}></Route>
              <Route path="otp" Component={OTPverificationPage}></Route>
              <Route path="password/changed" Component={PasswordChangesPage}></Route>
        </Routes>
    </div>
  )
}

export default RouterPage