import React, { useState } from 'react';
import { Menu, Bell, Settings, Sun, Moon, Leaf } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { RegisterForm } from './auth/RegisterForm';

interface LayoutProps {
  children: React.ReactNode;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export function Layout({ children, isMenuOpen, setIsMenuOpen }: LayoutProps) {
  const { theme, toggleTheme } = useTheme();
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Menu className="h-6 w-6" />
              </button>
              <div className="flex items-center ml-4">
                <Leaf className="h-8 w-8 text-green-600" />
                <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">GreenMax</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                <Bell className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <nav
        className={`fixed top-16 left-0 w-64 h-full bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-200 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <div className="space-y-2">
            <button
              onClick={() => setShowRegister(true)}
              className="w-full text-left px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
            >
              Register
            </button>
            <NavLink href="/profile">Profile</NavLink>
            <NavLink href="/account">Account Settings</NavLink>
            <NavLink href="/notifications">Notifications</NavLink>
            <NavLink href="/logout">Logout</NavLink>
          </div>
        </div>
      </nav>

      {showRegister && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full mx-4">
            <RegisterForm onClose={() => setShowRegister(false)} />
          </div>
        </div>
      )}

      <main className="max-w-7xl mx-auto">{children}</main>
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
    >
      {children}
    </a>
  );
}