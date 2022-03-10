import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { BsCardChecklist } from 'react-icons/bs'
import { useState } from 'react'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');
  return (
    <div className='floating-nav'>
      <a href="#" className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')}><AiOutlineHome /></a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')}><AiOutlineUser /></a>
      <a href="#experience" className={activeNav === '#experience' ? 'active' : ''} onClick={() => setActiveNav('#experience')}><BsCardChecklist /></a>
      <a href="#portfolio" className={activeNav === '#portfolio' ? 'active' : ''} onClick={() => setActiveNav('#portfolio')}><BiBook /></a>
      <a href="#contact" className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')}><BiMessageSquareDetail /></a>
    </div>
  )
}

export default Nav