function openModal(category) {
  const modal = document.getElementById('category-modal');
  const vehicleList = modal.querySelector('.vehicle-list');

  // Clear existing content
  vehicleList.innerHTML = '';

  // Example data for vehicles
  const vehicles = {
    cruiser: [
      { name: 'TBD', price: '$0', seats: 1, img: 'assets/cruiser/' },
    ],
    commuter: [
      { name: 'Nagasaki BRT-600', price: '$11,000', seats: 2, img: 'assets/commuter/brt600.png' },
	  { name: 'Dinka CR-250', price: '$3300', seats: 2, img: 'assets/commuter/cr250.png' },
      { name: 'Pegassi Esskey', price: '$6600', seats: 1, img: 'assets/commuter/esskey.png' },	
	  { name: 'Pegassi Esskey R', price: '$16,500', seats: 1, img: 'assets/commuter/esskeyr.png' },
      { name: 'Pegassi Faggio Sport', price: '$1320', seats: 1, img: 'assets/commuter/faggiosport.png' },
	  { name: 'Pegassi Faggio', price: '$825', seats: 1, img: 'assets/commuter/faggio.png' },
      { name: 'Pegassi Faggio Mod', price: '$1100', seats: 1, img: 'assets/commuter/faggiomod.png' },
	  { name: 'Dinka Frakas', price: '$1210', seats: 1, img: 'assets/commuter/frakas.png' },
      { name: 'Principe Nemesis', price: '$10,725', seats: 1, img: 'assets/commuter/nemesis.png' },
	  { name: 'Shitzu PCJ 600', price: '$8800', seats: 2, img: 'assets/commuter/pcj600.png' },
      { name: 'Pegassi Ruffian', price: '$11,00', seats: 2, img: 'assets/commuter/ruffian.png' },
	  { name: 'Nagasaki Stryder', price: '$44,000', seats: 2, img: 'assets/commuter/stryder.png' },
      { name: 'Shitzu Vader', price: '$5500', seats: 2, img: 'assets/commuter/vader.png' },
	  { name: 'Dinka Ventoso', price: '$550', seats: 1, img: 'assets/commuter/ventoso.png' },
      { name: 'Maibatsu Wildcat', price: '$660', seats: 1, img: 'assets/commuter/wildcat.png' },
    ],
	bicycle: [
      { name: 'TBD', price: '$0', seats: 1, img: 'assets/bicycle/' },
    ],
	quad: [
      { name: 'TBD', price: '$0', seats: 1, img: 'assets/quad/' },
    ],
	sport: [
      { name: 'Dinka Akuma', price: '$36,300', seats: 1, img: 'assets/sport/akuma.png' },
      { name: 'Pegassi Bati 801', price: '$46,200', seats: 2, img: 'assets/sport/bati801.png' },
	  { name: 'Pegassi Bati 801RR', price: '$46,200', seats: 2, img: 'assets/sport/bati801rr.png' },
      { name: 'Pegassi Bati 701', price: '$44,000', seats: 2, img: 'assets/sport/bati701.png' },
	  { name: 'Pegassi Bati 901', price: '$60,500', seats: 2, img: 'assets/sport/bati901.png' },
      { name: 'Nagasaki Carbon RS', price: '$66,000', seats: 1, img: 'assets/sport/carbonrs.png' },
	  { name: 'Shitzu Defiler', price: '$51,700', seats: 1, img: 'assets/sport/defiler.png' },
      { name: 'Principe Diabolus Custom', price: '$77,000', seats: 1, img: 'assets/sport/diabolus.png' },
	  { name: 'Dinka Double-T', price: '$39,050', seats: 2, img: 'assets/sport/doublet.png' },
      { name: 'Pegassi FCR 1000', price: '$40,700', seats: 1, img: 'assets/sport/fcr1000.png' },	
	  { name: 'Pegassi FCR 1000 Custom', price: '$51,700', seats: 1, img: 'assets/sport/fcr1000custom.png' },
      { name: 'Shitzu Hakuchou', price: '$71,500', seats: 2, img: 'assets/sport/hakuchou.png' },
	  { name: 'Nagasaki Kunoichi', price: '$33,000', seats: 1, img: 'assets/sport/kunoichi.png' },
      { name: 'Nagasaki Kusa', price: '$60,500', seats: 2, img: 'assets/sport/kusa.png' },
	  { name: 'Principe Lectro', price: '$41,250', seats: 2, img: 'assets/sport/lectro.png' },
      { name: 'Western Powersurge', price: '$35,200', seats: 1, img: 'assets/sport/powersurge.png' },
	  { name: 'Western Reever', price: '$60,500', seats: 2, img: 'assets/sport/reever.png' },
      { name: 'Nagasaki Shinobi', price: '$57,750', seats: 1, img: 'assets/sport/shinobi.png' },
	  { name: 'Pegassi Vortex', price: '$63,250', seats: 1, img: 'assets/sport/vortex.png' },
      { name: 'Nagasaki V-RS', price: '$66,000', seats: 1, img: 'assets/sport/vrs.png' },
	  { name: 'Shitzu VTF-1000', price: '$39,600', seats: 2, img: 'assets/sport/vtf1000.png' },
      { name: 'Nagasaki XP1', price: '$60,500', seats: 1, img: 'assets/sport/xp1.png' },	
    ],
    // Add more categories and vehicles here
  };

  // Populate the modal with relevant vehicles
  if (vehicles[category]) {
    vehicles[category].forEach(vehicle => {
      const vehicleDiv = document.createElement('div');
      vehicleDiv.classList.add('vehicle');

      vehicleDiv.innerHTML = `
        <p>${vehicle.name}</p>
		<img src="${vehicle.img}" alt="${vehicle.name}"><br>
        <a>Price: ${vehicle.price} | </a>
        <a>Seats: ${vehicle.seats}</a>
      `;

      vehicleList.appendChild(vehicleDiv);
    });
  } else {
    vehicleList.innerHTML = '<p>No vehicles found in this category.</p>';
  }

  modal.style.display = 'flex'; // Show the modal
}

// Close modal function remains the same

// Close Modal
function closeModal() {
  const modal = document.getElementById('category-modal');
  modal.style.display = 'none';
}

// Close when clicking outside content
window.addEventListener('click', (event) => {
  const modal = document.getElementById('category-modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Attach functionality to category buttons
document.querySelector('.dropbtn').addEventListener('click', openModal);
// Get the close button and attach the closeModal function
document.querySelector('.close-btn').addEventListener('click', closeModal);