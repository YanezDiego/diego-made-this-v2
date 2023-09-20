import {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const onMenuClickHandler = () => {
        setIsOpen(!isOpen);
    }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if(isOpen && event.target.closest(".navbar-menu")){
        setIsOpen(false);
        }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    }

  },[isOpen]);

    return (
      <>
        <nav>
          <div className='max-w-auto mx-auto p-3 sm:px-8 lg:px-8 lg:py-4 shadow-sm '>
            <div className='flex justify-between h-16'>
              <div className='flex-shrink-0 flex items-center'>
                {/* Logo */}
                <NavLink to='/' exact>
                  <img
                    className='h-8 md:h-10 lg:h-14 w-auto'
                    src='./DY.png'
                    alt='It is an image of diego logo. it is the initials of his name.'
                  />
                </NavLink>
              </div>
              <div className='hamburger-menu flex items-center'>
                {/* Hamburger Menu */}
                <button
                  type='button'
                  className='text-black  hover:text-gray-500'
                  onClick={onMenuClickHandler}
                >
                  <title>menu button</title>
                  <svg
                    className='h-6 w-6 lg:h-8 lg:w-8 fill-none stroke-current'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
        {isOpen ? (
          <div
            className={`navbar-menu relative z-50 lg:right-0 lg:flex lg:justify-normal`}
          >
            <div className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-25'></div>
            <nav className='fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-l overflow-y-auto'>
              {/* <div className="navbar-menu relative z-50 lg:right-0 lg:flex lg:justify-end">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
            <nav className="fixed top-0 right-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-l overflow-y-auto"> */}
              <div className='flex items-center mb-8'>
                <button className='navbar-close' onClick={onMenuClickHandler}>
                  <svg
                    className='h-6 w-6 text-black cursor-pointer hover:text-gray-500'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M6 18L18 6M6 6l12 12'
                    ></path>
                  </svg>
                </button>
              </div>
              <div>
                <ul>
                  <li className='mb-1'>
                    <NavLink
                      to='/'
                      
                      className='block p-4 text-base font-semibold text-black hover:bg-blue-50 hover:text-blue-600 rounded'
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className='mb-1'>
                    <NavLink
                      to='/aboutme'
                      className='block p-4 text-base font-semibold text-black hover:bg-blue-50 hover:text-blue-600 rounded'
                    >
                      About Me
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        ) : null}
      </>
    );

}


export default NavBar