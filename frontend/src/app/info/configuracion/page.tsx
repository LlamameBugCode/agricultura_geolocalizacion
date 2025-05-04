
// app/info/configuracion/page.tsx
'use client';

import { useState } from 'react';
import { ROUTES } from '@/constants/routes';
import Link from 'next/link';

export default function Configuracion() {
  const [activeTab, setActiveTab] = useState('perfil');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Configuración del Sistema
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
            Personaliza tu experiencia y ajusta las preferencias técnicas de la plataforma
          </p>
        </div>
      </div>

      {/* Settings Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-64 bg-white rounded-lg shadow-md p-4">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveTab('perfil')}
                className={`w-full text-left px-4 py-2 rounded-md ${
                  activeTab === 'perfil'
                    ? 'bg-green-600 text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                Perfil
              </button>
              <button
                onClick={() => setActiveTab('notificaciones')}
                className={`w-full text-left px-4 py-2 rounded-md ${
                  activeTab === 'notificaciones'
                    ? 'bg-green-600 text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                Notificaciones
              </button>
              <button
                onClick={() => setActiveTab('integraciones')}
                className={`w-full text-left px-4 py-2 rounded-md ${
                  activeTab === 'integraciones'
                    ? 'bg-green-600 text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                Integraciones
              </button>
              <button
                onClick={() => setActiveTab('avanzado')}
                className={`w-full text-left px-4 py-2 rounded-md ${
                  activeTab === 'avanzado'
                    ? 'bg-green-600 text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                Configuración Avanzada
              </button>
            </nav>
          </div>

          {/* Settings Content */}
          <div className="flex-1 bg-white rounded-lg shadow-md p-6">
            {activeTab === 'perfil' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-800">Configuración de Perfil</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      defaultValue="Juan Pérez"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      defaultValue="juan.perez@example.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                      Modo Oscuro
                    </span>
                    <button
                      onClick={() => setIsDarkMode(!isDarkMode)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                        isDarkMode ? 'bg-green-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          isDarkMode ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <div className="pt-4">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                    Guardar Cambios
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'notificaciones' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-800">Preferencias de Notificación</h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800">Correo Electrónico</h3>
                      <p className="text-sm text-gray-500">Recibe alertas por correo</p>
                    </div>
                    <button
                      onClick={() => setNotifications({...notifications, email: !notifications.email})}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                        notifications.email ? 'bg-green-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          notifications.email ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800">Mensajes SMS</h3>
                      <p className="text-sm text-gray-500">Recibe alertas por mensaje de texto</p>
                    </div>
                    <button
                      onClick={() => setNotifications({...notifications, sms: !notifications.sms})}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                        notifications.sms ? 'bg-green-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          notifications.sms ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800">Notificaciones Push</h3>
                      <p className="text-sm text-gray-500">Alertas en tiempo real en tu dispositivo</p>
                    </div>
                    <button
                      onClick={() => setNotifications({...notifications, push: !notifications.push})}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                        notifications.push ? 'bg-green-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          notifications.push ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <div className="pt-4">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                    Actualizar Preferencias
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'integraciones' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-800">Integraciones Externas</h2>

                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-medium text-gray-800">API Satelital</h3>
                  <p className="text-sm text-gray-500 mb-2">Conecta con servicios de imágenes satelitales</p>
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      placeholder="Ingresa tu API Key"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                    <button className="px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                      Conectar
                    </button>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-medium text-gray-800">Sensores IoT</h3>
                  <p className="text-sm text-gray-500 mb-2">Integra sensores de humedad y temperatura</p>
                  <button className="px-3 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
                    Configurar Sensores
                  </button>
                </div>

                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-medium text-gray-800">Sistemas de Riego</h3>
                  <p className="text-sm text-gray-500 mb-2">Conecta con sistemas de automatización</p>
                  <button className="px-3 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
                    Asociar Sistema
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'avanzado' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-800">Configuración Avanzada</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Unidad de Medida
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500">
                      <option>Métrico (m², kg)</option>
                      <option>Imperial (acres, lbs)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Zona Horaria
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500">
                      <option>UTC-5:00 - América/Bogotá</option>
                      <option>UTC-6:00 - América/Mexico_City</option>
                      <option>UTC-3:00 - América/Buenos_Aires</option>
                    </select>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Formato de Fecha</h3>
                  <div className="flex space-x-2">
                    <label className="flex items-center">
                      <input type="radio" name="dateFormat" className="form-radio h-4 w-4 text-green-600" />
                      <span className="ml-2 text-sm">DD/MM/YYYY</span>
                    </label>
                    <label className="flex items-center ml-4">
                      <input type="radio" name="dateFormat" className="form-radio h-4 w-4 text-green-600" defaultChecked />
                      <span className="ml-2 text-sm">MM/DD/YYYY</span>
                    </label>
                  </div>
                </div>

                <div className="pt-4">
                  <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">
                    Restablecer Configuración
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-green-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white">
            ¿Necesitas ayuda con la configuración?
          </h2>
          <p className="mt-3 text-lg text-green-100 max-w-2xl mx-auto">
            Consulta nuestra documentación o contacta con soporte técnico para asistencia
          </p>
          <div className="mt-6">
            <Link
              href={ROUTES.HOME}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50"
            >
              Contactar Soporte
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}