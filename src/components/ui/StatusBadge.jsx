const StatusBadge = ({ status, theme }) => {
  const getStatusStyles = (status) => {
    switch (status) {
      case 'Live':
        return {
          backgroundColor: '#dcfce7',
          color: '#166534',
          borderColor: '#bbf7d0'
        };
      case 'In Progress':
        return {
          backgroundColor: '#dbeafe',
          color: '#1d4ed8',
          borderColor: '#93c5fd'
        };
      case 'Completed - Finalist':
        return {
          backgroundColor: '#fef3c7',
          color: '#d97706',
          borderColor: '#fed7aa'
        };
      case 'Completed':
        return {
          backgroundColor: '#f3f4f6',
          color: '#374151',
          borderColor: '#d1d5db'
        };
      default:
        return {
          backgroundColor: theme?.primary + '15' || '#f1f5f9',
          color: theme?.primary || '#64748b',
          borderColor: theme?.primary + '30' || '#cbd5e1'
        };
    }
  };

  const statusStyles = getStatusStyles(status);

  return (
    <span 
      className="px-3 py-1 text-xs font-medium rounded-full border transition-all duration-200"
      style={statusStyles}
    >
      {status}
    </span>
  );
};

export default StatusBadge;