document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuToggle && mobileMenu) {

    menuToggle.addEventListener("click", () => {

      mobileMenu.classList.toggle("show");
    });


    mobileMenu.addEventListener("click", (event) => {
      if (event.target.tagName === "A") {
        mobileMenu.classList.remove("show");
      }
    });
  }

  window.openModal = function (category) {
    const modal = document.getElementById("category-modal");
    const vehicleList = modal.querySelector(".vehicle-list");
    const modalContent = modal.querySelector(".modal-content");
    const backToTopBtn = modal.querySelector("#back-to-top");
	const searchInput = modal.querySelector("#vehicle-search");
	const searchButton = modal.querySelector("#search-button");

    if (backToTopBtn && modalContent) {
      backToTopBtn.removeEventListener("click", scrollToTop);
      function scrollToTop() {
        modalContent.scrollTop = 0;
      }
      backToTopBtn.addEventListener("click", scrollToTop);
    }
	
	if (searchButton && searchInput) {
	  searchButton.onclick = () => {
		const query = searchInput.value.toLowerCase();
		const vehicleDivs = modal.querySelectorAll(".vehicle");

		let found = false;
		for (const div of vehicleDivs) {
		  const name = div.querySelector("p").textContent.toLowerCase();
		  if (name.includes(query)) {
			div.scrollIntoView({ behavior: "smooth", block: "center" });
			div.style.boxShadow = "0 0 15px 5px #EE2824"; // highlight
			setTimeout(() => {
			  div.style.boxShadow = ""; // remove highlight after a second
			}, 1500);
			found = true;
			break;
		  }
		}

		if (!found) {
		  alert("No vehicle found with that name.");
		}
	  };
	}

  const vehicles = {
    cruiser: [
	  { name: 'Western Angel Deluxe', price: '$23,000', discountedPrice: '$9,660', seats: 1, img: 'assets/cruiser/angeldeluxe.png' },
      { name: 'LCC Avarus', price: '$34,000', discountedPrice: '$14,280', seats: 1, img: 'assets/cruiser/avarus.png' },
	  { name: 'Western Avenger', price: '$19,000', discountedPrice: '$7,980', seats: 2, img: 'assets/cruiser/avenger.png' },
	  { name: 'Western Bagger', price: '$22,000', discountedPrice: '$9,240', seats: 2, img: 'assets/cruiser/bagger.png' },
	  { name: 'LCC Behemoth', price: '$30,000', discountedPrice: '$12,600', seats: 1, img: 'assets/cruiser/behemoth.png' },
	  { name: 'Western Carter', price: '$20,000', discountedPrice: '$8,400', seats: 1, img: 'assets/cruiser/carter.png' },
	  { name: 'Nagasaki Chimera', price: '$20,000', discountedPrice: '$8,400', seats: 1, img: 'assets/cruiser/chimera.png' },
	  { name: 'Western Cliffhanger', price: '$10,000', discountedPrice: '$4,200', seats: 2, img: 'assets/cruiser/cliffhanger.png' },
	  { name: 'Western Daemon (Lost)', price: '$11,000', discountedPrice: '$4,620', seats: 2, img: 'assets/cruiser/daemonlost.png' },
	  { name: 'Western Daemon', price: '$11,000', discountedPrice: '$4,620', seats: 2, img: 'assets/cruiser/daemon.png' },
	  { name: 'LCC Devotee', price: '$21,000', discountedPrice: '$8,820', seats: 1, img: 'assets/cruiser/devotee.png' },
	  { name: 'Principe Diabolus', price: '$43,000', discountedPrice: '$18,060', seats: 1, img: 'assets/cruiser/diabolus.png' },
	  { name: 'Western Freeway', price: '$10,000', discountedPrice: '$4,200', seats: 2, img: 'assets/cruiser/freeway.png' },
	  { name: 'Western Fullback', price: '$18,000', discountedPrice: '$7,560', seats: 2, img: 'assets/cruiser/fullback.png' },
	  { name: 'Western Gargoyle', price: '$13,000', discountedPrice: '$5,460', seats: 1, img: 'assets/cruiser/gargoyle.png' },
	  { name: 'Western Hellfury', price: '$23,000', discountedPrice: '$9,660', seats: 2, img: 'assets/cruiser/hellfury.png' },
	  { name: 'LCC Hexer', price: '$25,000', discountedPrice: '$10,500', seats: 2, img: 'assets/cruiser/hexer.png' },
	  { name: 'LCC Innovation', price: '$36,000', discountedPrice: '$15,120', seats: 1, img: 'assets/cruiser/innovation.png' },
	  { name: 'Ubermacht Kampfer', price: '$19,000', discountedPrice: '$7,980', seats: 1, img: 'assets/cruiser/kampfer.png' },
	  { name: 'LCS Lycan', price: '$20,000', discountedPrice: '$,400', seats: 2, img: 'assets/cruiser/lycan.png' },
	  { name: 'Western Marabunta', price: '$15,000', discountedPrice: '$6,300', seats: 2, img: 'assets/cruiser/marabunta.png' },
	  { name: 'Western Nightblade', price: '$25,000', discountedPrice: '$10,500', seats: 2, img: 'assets/cruiser/nightblade.png' },
	  { name: 'Western Nightblade Classic', price: '$17,000', discountedPrice: '$7,140', seats: 2, img: 'assets/cruiser/nightbladeclassic.png' },
	  { name: 'Western Nightblade Hex', price: '$30,000', discountedPrice: '$12,600', seats: 1, img: 'assets/cruiser/nightbladehex.png' },
	  { name: 'Western Ratas', price: '$18,000', discountedPrice: '$7,560', seats: 1, img: 'assets/cruiser/ratas.png' },
	  { name: 'Western Revenant', price: '$20,000', discountedPrice: '$8,400', seats: 2, img: 'assets/cruiser/revenant.png' },
	  { name: 'Western Serpentine', price: '$23,000', discountedPrice: '$9,660', seats: 1, img: 'assets/cruiser/serpentine.png' },
	  { name: 'Western Slave', price: '$9,000', discountedPrice: '$3,780', seats: 1, img: 'assets/cruiser/slave.png' },
	  { name: 'Western Speedster', price: '$15,000', discountedPrice: '$6,300', seats: 1, img: 'assets/cruiser/speedster.png' },
	  { name: 'Western Spirit Chopper', price: '$18,000', discountedPrice: '$7,560', seats: 1, img: 'assets/cruiser/spirit.png' },
	  { name: 'LCC Templar', price: '$15,000', discountedPrice: '$6,300', seats: 1, img: 'assets/cruiser/templar.png' },
	  { name: 'Dinka Thrust', price: '$15,000', discountedPrice: '$6,300', seats: 2, img: 'assets/cruiser/thrust.png' },
	  { name: 'Dinka Vindicator', price: '$13,000', discountedPrice: '$5,460', seats: 2, img: 'assets/cruiser/vindicator.png' },
	  { name: 'Western Wintergreen', price: '$30,000', discountedPrice: '$12,600', seats: 2, img: 'assets/cruiser/wintergreen.png' },
	  { name: 'Western Wolfsbane', price: '$15,500', discountedPrice: '$6,510', seats: 2, img: 'assets/cruiser/wolfsbane.png' },
	  { name: 'Western Zombie Bobber', price: '$17,500', discountedPrice: '$7,350', seats: 1, img: 'assets/cruiser/zombiebob.png' },
	  { name: 'Western Zombie Chopper', price: '$17,500', discountedPrice: '$7,350', seats: 2, img: 'assets/cruiser/zombiechop.png' },
    ],
    commuter: [
		{ name: 'Nagasaki BRT-600', price: '$10,000', discountedPrice: '$4,200', seats: 2, img: 'assets/commuter/brt600.png' },
		{ name: 'Dinka CR-250', price: '$3,000', discountedPrice: '$1,260', seats: 2, img: 'assets/commuter/cr250.png' },
		{ name: 'Pegassi Esskey', price: '$6,000', discountedPrice: '$2,520', seats: 1, img: 'assets/commuter/esskey.png' },
		{ name: 'Pegassi Esskey R', price: '$15,000', discountedPrice: '$6,300', seats: 1, img: 'assets/commuter/esskeyr.png' },
		{ name: 'Pegassi Faggio Sport', price: '$1,380', discountedPrice: '$579.60', seats: 1, img: 'assets/commuter/faggiosport.png' },
		{ name: 'Pegassi Faggio', price: '$750', discountedPrice: '$315', seats: 1, img: 'assets/commuter/faggio.png' },
		{ name: 'Pegassi Faggio Mod', price: '$1,000', discountedPrice: '$420', seats: 1, img: 'assets/commuter/faggiomod.png' },
		{ name: 'Dinka Frakas', price: '$1,100', discountedPrice: '$462', seats: 1, img: 'assets/commuter/frakas.png' },
		{ name: 'Principe Nemesis', price: '$9,750', discountedPrice: '$4,095', seats: 1, img: 'assets/commuter/nemesis.png' },
		{ name: 'Shitzu PCJ 600', price: '$8,000', discountedPrice: '$3,360', seats: 2, img: 'assets/commuter/pcj600.png' },
		{ name: 'Pegassi Ruffian', price: '$10,000', discountedPrice: '$4,200', seats: 2, img: 'assets/commuter/ruffian.png' },
		{ name: 'Nagasaki Stryder', price: '$40,000', discountedPrice: '$16,800', seats: 2, img: 'assets/commuter/stryder.png' },
		{ name: 'Shitzu Vader', price: '$5,000', discountedPrice: '$2,100', seats: 2, img: 'assets/commuter/vader.png' },
		{ name: 'Dinka Ventoso', price: '$500', discountedPrice: '$210', seats: 1, img: 'assets/commuter/ventoso.png' },
		{ name: 'Maibatsu Wildcat', price: '$600', discountedPrice: '$252', seats: 1, img: 'assets/commuter/wildcat.png' },	  
    ],
	bicycle: [
		{ name: 'BMX', price: '$150', discountedPrice: '$63', seats: 1, img: 'assets/bicycle/bmx.png' },
		{ name: 'Cruiser', price: '$100', discountedPrice: '$42', seats: 1, img: 'assets/bicycle/cruiser.png' },
		{ name: 'Fixter', price: '$250', discountedPrice: '$105', seats: 1, img: 'assets/bicycle/fixter.png' },
		{ name: 'Inductor', price: '$2500', discountedPrice: '$1,050', seats: 1, img: 'assets/bicycle/inductor.png' },
		{ name: 'Scorcher', price: '$250', discountedPrice: '$105', seats: 1, img: 'assets/bicycle/scorcher.png' },
	  	{ name: 'Whippet Race Bike', price: '$700', discountedPrice: '$294', seats: 1, img: 'assets/bicycle/whippet.png' },
	  	{ name: 'Endurex Race Bike', price: '$700', discountedPrice: '$294', seats: 1, img: 'assets/bicycle/endurex.png' },
	  	{ name: 'Tri-Cycles Race Bike', price: '$700', discountedPrice: '$294', seats: 1, img: 'assets/bicycle/tricycle.png' },
    ],
	quad: [
      { name: 'Nagasaki Street Blazer', price: '$18,000', discountedPrice: '$7,560', seats: 1, img: 'assets/quad/streetblazer.png' },
    ],
	sport: [
		{ name: 'Dinka Akuma', price: '$33,000', discountedPrice: '$13,860', seats: 1, img: 'assets/sport/akuma.png' },
		{ name: 'Pegassi Bati 801', price: '$42,000', discountedPrice: '$17,640', seats: 2, img: 'assets/sport/bati801.png' },
		{ name: 'Pegassi Bati 801RR', price: '$42,000', discountedPrice: '$17,640', seats: 2, img: 'assets/sport/bati801rr.png' },
		{ name: 'Pegassi Bati 701', price: '$40,000', discountedPrice: '$16,800', seats: 2, img: 'assets/sport/bati701.png' },
		{ name: 'Pegassi Bati 901', price: '$55,000', discountedPrice: '$23,100', seats: 2, img: 'assets/sport/bati901.png' },
		{ name: 'Nagasaki Carbon RS', price: '$60,000', discountedPrice: '$25,200', seats: 1, img: 'assets/sport/carbonrs.png' },
		{ name: 'Shitzu Defiler', price: '$47,000', discountedPrice: '$19,740', seats: 1, img: 'assets/sport/defiler.png' },
		{ name: 'Principe Diabolus Custom', price: '$70,000', discountedPrice: '$29,400', seats: 1, img: 'assets/sport/diaboluscustom.png' },
		{ name: 'Dinka Double-T', price: '$35,500', discountedPrice: '$14,910', seats: 2, img: 'assets/sport/doublet.png' },
		{ name: 'Pegassi FCR 1000', price: '$37,000', discountedPrice: '$15,540', seats: 1, img: 'assets/sport/fcr1000.png' },
		{ name: 'Pegassi FCR 1000 Custom', price: '$47,000', discountedPrice: '$19,740', seats: 1, img: 'assets/sport/fcr1000custom.png' },
		{ name: 'Shitzu Hakuchou', price: '$65,000', discountedPrice: '$27,300', seats: 2, img: 'assets/sport/hakuchou.png' },
		{ name: 'Nagasaki Kunoichi', price: '$30,000', discountedPrice: '$12,600', seats: 1, img: 'assets/sport/kunoichi.png' },
		{ name: 'Nagasaki Kusa', price: '$55,000', discountedPrice: '$23,100', seats: 2, img: 'assets/sport/kusa.png' },
		{ name: 'Principe Lectro', price: '$37,550', discountedPrice: '$15,831', seats: 2, img: 'assets/sport/lectro.png' },
		{ name: 'Western Powersurge', price: '$32,000', discountedPrice: '$13,440', seats: 1, img: 'assets/sport/powersurge.png' },
		{ name: 'Western Reever', price: '$55,000', discountedPrice: '$23,100', seats: 2, img: 'assets/sport/reever.png' },
		{ name: 'Nagasaki Shinobi', price: '$52,500', discountedPrice: '$22,050', seats: 1, img: 'assets/sport/shinobi.png' },
		{ name: 'Pegassi Vortex', price: '$57,500', discountedPrice: '$24,150', seats: 1, img: 'assets/sport/vortex.png' },
		{ name: 'Nagasaki V-RS', price: '$60,000', discountedPrice: '$25,200', seats: 1, img: 'assets/sport/vrs.png' },
		{ name: 'Shitzu VTF-1000', price: '$36,000', discountedPrice: '$15,120', seats: 2, img: 'assets/sport/vtf1000.png' },
		{ name: 'Nagasaki XP1', price: '$55,000', discountedPrice: '$23,100', seats: 1, img: 'assets/sport/xp1.png' },		  
    ],
  };

    vehicleList.innerHTML = "";
	if (vehicles[category]) {
	  vehicles[category].forEach((vehicle) => {
		const vehicleDiv = document.createElement("div");
		vehicleDiv.classList.add("vehicle");

		vehicleDiv.innerHTML = `
		  <p>${vehicle.name}</p>
		  <img src="${vehicle.img}" alt="${vehicle.name}"><br>
		  <a>Tag Price: ${vehicle.price} </br>Down Payment: ${vehicle.discountedPrice}</br></a>
		  <a>Seats: ${vehicle.seats}</a>
		`;


		vehicleList.appendChild(vehicleDiv);
	  });
	} else {
	  vehicleList.innerHTML = "<p>No vehicles found in this category.</p>";
	}


    modal.style.display = "flex";

    const closeBtn = modal.querySelector(".close-btn");
    if (closeBtn) {
      closeBtn.removeEventListener("click", closeModal);
      closeBtn.addEventListener("click", closeModal);
    }

    window.addEventListener("click", (event) => {
      if (!modalContent.contains(event.target) && event.target === modal) {
        closeModal();
      }
    });
  };

  window.closeModal = function () {
    document.getElementById("category-modal").style.display = "none";
  };
	
  document.querySelectorAll(".click-to-copy").forEach(elem => {
		elem.addEventListener("click", () => {
		  const text = elem.textContent.trim();

		  // Use Clipboard API if available
		  if (navigator.clipboard && navigator.clipboard.writeText) {
			navigator.clipboard.writeText(text)
			  .then(() => {
				showTooltip(elem, "Copied!");
			  })
			  .catch(err => {
				console.error("Clipboard copy failed: ", err);
			  });
		  } else {
			// Fallback for older browsers
			const textarea = document.createElement("textarea");
			textarea.value = text;
			document.body.appendChild(textarea);
			textarea.select();
			try {
			  document.execCommand("copy");
			  showTooltip(elem, "Copied!");
			} catch (err) {
			  console.error("Fallback copy failed", err);
			}
			document.body.removeChild(textarea);
		  }
		});
	  });

	  function showTooltip(element, message) {
		const original = element.textContent;
		element.textContent = message;
		setTimeout(() => {
		  element.textContent = original;
		}, 1000);
	  }
});