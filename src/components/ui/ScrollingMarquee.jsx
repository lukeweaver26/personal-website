import React from 'react';

const ScrollingMarquee = ({ 
  title = "Organizations I've worked with", 
  organizations = [],
  className = "",
  speed = "animate-scroll",
  theme
}) => {
  return (
    <div className={`mt-16 mb-8 ${className}`}>
      <p className="text-center mb-6" style={{ color: theme?.text || '#64748b' }}>{title}</p>
      <div className="relative overflow-hidden">
        <div className={`flex ${speed} whitespace-nowrap`}>
          {/* First set of logos */}
          <div className="flex items-center mx-6" style={{ gap: '48px' }}>
            {organizations.map((org, index) => (
              <OrganizationCard key={`first-${index}`} organization={org} theme={theme} />
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center mx-6" style={{ gap: '48px' }}>
            {organizations.map((org, index) => (
              <OrganizationCard key={`second-${index}`} organization={org} theme={theme} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const OrganizationCard = ({ organization, theme }) => {
  const { name, displayName, bgColor, textColor = 'text-white', logo, subtitle } = organization;

  return (
    <div className="flex flex-col items-center space-y-2 min-w-[100px]">
      <div className={`w-16 h-16 ${bgColor} rounded-lg flex items-center justify-center relative`}>
        {logo ? (
          <div className="relative">
            {logo}
          </div>
        ) : (
          <span className={`${textColor} font-bold ${name.length > 6 ? 'text-sm' : 'text-lg'}`}>
            {displayName || name}
          </span>
        )}
      </div>
      <span className="text-sm text-center" style={{ color: theme?.text || '#64748b' }}>
        {subtitle && subtitle.split('<br/>').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < subtitle.split('<br/>').length - 1 && <br />}
          </React.Fragment>
        )) || name}
      </span>
    </div>
  );
};


export default ScrollingMarquee;