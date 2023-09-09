const formatDate = () => {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ];
      
      const today = new Date();
      const monthIndex = today.getMonth();
      const monthName = months[monthIndex];
      
      const day = String(today.getDate()).padStart(2, '0');
      const year = String(today.getFullYear());
      
     return `${monthName} ${day}, ${year}`;
}

module.exports = { formatDate }