import React, { useEffect, useState } from 'react'
import { NavbarMenu } from '../assets/navbarMenu'
import { RiMenu2Line } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";


const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [hideNavbar, setHideNavbar] = useState(false);
    const [showMenu,setShowMenu] = useState(false);

    const handleMenuOpen = ()=>{
        setShowMenu(()=>!showMenu)
        console.log(showMenu)
    }



    useEffect(() => {
        const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 0 && scrollY <= 300) {
            setHideNavbar(true);     
            setIsSticky(false);   
        }
        else if (scrollY > 300) {
            setHideNavbar(false);    
            setIsSticky(true);     
        }
        else if (scrollY === 0) {
            setHideNavbar(false);
            setIsSticky(false);
        }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  return (
    <div className={`w-full bg-primary fixed top-0 left-0 right-0 z-50 transition-transform duration-500  ${isSticky ? 'fixed top-0 border-b-[1px] border-white/30 ' : 'relative'}  ${hideNavbar ? '-translate-y-full' : 'translate-y-0'}`}>
    <div className={`max-w-7xl mx-auto  py-3 sm:py-7 px-6  `} >
        <div className='flex justify-between items-center'>
            <div>
                <span className='text-2xl md:text-3xl font-semibold cursor-pointer text-white'>Logo</span>
            </div>
            <div>
                <ul className='hidden md:flex items-center gap-6 lg:gap-10 text-white/70'>
                {
                    NavbarMenu.map((menu,index)=>(
                    <li key={menu.id} className={`relative group cursor-pointer
                        ${NavbarMenu.length-1 === index && "bg-button hover:bg-button/90 transition-all hover:-translate-y-1 duration-300 px-4 py-1.5 rounded-md text-white capitalize" }
                    `}>
                        <a href={menu.href}>{menu.menuItem}</a>
                        <span className={` ${NavbarMenu.length-1 !== index ?  'absolute left-0 bottom-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full ' : ''}`}></span>
                    </li>  
                    ))
                }
                </ul>
            </div>
            {/* menu button  */}
            <div className='flex md:hidden text-white text-2xl font-semibold transition-all duration-500'
            onClick={handleMenuOpen}>
                { showMenu ? <RiCloseFill fontWeight={900} />
                : <RiMenu2Line fontWeight={900}/>
                }   
            </div>

        </div>
    </div>
    {
  <div
     className={`
    fixed mx-6 rounded-lg top-16 left-0 right-0 z-50 bg-secondary md:hidden transition-all duration-500 overflow-hidden
    ${showMenu ? 'max-h-[600px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}
  `}
    
  >
    <ul className="flex font-sm flex-col items-center gap-6 lg:gap-10 text-white px-6">
      {NavbarMenu.map((menu, index) => (
        <li
          key={menu.id}
          className={`
            relative group cursor-pointer transition-all duration-300 border-b-[0.5px] border-gray-500 pb-2 mb-4 w-full px-6
            ${index === 0 ? 'delay-100' : ''}
            ${index === 1 ? 'delay-200' : ''}
            ${index === 2 ? 'delay-300' : ''}
            ${index === 3 ? 'delay-400' : ''}
            ${index === 4 ? 'delay-500' : ''}
            ${index === 5 ? 'delay-600' : ''}
          `}
        >
          <a href={menu.href} className="text-sm font-medium  block"
          onClick={()=>setShowMenu(!showMenu)}>
            {menu.menuItem}
          </a>
        </li>
      ))}
    </ul>
  </div>
}
    </div>
  )
}

export default Navbar
