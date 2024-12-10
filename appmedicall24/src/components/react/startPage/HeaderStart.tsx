import { useState } from 'react'
import ico from '../../../assets/icoLogo.svg'
import menu from '../../../assets/menu.svg'

function HeaderStart() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav className="bg-white text-white shadow-[0px_4px_6px_rgba(0,0,0,0.1)] border-t-2  border-pink-600">
      <div className="container mx-auto flex items-center justify-evenly md:justify-between py-4 px-6">
        {/* Logo */}
        <img src={ico.src} alt="Logo" className="hidden md:block select-none h-8 w-auto transform transition duration-200 hover:scale-105 flex" />
        {/* Menu Hamburguesa (Mobile) */}
                <button
        className="w-10 h-10 flex justify-center items-center relative hidden md:block"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
        >
        {/* Contenedor de íconos */}
        <div className="relative w-12 h-6">
            {/* Ícono de menú */}
            <span
            className={`absolute mt-2 ml-1 transition-all duration-500 ${
                menuOpen ? "opacity-0 scale-0 z-0" : "opacity-100 scale-100 z-10"
            }`}
            >
            <img src={menu.src} alt="Menu" className="w-auto h-auto" />
            </span>
            {/* Ícono de cerrar */}
            <span
            className={`absolute text-3xl font-bold text-gray-800 transition-all duration-500 ${
                menuOpen ? "opacity-100 scale-100 z-10" : "opacity-0 scale-0 z-0"
            }`}
            >
            ✕
            </span>
        </div>
        </button>

        {/* Opciones del menú (Desktop) */}
        <ul className="md:hidden flex items-center gap-14 text-md font-medium text-gray-600">
          {/* <li><img src={ico.src} alt="Logo" className=" select-none h-8 w-auto transform transition duration-200 hover:scale-105 flex" /></li> */}
          <li><a href="https://medicall24.com.co/pacientes/" className="transform transition duration-200 hover:scale-105 flex hover:text-pink-600 hover:font-semibold" target='_blank'>Personas</a></li>
          <li><a href="https://medicall24.com.co/profesionalesindependientes/" className="transform transition duration-200 hover:scale-105 flex hover:text-pink-600 hover:font-semibold" target='_blank'>Profesionales Independientes</a></li>
          <li><a href="https://medicall24.com.co/instituciones-ips/" className="transform transition duration-200 hover:scale-105 flex hover:text-pink-600 hover:font-semibold" target='_blank'>Instituciones IPS</a></li>
          <li><a href="https://medicall24.com.co/entidades/" className="transform transition duration-200 hover:scale-105 flex hover:text-pink-600 hover:font-semibold" target='_blank'>Entidades de Salud</a></li>
          <li><a href="https://appmedicall24.com/planes/" className="transform transition duration-200 hover:scale-105 flex hover:text-pink-600 hover:font-semibold" target='_blank'>Planes Empresariales</a></li>
        </ul>
      </div>

      {/* Menú desplegable (Mobile) */}
 
        <div  className={`absolute top-0 mt-16 left-0 w-full bg-white text-black z-50 overflow-hidden transition-all duration-1000 ease-in-out hidden md:block ${
            menuOpen ? "h-full" : "h-0"
          }`}>
          <ul className={`space-y-8 text-2xl font-semibold text-gray-600 ml-10 mt-14 transition-opacity duration-1000 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}>
            <li><a href="https://medicall24.com.co/pacientes/" className="transform transition duration-200 hover:scale-105 flex hover:text-pink-600 hover:font-semibold" onClick={() => setMenuOpen(false)}>Personas</a></li>
            <li><a href="https://medicall24.com.co/profesionalesindependientes/" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>Profesionales Independientes</a></li>
            <li><a href="https://medicall24.com.co/instituciones-ips/" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>Instituciones Ips</a></li>
            <li><a href="https://medicall24.com.co/entidades/" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>Entidades de Salud</a></li>
            <li><a href="https://appmedicall24.com/planes/" className="hover:text-gray-400" onClick={() => setMenuOpen(false)}>Planes Empresariales</a></li>
          </ul>
        </div>

    </nav>
  )
}

export default HeaderStart