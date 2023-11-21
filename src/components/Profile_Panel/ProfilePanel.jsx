import React from 'react'
import style from './ProfilePanel.module.css'

export default function ProfilePanel(props) {
  return (
    <div className={style.container}>
      <div>{props.name}</div>
      <div>{props.email}</div>
      <div>{props.phone}</div>
    </div>
  )
}
