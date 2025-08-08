import React from 'react';

const ScrollingMarquee = ({ 
  title = "Organizations I've worked with", 
  organizations = [],
  className = "",
  speed = "animate-scroll"
}) => {
  return (
    <div className={`mt-16 mb-8 ${className}`}>
      <p className="text-center text-gray-400 mb-6">{title}</p>
      <div className="relative overflow-hidden">
        <div className={`flex ${speed} whitespace-nowrap`}>
          {/* First set of logos */}
          <div className="flex items-center mx-6" style={{ gap: '48px' }}>
            {organizations.map((org, index) => (
              <OrganizationCard key={`first-${index}`} organization={org} />
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center mx-6" style={{ gap: '48px' }}>
            {organizations.map((org, index) => (
              <OrganizationCard key={`second-${index}`} organization={org} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const OrganizationCard = ({ organization }) => {
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
      <span className="text-gray-400 text-sm text-center">
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

// Example usage with the original data
const FullMarquee = () => {
  const organizations = [
    {
      name: 'CesiumAstro',
      displayName: 'CESIUM',
      bgColor: 'bg-blue-600',
    },
    {
      name: 'Blue Origin',
      displayName: 'BO',
      bgColor: 'bg-indigo-700',
      logo: (
        <>
          <div className="text-white font-bold text-lg">BO</div>
          <div className="absolute bottom-1 w-8 h-1 bg-white rounded-full"></div>
        </>
      )
    },
    {
      name: 'Galileo CDS',
      displayName: 'GALILEO',
      bgColor: 'bg-purple-600',
    },
    {
      name: 'University of Michigan',
      displayName: 'M',
      bgColor: 'bg-yellow-500',
      textColor: 'text-blue-900',
    },
    {
      name: 'NASA BIG Idea',
      bgColor: 'bg-red-600',
      logo: (
        <div className="w-12 h-12 bg-red-600 rounded-full border-4 border-white relative">
          <div className="absolute top-1 left-3 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-3 left-1 w-1 h-3 bg-white rounded-full"></div>
          <div className="absolute top-3 right-1 w-1 h-3 bg-white rounded-full"></div>
          <div className="absolute bottom-1 left-2 w-4 h-1 bg-white rounded-full"></div>
        </div>
      )
    },
    {
      name: 'MASA Rocketry',
      displayName: 'MASA',
      bgColor: 'bg-red-700',
    },
    {
      name: 'Theta Tau',
      displayName: 'ΘΤ',
      bgColor: 'bg-green-600',
      subtitle: 'Theta Tau<br/>Professional Engineering<br/>Fraternity'
    }
  ];

  return (
    <div className="bg-black min-h-screen p-8">
      <ScrollingMarquee 
        title="Organizations I've worked with"
        organizations={organizations}
      />
    </div>
  );
};

export default FullMarquee;