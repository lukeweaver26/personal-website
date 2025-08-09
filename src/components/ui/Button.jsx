const Button = ({ 
  children, 
  onClick, 
  variant = "primary", 
  theme, 
  className = "",
  ...props 
}) => {
  const baseClasses = "px-8 py-3 font-semibold rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg flex items-center space-x-2";
  
  const variantStyles = {
    primary: {
      style: { 
        backgroundColor: theme.primary, 
        color: 'white',
        boxShadow: `0 4px 14px ${theme.primary}30`
      }
    },
    outline: {
      className: "border-2",
      style: { 
        borderColor: theme.primary,
        color: theme.primary,
        backgroundColor: 'transparent'
      }
    },
    secondary: {
      className: "border",
      style: { 
        borderColor: theme.primary + '40',
        backgroundColor: theme.primary + '15',
        color: theme.primary
      }
    }
  };

  const variantConfig = variantStyles[variant];

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variantConfig.className || ''} ${className}`}
      style={variantConfig.style}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;