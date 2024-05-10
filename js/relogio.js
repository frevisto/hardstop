function relogio() {
    const dateTimeElement = document.getElementById('relogio');
    const now = new Date();
    const dateOptions = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };

    const formattedDate = now.toLocaleDateString('pt-BR', dateOptions);
    const formattedTime = now.toLocaleTimeString('pt-BR', timeOptions);
  
    dateTimeElement.innerHTML = `🕔      ${formattedTime}<br>${formattedDate}`;
  }
  
  // Call the function to display date and time initially
  relogio();
  
  // Call the function every second to update the date and time
  const relogiorodando = setInterval(relogio, 1000 );