import React from 'react';
import { BrowserRouter, Route, Routes, Redirect, Switch, useLocation } from 'react-router-dom';
// import {retry} from './utils/commonFunctions';
import {lazy, useState, Suspense, useEffect} from 'react';
import Home from './components/Home/Home';
import Main from './Main';
import Loginpage from './components/Login/Loginpage';
import Registerpage from './components/Register/Registerpage';
import Emailotp from './components/Phone/Emailotp';
import Mobileotp from './components/Phone/Mobileotp';
import Forgotun from './components/ForgotUP/Forgotun';
import Dashboards from './components/Dashboard/Dashboards';
import Virtualaccount from './components/Dashboard/Virtualaccount';
import Upi from './components/Dashboard/Upi';
import Reports from './components/Dashboard/Reports';
import Invoices from './components/Dashboard/Invoices';
import Account from './components/Dashboard/Account';
import Api from './components/Dashboard/Api';
import Webhook from './components/Dashboard/Webhook';
import Userprofile from './components/Dashboard/Userprofile';
import KybForm from './components/KycForms/KybForm';
import KycForm from './components/KycForms/KycForm';
import Enquiry from './components/Enquiry/Enquiry';
import Success from './components/Success/Success';
import Mwelcomeverify from './components/Mwelcomeverify/Mwelcomeverify';
import Otppage from './components/Otp/Otppage';
import Resetpassword from './components/Rpassword/Resetpassword';
import AmlPolicy from './Pages/AmlPolicy';
import CookiesPolicy from './Pages/CookiesPolicy';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import RedressalPolicy from './Pages/RedressalPolicy';
import TermsandCondition from './Pages/TermsandCondition';
import ProtectedRoute from './ProtectedRoute'; // Import ProtectedRoute components
import Docsmain from './docs/Docsmain';
import SystemInfo from './components/Dashboard/SystemInfo';
import PaymentCollect from './components/Dashboard/PaymentCollect';
import Settings from './components/Dashboard/Settings/Settings'

const Routing = () => {
  // const [showLanguageSwitcher, setShowLanguageSwitcher] = useState(false);
  // const location = useLocation();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Loginpage />} />
            <Route path="register" element={<Registerpage />} />
            <Route path="emailotp" element={<Emailotp />} />
            <Route path="mobileotp" element={<Mobileotp />} />
            <Route path="mobilemsg" element={<Mwelcomeverify />} />
            <Route path="forget" element={<Forgotun />} />
            <Route path="success" element={<Success />} />
            <Route path="otppage" element={<Otppage />} />
            <Route path="resetpassword" element={<Resetpassword />} />
            <Route path="AmlPolicy" element={<AmlPolicy />} />
            <Route path="cookiespolicy" element={<CookiesPolicy />} />
            <Route path="privacypolicy" element={<PrivacyPolicy />} />
            <Route path="redressalpolicy" element={<RedressalPolicy />} />
            <Route path="termsandcondition" element={<TermsandCondition />} />
            <Route path="docs" element={<Docsmain/>}/>
            

            {/* Protected Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboards />
              </ProtectedRoute>
            
            } />
            <Route path="virtualaccount" element={
              <ProtectedRoute>
                <Virtualaccount />
              </ProtectedRoute>
            } />
            <Route path="upi" element={
              <ProtectedRoute>
                <Upi />
              </ProtectedRoute>
            } />
            <Route path="reports" element={
              <ProtectedRoute>
                <Reports />
              </ProtectedRoute>
            } />
            <Route path="invoices" element={
              <ProtectedRoute>
                <Invoices />
              </ProtectedRoute>
            } />
            <Route path="setting" element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            } />
            <Route path="account" element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            } />
            <Route path="api" element={
              <ProtectedRoute>
                <Api />
              </ProtectedRoute>
            } />
            <Route path="webhook" element={
              <ProtectedRoute>
                <Webhook />
              </ProtectedRoute>
            } />
            <Route path="systeminfo" element={
              <ProtectedRoute>
                <SystemInfo />
              </ProtectedRoute>
            } />
            <Route path="userprofile" element={
              <ProtectedRoute>
                <Userprofile />
              </ProtectedRoute>
            } />
            <Route path="kycform" element={
              <ProtectedRoute>
                <KycForm />
              </ProtectedRoute>
            } />
            <Route path="kybform" element={
              <ProtectedRoute>
                <KybForm />
              </ProtectedRoute>
            } />
            <Route path="enquiry" element={
              <ProtectedRoute>
                <Enquiry />
              </ProtectedRoute>
            } />
            <Route path="paymentCollect" element={
              <ProtectedRoute>
                <PaymentCollect />
              </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routing;