const TechBadge = ({ tech, theme, size = "default" }) => {
  const sizeClasses = {
    small: "px-2 py-1 text-xs",
    default: "px-3 py-1 text-sm",
    large: "px-4 py-2 text-base"
  };

  return (
    <span 
      className={`${sizeClasses[size]} rounded-full font-medium transition-all duration-200 hover:scale-105`}
      style={{ 
        backgroundColor: theme.primary + '15',
        color: theme.primary,
        border: `1px solid ${theme.primary}30`
      }}
    >
      {tech}
    </span>
  );
};

export default TechBadge;