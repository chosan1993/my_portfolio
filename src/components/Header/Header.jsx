import React, {useRef, useState, useEffect} from 'react';

const Header = () => {
  
    const menuRef = useRef(null)
    const [activeMenu, setActiveMenu] = useState('home')
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        
        checkMobile()
        window.addEventListener('resize', checkMobile)
        
        return () => {
            window.removeEventListener('resize', checkMobile)
        }
    }, [])

    const menuItems = [
        { 
            id: 'home', 
            label: 'Home',
            icon: 'ri-home-9-line',
            activeIcon: 'ri-home-9-line'
        },
        { 
            id: 'about', 
            label: 'About',
            icon: 'ri-user-line',
            activeIcon: 'ri-user-fill'
        },
        { 
            id: 'skills', 
            label: 'Skills',
            icon: 'ri-tools-line',
            activeIcon: 'ri-tools-fill'
        },
        { 
            id: 'education', 
            label: 'Education',
            icon: 'ri-graduation-cap-line',
            activeIcon: 'ri-graduation-cap-fill'
        },
        { 
            id: 'experience', 
            label: 'Experience',
            icon: 'ri-briefcase-line',
            activeIcon: 'ri-briefcase-fill'
        },
        { 
            id: 'portfolio', 
            label: 'Portfolio',
            icon: 'ri-folder-line',
            activeIcon: 'ri-folder-fill'
        },
        { 
            id: 'contact', 
            label: 'Contact',
            icon: 'ri-mail-line',
            activeIcon: 'ri-mail-fill'
        },
    ]

    const handleClick = (menuId, e) => {
        e.preventDefault()
        setActiveMenu(menuId)

        const element = document.getElementById(menuId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

  return (
    <nav 
        ref={menuRef}
        className="fixed bottom-4 sm:bottom-6 md:bottom-11 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-sm sm:w-[90%]"
    >
        <div className="bg-white/90 backdrop-blur-md rounded-full shadow-xl border border-gray-200">
            <div className="flex items-center justify-around px-2 py-1 sm:px-3 md:px-2">
                {menuItems.map((item) => {
                    const isActive = activeMenu === item.id
                    return (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={(e) => handleClick(item.id, e)}
                            className={`flex flex-col items-center justify-center p-1 sm:p-1.5 md:p-1.5 transition-all duration-300 relative group`}
                            title={item.label}
                        >
                            {/* ====================== Icon with circular background ====================*/}
                            <div className={`flex items-center justify-center rounded-full transition-all duration-300 ${
                                isActive 
                                    ? 'w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 bg-primaryColor text-white shadow-lg' 
                                    : 'w-8 h-8 sm:w-10 sm:h-10 md:w-10 md:h-10 hover:bg-gray-100 text-smallTextColor'
                            }`}>
                                <i className={`text-sm sm:text-base md:text-xl ${isActive ? item.activeIcon : item.icon}`}></i>
                            </div>

                            {/* ================== Tooltip for all screen sizes =============================*/}
                            <div className="absolute -top-8 sm:-top-10 bg-[#434C6B] text-white text-xs font-medium px-2 py-1 sm:py-2
                            rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity 
                            duration-300 pointer-events-none">
                                {item.label}
                                <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#434C6B] rotate-45"></div>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    </nav>
  );
}

export default Header;