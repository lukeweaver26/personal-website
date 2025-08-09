const SectionHeader = ({ title, subtitle, theme, className = "" }) => (
  <div className={`text-center mb-16 ${className}`}>
    <h1 className="text-4xl font-mono font-bold mb-4" style={{ color: theme.primary }}>
      {title}
    </h1>
    {subtitle && <p className="text-gray-400">{subtitle}</p>}
  </div>
);

export default SectionHeader;