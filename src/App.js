import React, { useState } from 'react'
import './App.css';
import Form from './components/Form/Form';
import ProfilePanel from './components/Profile_Panel/ProfilePanel';

function App() {
  const [data, setData] = useState({})
  const [isSubmited, setIsSubmited] = useState(false)

  function handleSubmit(event, name, email, phone) {
    event.preventDefault()
    if (name.trim() && email.trim() && phone.trim()) {
      setData({
        name: name,
        email: email,
        phone: phone,
      })
      console.log(data);
      setIsSubmited(true)
    } else {
      alert('Введите корректные данные')
    }
  }

  return (
    <div className='conatiner'>
      <Form onSubmit={handleSubmit}/>
      {isSubmited && <ProfilePanel data={data}/>}
    </div>
  );
}

export default App;
