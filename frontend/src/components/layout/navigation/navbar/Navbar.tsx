// src/components/layout/navigation/Navbar.tsx
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faPlus, faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons';

const navigation = [
  { name: 'Inicio', href: ROUTES.HOME, current: true },
  { name: 'Parcelas', href: ROUTES.formulario1, current: false },
  { name: 'Análisis', href: ROUTES.formulario2, current: false },
  { name: 'Reportes', href: ROUTES.HOME, current: false },
  { name: 'Configuración', href: ROUTES.HOME, current: false },
];

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo y Nombre */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <FontAwesomeIcon icon={faLeaf} className="text-green-500 text-2xl mr-2" />
              <span className="text-xl font-bold text-gray-800">AgroVision</span>
            </div>
            {/* Enlaces de Navegación (Desktop) */}
            <div className="hidden md:ml-10 md:flex md:space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    item.current ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'
                  }`}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Botones de Acción (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="default" size='md' className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded-md text-[10px] font-medium transition duration-300">
              <FontAwesomeIcon icon={faPlus} className="mr-1 text-[10px]" />
              Nueva Parcela
            </Button>
            <div className="relative">
              <Button variant="ghost" className="flex items-center text-gray-500 hover:text-gray-700">
                <span className="mr-2">Usuario</span>
                <FontAwesomeIcon icon={faUserCircle} className="text-xl" />
              </Button>
            </div>
          </div>

          {/* Menú Móvil */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon icon={faBars} className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}