import React from 'react'
import style from './ProfilePanel.module.css'

export default function ProfilePanel(props) {
  console.log(`my data: ${props.data}`);
  return (
    <div className={style.container}>
      <div>{props.data.name}</div>
      <div>{props.data.email}</div>
      <div>{props.data.phone}</div>
    </div>
  )
}
