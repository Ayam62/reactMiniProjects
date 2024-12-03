import React from 'react'
import { NavLink, } from 'react-router'

function Header() {
  return (
    <ul className="flex justify-center m-4 bg-gray-200">
        <li className="p-4 ">
          <NavLink className={({isActive})=>{
            return isActive? "bg-orange-500":"bg-slate-100"
          }} to="/">Home </NavLink>
        </li>
        <li className="p-4">
          <NavLink 
          className={({isActive})=>{
            return isActive? "bg-orange-500":"bg-slate-100"
          }} 
          to="/about">About</NavLink>
        </li>
        <li className="p-4">
          <NavLink 
          className={({isActive})=>{
            return isActive? "bg-orange-500":"bg-slate-100"
          }} 
          to="/contact">Contacts</NavLink>
        </li>
      </ul>
  )
}

export default Header