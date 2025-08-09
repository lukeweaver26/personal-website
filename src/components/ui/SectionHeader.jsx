const SectionHeader = ({ title, subtitle, theme, className = "" }) => (
  <div className={`text-center mb-16 ${className}`}>
    <h1 className="text-4xl font-bold mb-4 tracking-tight" style={{ color: theme.primary }}>
      {title}
    </h1>
    {subtitle && (
      <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: theme.text || '#64748b' }}>
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeader;