import React, { useContext ,useState} from 'react'
import MyContext from './MyContext'
import '../styles.css'

export default function Signup() {
    const{showSignup,handleRegister,handleSignInClick,warning,handleSignUpClick,handleSignIn,warning1} =useContext(MyContext)
    
    const backgroundImageStyle = {
height:'77vh',
paddingTop: '180px',

      background: 'linear-gradient(to right, black, lightblue)'}
    const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };



  
  return (

<div style={backgroundImageStyle} >
   


<div className="entire" id="entire" >

           {showSignup ?(
         
     <div className="signup" id="signup">
     <h1 style={{ paddingLeft: '120px' }}>WELCOME</h1>
     <div><span>Name</span><input name="name" id="name" style={{ marginLeft: '24px' }} required /></div>
     <div><span>Email</span><input name="email" id="supemail" style={{ marginLeft: '28px' }} required /></div>
     <div><span>Password</span><input name="password" id="suppassword" required /></div>
     <div><button type="button" id="regbutton" style={{ borderRadius: '15px' }} onClick={handleRegister}>Register</button></div>
     <div>Already a user ? <button type="button" id="sinbutton" style={{ borderRadius: '15px' }} onClick={handleSignInClick}>Sign In</button></div>
     <p id="warning" style={{ paddingLeft: '70px', marginTop: '20px', color: 'rgb(235, 40, 40)' }}>{warning}</p>
   </div>) :

            (  <div className="signin" id="signin">
            <h1 style={{ paddingLeft: '150px' }}>WELCOME</h1>
            <div><span>Email</span><input name="email" id="sinemail" style={{ marginLeft: '28px' }} required /></div>
            {/* <div><span>Password</span><input name="password" id="sinpassword" required /></div> */}
            <div className="password-container">
              <span>Password</span>
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        id='sinpassword'
        className="password-input"
      />
      <span className="toggle-password" onClick={handleTogglePassword}>
        👁️
      </span>
    </div>
            <div>First time ? <button type="button" id="supbutton" style={{ borderRadius: '15px' }} onClick={handleSignUpClick}>Sign Up</button></div>
            <div><button type="button" id="linbutton" style={{ borderRadius: '15px' }} onClick={handleSignIn}>Login</button></div>
            <p id="warning1" style={{ paddingLeft: '70px', marginTop: '20px', color: 'rgb(252, 98, 98)' }}>{warning1}</p>
          </div>)}
         
        </div> 






        

    </div>
  )
}