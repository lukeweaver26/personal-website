const TechBadge = ({ tech, theme, size = "default" }) => {
  const sizeClasses = {
    small: "px-2 py-1 text-xs",
    default: "px-3 py-1 text-sm",
    large: "px-4 py-2 text-base"
  };

  return (
    <span 
      className={`${sizeClasses[size]} rounded-full border`}
      style={{ 
        borderColor: theme.primary + '40',
        backgroundColor: theme.primary + '10',
        color: theme.primary
      }}
    >
      {tech}
    </span>
  );
};

export default TechBadge;