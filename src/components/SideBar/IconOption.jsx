import React from 'react'
import { SidebarIcon } from './styled'

export const IconOption = ({text, Icon, active}) => {
  return (
    <SidebarIcon active={active}>
        <Icon />
        <h2>{text}</h2>
    </SidebarIcon>
  )
}
  