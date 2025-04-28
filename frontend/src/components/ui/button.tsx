import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'outline' | 'link';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  fullWidth?: boolean;
  children: ReactNode;
}

export function Button({
  variant = 'default',
  size = 'sm',
  color = 'primary',
  fullWidth = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  const sizeStyles = {
    xs: 'px-2 py-0.5 text-[10px]',
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };

  const colorStyles = {
    primary: {
      default: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
      outline: 'border border-green-600 text-green-600 hover:bg-green-50',
      ghost: 'text-green-600 hover:bg-green-50',
      link: 'text-green-600 hover:underline'
    },
    secondary: {
      default: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
      outline: 'border border-gray-600 text-gray-600 hover:bg-gray-50',
      ghost: 'text-gray-600 hover:bg-gray-50',
      link: 'text-gray-600 hover:underline'
    },
    success: {
      default: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
      outline: 'border border-green-600 text-green-600 hover:bg-green-50',
      ghost: 'text-green-600 hover:bg-green-50',
      link: 'text-green-600 hover:underline'
    },
    danger: {
      default: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
      outline: 'border border-red-600 text-red-600 hover:bg-red-50',
      ghost: 'text-red-600 hover:bg-red-50',
      link: 'text-red-600 hover:underline'
    },
    warning: {
      default: 'bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500',
      outline: 'border border-yellow-600 text-yellow-600 hover:bg-yellow-50',
      ghost: 'text-yellow-600 hover:bg-yellow-50',
      link: 'text-yellow-600 hover:underline'
    }
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${colorStyles[color][variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}