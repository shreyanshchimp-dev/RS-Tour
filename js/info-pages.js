(() => {
  const form = document.getElementById('travel-enquiry-form');
  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const message = [
      'Hello RS Tours & Travels, I would like to make a travel enquiry.',
      '',
      `Name: ${data.get('name')}`,
      `Mobile: ${data.get('phone')}`,
      `Email: ${data.get('email') || 'Not provided'}`,
      `Interested in: ${data.get('interest')}`,
      `Details: ${data.get('message') || 'Not provided'}`
    ].join('\n');
    const url = `https://wa.me/917600780397?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });
})();