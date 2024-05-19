import React, { useState } from 'react';
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
import ChatbotPopup from './components/ChatBotPopup';
import chatboticon from './assets/chatboticon.png';

function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  const handleChatbotToggle = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div className="relative">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/myAccount" element={<MyAccount />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/gethelp" element={<GetHelp />} />
          <Route path="/twostepauthentication" element={<TwoStepAuthentication />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/personalinformation" element={<PersonalInformation />} />
          <Route path="/linkedaccounts" element={<LinkedAccounts />} />
          <Route path="/mystatements" element={<MyStatements />} />
          <Route path="/changepassword" element={<ChangePassword />} />
        </Routes>
      </BrowserRouter>

      <button
        className="fixed bottom-4 right-4 bg-transparent hover:bg-gray-200 rounded-full p-2"
        onClick={handleChatbotToggle}
      >
        <img src={chatboticon} alt="Chatbot Icon" className="scale-50" />
      </button>

      {showChatbot && (
        <div className="fixed bottom-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4 max-w-md">
          <ChatbotPopup onClose={() => setShowChatbot(false)} />
        </div>
      )}
    </div>
  );
}

export default App;
