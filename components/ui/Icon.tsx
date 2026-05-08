import React from 'react';

interface IconProps {
  Icon: React.ComponentType<any>;
  size?: number;
  strokeWidth?: number;
  className?: string;
  [key: string]: any;
}

export const Icon = ({ 
  Icon, 
  size = 20, 
  strokeWidth = 1.5, 
  className = "text-gray-600",
  ...props 
}: IconProps) => {
  return (
    <Icon 
      strokeWidth={strokeWidth} 
      size={size} 
      className={className}
      {...props} 
    />
  );
};
