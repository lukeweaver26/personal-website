const Button = ({ 
  children, 
  onClick, 
  variant = "primary", 
  theme, 
  className = "",
  ...props 
}) => {
  const baseClasses = "px-8 py-3 font-semibold rounded-lg transition-all hover:scale-105 flex items-center space-x-2";
  
  const variantStyles = {
    primary: {
      style: { 
        backgroundColor: theme.primary, 
        color: 'black',
        boxShadow: `0 0 20px ${theme.primary}40`
      }
    },
    outline: {
      className: "border-2",
      style: { 
        borderColor: theme.primary,
        color: theme.primary
      }
    },
    secondary: {
      className: "border",
      style: { 
        borderColor: theme.primary + '40',
        backgroundColor: theme.primary + '10',
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