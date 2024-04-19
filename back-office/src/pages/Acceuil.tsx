import React from 'react'
import Chronometre from '../components/Chronometre'

const Acceuil = ({sidebarToggle, setSidebarToggle}) => {
  return (
    <div className='flex flex-col gap-4'>
      <Chronometre/>
    </div>
  )
}

export default Acceuil
