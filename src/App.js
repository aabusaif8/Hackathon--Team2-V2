import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import MyAccount from './pages/MyAccount';
import Legal from './pages/support/Legal';
import GetHelp from './pages/support/GetHelp';
import TwoStepAuthentication from './pages/securityandPrivacy/TwoStepAuthentication';
import Accessibility from './pages/support/Accessibility';
import PersonalInformation from './pages/personalSettings/PersonalInformation';
import LinkedAccounts from './pages/personalSettings/LinkedAccounts';
import MyStatements from './pages/securityandPrivacy/MyStatements';
import ChangePassword from './pages/securityandPrivacy/ChangePassword';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/myAccount" element={<MyAccount />}/>
          <Route path="/legal" element={<Legal />}/>
          <Route path="/gethelp" element={<GetHelp />}/>
          <Route path="/twostepauthentication" element={<TwoStepAuthentication />}/>
          <Route path="/accessibility" element={<Accessibility />}/>
          <Route path="/personalinformation" element={<PersonalInformation />}/>
          <Route path="/linkedaccounts" element={<LinkedAccounts />}/>
          <Route path="/mystatements" element={<MyStatements />}/>
          <Route path="/changepassword" element={<ChangePassword />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
