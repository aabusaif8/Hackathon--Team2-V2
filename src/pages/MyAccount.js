import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'



function MyAccount() {
  return (
    <div>
        <Navbar />
        <button className='text-dark-green text-2xl font-semibold mt-5 ml-10 underline'>Back</button>
      <div className='text-center font-semibold text-2xl mt-5'>
      <h2>Personal Settings</h2>
      <nav>
        <ul>
          <li>
            <Link to="/personalSettings/personalInformation">Personal Information</Link>
          </li>
          <li>
            <Link to="/personalSettings/linkedAccounts">Linked Accounts</Link>
          </li>
        </ul>
      </nav>
      </div>

      <div className='text-center font-semibold text-2xl mt-5'>
      <h2>Security and Privacy</h2>
      <nav>
        <ul>
          <li>
            <Link to="/securityandPrivacy/MyStatements">My Statements</Link>
          </li>
          <li>
            <Link to="/securityandPrivacy/ChangePassword">Change Password</Link>
          </li>
          <li>
            <Link to="/securityandPrivacy/TwoStepAuthentication">Two-Step Authentication</Link>
          </li>
        </ul>
      </nav>
      </div>

      <div className='text-center font-semibold text-2xl mt-5'>
      <h2>Support</h2>
      <nav>
        <ul>
          <li>
            <Link to="/personal-settings/personal-information">Legal</Link>
          </li>
          <li>
            <Link to="/personal-settings/linked-accounts">Get Help</Link>
          </li>
          <li>
            <Link to="/personal-settings/linked-accounts">Accessibility</Link>
          </li>
        </ul>
      </nav>
    </div> 
    </div>    

)
}

export default MyAccount