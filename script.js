function openModal(category) {
  const modal = document.getElementById('category-modal');
  const vehicleList = modal.querySelector('.vehicle-list');

  // Clear existing content
  vehicleList.innerHTML = '';

  // Example data for vehicles
  const vehicles = {
    cruiser: [
      { name: 'Cruiser X', price: '$15,000', seats: 2, img: 'assets/cruiser1.png' },
      { name: 'Thunderbird', price: '$18,500', seats: 2, img: 'assets/cruiser2.png' },
    ],
    commuter: [
      { name: 'Commuter A', price: '$2,000', seats: 1, img: 'assets/commuter1.png' },
    ],
	cruiser: [
      { name: 'Cruiser X', price: '$15,000', seats: 2, img: 'assets/cruiser1.png' },
      { name: 'Thunderbird', price: '$18,500', seats: 2, img: 'assets/cruiser2.png' },
    ],
	cruiser: [
      { name: 'Cruiser X', price: '$15,000', seats: 2, img: 'assets/cruiser1.png' },
      { name: 'Thunderbird', price: '$18,500', seats: 2, img: 'assets/cruiser2.png' },
    ],
	sport: [
      { name: 'Dinka Akuma', price: '$36,300', seats: 2, img: 'assets/sport/akuma.png' },
      { name: 'Pegassi Bati 801', price: '$46,200', seats: 2, img: 'assets/sport/bati801.png' },
	  { name: 'Pegassi Bati 801RR', price: '$46,200', seats: 2, img: 'assets/sport/bati801rr.png' },
      { name: 'Pegassi Bati 701', price: '$44,000', seats: 2, img: 'assets/sport/bati701.png' },
	  { name: 'Pegassi Bati 901', price: '$60,500', seats: 2, img: 'assets/sport/.png' },
      { name: 'Nagasaki Carbon RS', price: '$66,000', seats: 2, img: 'assets/sport/.png' },
	  { name: 'Shitzu Defiler', price: '$51,700', seats: 2, img: 'assets/sport/.png' },
      { name: 'Principe Diabolus Custom', price: '$77,000', seats: 2, img: 'assets/sport/.png' },
	  { name: 'Dinka Double-T', price: '$39,050', seats: 2, img: 'assets/sport/.png' },
      { name: 'Pegassi FCR 1000', price: '$40,700', seats: 2, img: 'assets/sport/.png' },	
	  { name: 'Pegassi FCR 1000 Custom', price: '$51,700', seats: 2, img: 'assets/sport/.png' },
      { name: 'Shitzu Hakuchou', price: '$71,500', seats: 2, img: 'assets/sport/.png' },
	  { name: 'Nagasaki Kunoichi', price: '$33,000', seats: 2, img: 'assets/sport/.png' },
      { name: 'Thunderbird', price: '$18,500', seats: 2, img: 'assets/sport/.png' },
	  { name: 'Cruiser X', price: '$15,000', seats: 2, img: 'assets/sport/.png' },
      { name: 'Thunderbird', price: '$18,500', seats: 2, img: 'assets/sport/.png' },
	  { name: 'Cruiser X', price: '$15,000', seats: 2, img: 'assets/sport/.png' },
      { name: 'Thunderbird', price: '$18,500', seats: 2, img: 'assets/sport/.png' },
	  { name: 'Cruiser X', price: '$15,000', seats: 2, img: 'assets/sport/.png' },
      { name: 'Thunderbird', price: '$18,500', seats: 2, img: 'assets/sport/.png' },
	  { name: 'Cruiser X', price: '$15,000', seats: 2, img: 'assets/sport/.png' },
      { name: 'Thunderbird', price: '$18,500', seats: 2, img: 'assets/sport/.png' },	
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
        <a>Price: ${vehicle.price}</a>
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
document.querySelector('.close-btn').addEventListener('click', closeModal);