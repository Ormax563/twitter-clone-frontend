import React from 'react'
import { Home, SideBar, Widgets } from '../../components'

export const TwitterPage = (props) => {
  return (
    <div className='TwitterPage'>
        <SideBar token={props.token} setToken={props.setToken}/>
        <Home token={props.token} setToken={props.setToken}/>
        <Widgets />
    </div>
  )
}
