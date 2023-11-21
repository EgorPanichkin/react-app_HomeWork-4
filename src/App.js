import React, { useState } from 'react'
import './App.css';
import ProfilePanel from './components/Profile_Panel/ProfilePanel';

function App() {
  const [isSubmited, setIsSubmited] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (name.trim() && email.trim() && phone.trim()) {
      setIsSubmited(true)
    } else {
      alert('Введите корректные данные')
    }
  }

  return (
    <div className='conatiner'>
      <form >
        <input value={name} type='text' onChange={e => setName(e.target.value)} placeholder='Enter your name'/>
        <input value={email} type='text' onChange={e => setEmail(e.target.value)} placeholder='Enter your e-mail'/>
        <input value={phone} type='text' onChange={e => setPhone(e.target.value)} placeholder='Enter your phone-number'/>
        <button className='buttonSubmit' onClick={e => handleSubmit(e)}>Register</button>
      </form>
      {isSubmited && <ProfilePanel name={name} email={email} phone={phone}/>}
    </div>
  );
}

export default App;
