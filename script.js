function openModal(category) {
  const modal = document.getElementById('category-modal');
  const vehicleList = modal.querySelector('.vehicle-list');
  const modalContent = document.querySelector('.modal-content');
  const backToTopBtn = modal.querySelector('#back-to-top');

  if (backToTopBtn && modalContent) {
    backToTopBtn.addEventListener('click', () => {
      modalContent.scrollTop = 0; // Scrolls to top
    });
  } else {
    console.error("Could not find Back to Top button or modal content");
  }


  // Clear existing content
  vehicleList.innerHTML = '';

  // Example data for vehicles
  const vehicles = {
    cruiser: [
      { name: 'LCC Avarus', price: '$37,400', seats: 1, img: 'assets/cruiser/avarus.png' },
	  { name: 'Western Avenger', price: '$20,900', seats: 2, img: 'assets/cruiser/avenger.png' },
	  { name: 'Western Bagger', price: '$24,200', seats: 2, img: 'assets/cruiser/bagger.png' },
	  { name: 'LCC Behemoth', price: '$33,000', seats: 1, img: 'assets/cruiser/behemoth.png' },
	  { name: 'Western Carter', price: '$22,000', seats: 1, img: 'assets/cruiser/carter.png' },
	  { name: 'Nagasaki Chimera', price: '$22,000', seats: 1, img: 'assets/cruiser/chimera.png' },
	  { name: 'Western Cliffhanger', price: '$11,000', seats: 2, img: 'assets/cruiser/cliffhanger.png' },
	  { name: 'Western Daemon (Lost)', price: '$12,100', seats: 2, img: 'assets/cruiser/daemonlost.png' },
	  { name: 'Western Daemon', price: '$12,100', seats: 2, img: 'assets/cruiser/daemon.png' },
	  { name: 'LCC Devotee', price: '$23,100', seats: 1, img: 'assets/cruiser/devotee.png' },
	  { name: 'Principe Diabolus', price: '$47,300', seats: 1, img: 'assets/cruiser/diabolus.png' },
	  { name: 'Western Freeway', price: '$11,000', seats: 2, img: 'assets/cruiser/freeway.png' },
	  { name: 'Western Fullback', price: '$19,800', seats: 2, img: 'assets/cruiser/fullback.png' },
	  { name: 'Western Gargoyle', price: '$14,300', seats: 1, img: 'assets/cruiser/gargoyle.png' },
	  { name: 'Western Hellfury', price: '$25,300', seats: 2, img: 'assets/cruiser/hellfury.png' },
	  { name: 'LCC Hexer', price: '$27,500', seats: 2, img: 'assets/cruiser/hexer.png' },
	  { name: 'LCC Innovation', price: '$39,600', seats: 1, img: 'assets/cruiser/innovation.png' },
	  { name: 'Ubermacht Kampfer', price: '$20,900', seats: 1, img: 'assets/cruiser/kampfer.png' },
	  { name: 'LCS Lycan', price: '$22,000', seats: 2, img: 'assets/cruiser/lycan.png' },
	  { name: 'Western Marabunta', price: '$22,000', seats: 2, img: 'assets/cruiser/marabunta.png' },
	  { name: 'Western Nightblade', price: '$27,500', seats: 2, img: 'assets/cruiser/nightblade.png' },
	  { name: 'Western Nightblade Classic', price: '$18,700', seats: 2, img: 'assets/cruiser/nightbladeclassic.png' },
	  { name: 'Western Nightblade Hex', price: '$33,000', seats: 1, img: 'assets/cruiser/nightbladehex.png' },
	  { name: 'Western Ratas', price: '$19,800', seats: 1, img: 'assets/cruiser/ratas.png' },
	  { name: 'Western Revenant', price: '$22,000', seats: 2, img: 'assets/cruiser/revenant.png' },
	  { name: 'Western Serpentine', price: '$25,300', seats: 1, img: 'assets/cruiser/serpentine.png' },
	  { name: 'Western Slave', price: '$9900', seats: 1, img: 'assets/cruiser/slave.png' },
	  { name: 'Western Angel Deluxe', price: '$25,300', seats: 2, img: 'assets/cruiser/angeldeluxe.png' },
	  { name: 'Western Speedster', price: '$16,500', seats: 1, img: 'assets/cruiser/speedster.png' },
	  { name: 'Western Spirit Chopper', price: '$19,800', seats: 1, img: 'assets/cruiser/spirit.png' },
	  { name: 'LCC Templar', price: '$16,500', seats: 1, img: 'assets/cruiser/templar.png' },
	  { name: 'Dinka Thrust', price: '$16,500', seats: 2, img: 'assets/cruiser/thrust.png' },
	  { name: 'Dinka Vindicator', price: '$14,300', seats: 2, img: 'assets/cruiser/vindicator.png' },
	  { name: 'Western Wintergreen', price: '$33,000', seats: 2, img: 'assets/cruiser/wintergreen.png' },
	  { name: 'Western Wolfsbane', price: '$17,050', seats: 2, img: 'assets/cruiser/wolfsbane.png' },
	  { name: 'Western Zombie Bobber', price: '$19,250', seats: 1, img: 'assets/cruiser/zombiebob.png' },
	  { name: 'Western Zombie Chopper', price: '$19,250', seats: 2, img: 'assets/cruiser/zombiechop.png' },
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
      { name: 'BMX', price: '$165', seats: 1, img: 'assets/bicycle/bmx.png' },
	  { name: 'Cruiser', price: '$110', seats: 1, img: 'assets/bicycle/cruiser.png' },
	  { name: 'Fixter', price: '$275', seats: 1, img: 'assets/bicycle/fixter.png' },
	  { name: 'Inductor', price: '$2750', seats: 1, img: 'assets/bicycle/inductor.png' },
	  { name: 'Scorcher', price: '$275', seats: 1, img: 'assets/bicycle/scorcher.png' },
	  { name: 'Whippet Race Bike', price: '$770', seats: 1, img: 'assets/bicycle/whippet.png' },
	  { name: 'Endurex Race Bike', price: '$770', seats: 1, img: 'assets/bicycle/endurex.png' },
	  { name: 'Tri-Cycles Race Bike', price: '$770', seats: 1, img: 'assets/bicycle/tricycle.png' },
    ],
	quad: [
      { name: 'Nagasaki Street Blazer', price: '$199,800', seats: 1, img: 'assets/quad/streetblazer.png' },
    ],
	sport: [
      { name: 'Dinka Akuma', price: '$36,300', seats: 1, img: 'assets/sport/akuma.png' },
      { name: 'Pegassi Bati 801', price: '$46,200', seats: 2, img: 'assets/sport/bati801.png' },
	  { name: 'Pegassi Bati 801RR', price: '$46,200', seats: 2, img: 'assets/sport/bati801rr.png' },
      { name: 'Pegassi Bati 701', price: '$44,000', seats: 2, img: 'assets/sport/bati701.png' },
	  { name: 'Pegassi Bati 901', price: '$60,500', seats: 2, img: 'assets/sport/bati901.png' },
      { name: 'Nagasaki Carbon RS', price: '$66,000', seats: 1, img: 'assets/sport/carbonrs.png' },
	  { name: 'Shitzu Defiler', price: '$51,700', seats: 1, img: 'assets/sport/defiler.png' },
      { name: 'Principe Diabolus Custom', price: '$77,000', seats: 1, img: 'assets/sport/diaboluscustom.png' },
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

  // Attach close button functionality here
  const closeBtn = modal.querySelector('.close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
}


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
document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.querySelector('.close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  } else {
    console.error('Close button element not found.');
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const backToTopBtn = document.getElementById('back-to-top');
  const modalContent = document.querySelector('.modal-content');

  if (backToTopBtn && modalContent) {
      backToTopBtn.addEventListener('click', () => {
	  		modalContent.scrollTop = 0; // Forces the scroll to the top
		});

    console.log("Back to Top functionality attached successfully");
  } else {
    console.error("Unable to find Back to Top button or modal content.");
  }
});

console.log(modalContent);




