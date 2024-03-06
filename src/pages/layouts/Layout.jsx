import { Outlet, useLocation } from "react-router-dom";
import React from 'react'
import Navbar from '../../components/Navbar';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import './styles.css'

export default function Layout() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <SwitchTransition>
        <CSSTransition timeout={250} classNames='fade' key={location.pathname}>
        <div className="max-w-6xl mx-auto p-10">
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>
            
    </div>
  )
}
