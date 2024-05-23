import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import InvestmentAssistant from './pages/InvestmentAssistant';
import ManualInvestment from './pages/ManualInvestment';
import AccountFinish from './pages/AccountFinish';
import ChooseInvestAccount from './pages/ChooseInvestAccount';
import StandardAccount from './pages/StandardAccount';
import FiveAPYSavings from './pages/FiveAPYSavings';
import CustodialAccount from './pages/CustodialAccount';
import IRA from './pages/IRA';
import AskToUseInvestAssist from './reuseComponents/AskToUseInvestAssist';
import LearningResources from './pages/LearningResources';
import Article1 from './pages/Article1';
import Article2 from './pages/Article2';
import Article3 from './pages/Article3';
import InvestmentAssistantWithUserId from './reuseComponents/InvestmentAssistantWithUserId'; // Import the component
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
import AboutUs from './pages/AboutUs';
import AccountFeaturesPage from './pages/AccountFeaturesPage';
import SignIn from './account/SignIn';
import SignUp from './account/SignUp';
import SignUpProceed from './account/SignUpProceed';
import SignUpTerms from './account/SignUpTerms';
import { AuthProvider } from './context/AuthContext';
import LogoutPage from './pages/LogoutPage'
import ConfirmLogout from './pages/ConfirmLogout'
import NewSignPage from './account/NewSignPage';


function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  const handleChatbotToggle = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <AuthProvider>
    <div className="relative">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />}/>
          <Route path="/:userId/dashboard" element={<Dashboard />} />
          <Route path="/myAccount" element={<MyAccount />} />
          <Route path="/:userId/signup/proceed/terms/choose-account-type" element={<ChooseInvestAccount />}/>
          <Route path="/:userId/standard-account" element={<StandardAccount />} /> 
          <Route path="/:userId/5%apy-savings" element={<FiveAPYSavings />}/>
          <Route path="/:userId/custodial-account" element={<CustodialAccount />}/>
          <Route path="/:userId/ira" element={<IRA />}/>
          <Route path="/:userId/ask-to-use-assistant" element={<AskToUseInvestAssist />}/>
          <Route path="/:userId/investment-assistant" element={<InvestmentAssistant />} />
          <Route path="/:userId/manual-investment" element={<ManualInvestment />}/>
          <Route path="/:userId/account-complete" element={<AccountFinish />}/>
          <Route path="/learning-resources" element={<LearningResources />}/>
          <Route path="/learning-resources-article1" element={<Article1 />} />
          <Route path="/learning-resources-article2" element={<Article2 />} />
          <Route path="/learning-resources-article3" element={<Article3 />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/get-help" element={<GetHelp />} />
          <Route path="/two-step-authentication" element={<TwoStepAuthentication />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/:userId/personalinformation" element={<PersonalInformation />} />
          <Route path="/linked-accounts" element={<LinkedAccounts />} />
          <Route path="/my-statements" element={<MyStatements />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/account-features" element={<AccountFeaturesPage/>} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/:userId/signup/proceed" element={<SignUpProceed />} />
          <Route path="/:userId/signup/proceed/terms" element={<SignUpTerms />} />
          <Route path="/:userId/logout" element={<LogoutPage />} />
          <Route path="/:userId/confirmlogout" element={<ConfirmLogout/>} />
          <Route path="/newsign" element={<NewSignPage />} />
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
    </AuthProvider>
  );
}

export default App;
