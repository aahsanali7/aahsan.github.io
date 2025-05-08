// Runs when the page loads
window.addEventListener('load', () => {
    console.log('Welcome to Aahsan\'s portfolio site!');
  });
  
  // Handle contact button click
  const contactButton = document.querySelector('.button');
  
  if (contactButton) {
    contactButton.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Opening your email client... press ok');
      window.location.href = contactButton.href;
    });
  }
  function loadPDF() {
    const container = document.getElementById('pdf-container');
    container.innerHTML = `
      <iframe src="resume.pdf" width="100%" height="600px"></iframe>
    `;
  }
  
  