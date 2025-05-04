'use client';

// src/components/layout/navigation/Navbar.tsx
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const navigation = [
  { name: 'Inicio', href: ROUTES.HOME, current: true },
  { name: 'Parcelas', href: ROUTES.PARCELAS, current: false },
  { name: 'Análisis', href: ROUTES.ANALISIS, current: false },
  { name: 'Reportes', href: ROUTES.REPORTES, current: false },
  { name: 'Configuración', href: ROUTES.CONFIGURACION, current: false },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <Link href={ROUTES.LOGIN}>
              <Button variant="ghost" size="sm" color="primary">
                Iniciar Sesión
              </Button>
            </Link>
            <Link href={ROUTES.REGISTER}>
              <Button variant="default" size="sm" color="primary">
                Registrarse
              </Button>
            </Link>
          </div>

          {/* Menú Móvil */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil (Contenido) */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  item.current ? 'bg-green-50 text-green-600' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                }`}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2 space-y-1">
              <Link href={ROUTES.LOGIN} className="block">
                <Button variant="ghost" size="sm" color="primary" className="w-full justify-start">
                  Iniciar Sesión
                </Button>
              </Link>
              <Link href={ROUTES.REGISTER} className="block">
                <Button variant="default" size="sm" color="primary" className="w-full justify-start">
                  Registrarse
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}