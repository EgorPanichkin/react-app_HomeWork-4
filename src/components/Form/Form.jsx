import React, { useState } from 'react'
import style from './Form.module.css'

export default function Form(props) {
  const [name, setName] =useState('')
  const [email, setEmail] =useState('')
  const [phone, setPhone] =useState('')

  return (
    <form className={style.form} onSubmit={e => props.onSubmit(e, name, email, phone)}>
      <input className={style.input} name='name' value={name} type="text" placeholder='Name' onChange={e => setName(e.target.value)}/>
      <input className={style.input} name='email' value={email} type="text" placeholder='E-mail' onChange={e => setEmail(e.target.value)}/>
      <input className={style.input} name='number' value={phone} type="text" placeholder='Phone-number' onChange={e => setPhone(e.target.value)}/>
      <button className={style.buttonSubmit} type="submit">Register</button>
    </form>
  )
}
