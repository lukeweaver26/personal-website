const StatusBadge = ({ status }) => {
  const getStatusStyles = (status) => {
    switch (status) {
      case 'Live':
        return 'bg-green-900 text-green-300';
      case 'In Progress':
        return 'bg-blue-900 text-blue-300';
      case 'Completed - Finalist':
        return 'bg-yellow-900 text-yellow-300';
      default:
        return 'bg-gray-800 text-gray-300';
    }
  };

  return (
    <span className={`px-2 py-1 text-xs rounded-full ${getStatusStyles(status)}`}>
      {status}
    </span>
  );
};

export default StatusBadge;