 import React from 'react'
 import './App.css'
 import { BrowserRouter,Routes,Route } from 'react-router-dom'
import WelcomePage from './components/WelcomePage'
import RewardPoint from './components/RewardPoint'
import SignupVerify from './components/SignupVerify'
 import Login from './components/Login'
import Signup from './components/Signup'
import MemberForm from './components/MemberForm'
import UserProfile from './components/UserProfile'
 const App = () => {
   return (
     <>
 
     <div className='app'>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<WelcomePage/>}/>
      <Route path='/rewardpoint' element={<RewardPoint/>}/>
      <Route path='/signupverify' element={<SignupVerify/>}/>
      <Route path='/login'  element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/memberform' element={<MemberForm/>}/>
      <Route path='/userprofile' element={<UserProfile/>}/>

      </Routes>
      </BrowserRouter>
     </div>
     </>
   )
 }
 
 export default App