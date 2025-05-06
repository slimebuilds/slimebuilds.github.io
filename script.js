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

    if (backToTopBtn && modalContent) {
      backToTopBtn.removeEventListener("click", scrollToTop);
      function scrollToTop() {
        modalContent.scrollTop = 0;
      }
      backToTopBtn.addEventListener("click", scrollToTop);
    }

  const vehicles = {
    cruiser: [
      { name: 'LCC Avarus', price: '$37,400', discountedPrice: '$33,660', financePrice: '$43,010', downPayment: '$15,053.50', seats: 1, img: 'assets/cruiser/avarus.png' },
	  { name: 'Western Avenger', price: '$20,900', discountedPrice: '$18,810', financePrice: '$24,035', downPayment: '$8,412.25', seats: 2, img: 'assets/cruiser/avenger.png' },
	  { name: 'Western Bagger', price: '$24,200', discountedPrice: '$21,780', financePrice: '$27,830', downPayment: '$9,740.50', seats: 2, img: 'assets/cruiser/bagger.png' },
	  { name: 'LCC Behemoth', price: '$33,000', discountedPrice: '$29,700', financePrice: '$37,950', downPayment: '$13,282.50', seats: 1, img: 'assets/cruiser/behemoth.png' },
	  { name: 'Western Carter', price: '$22,000', discountedPrice: '$19,800', financePrice: '$25,300', downPayment: '$8,855', seats: 1, img: 'assets/cruiser/carter.png' },
	  { name: 'Nagasaki Chimera', price: '$22,000', discountedPrice: '$19,800', financePrice: '$25,300', downPayment: '$8,855', seats: 1, img: 'assets/cruiser/chimera.png' },
	  { name: 'Western Cliffhanger', price: '$11,000', discountedPrice: '$9,900', financePrice: '$12,650', downPayment: '$4,427.50', seats: 2, img: 'assets/cruiser/cliffhanger.png' },
	  { name: 'Western Daemon (Lost)', price: '$12,100', discountedPrice: '$10,890', financePrice: '$13,915', downPayment: '$4,870.25', seats: 2, img: 'assets/cruiser/daemonlost.png' },
	  { name: 'Western Daemon', price: '$12,100', discountedPrice: '$10,890', financePrice: '$13,915', downPayment: '$4,870.25', seats: 2, img: 'assets/cruiser/daemon.png' },
	  { name: 'LCC Devotee', price: '$23,100', discountedPrice: '$20,790', financePrice: '$26,565', downPayment: '$9,298.25', seats: 1, img: 'assets/cruiser/devotee.png' },
	  { name: 'Principe Diabolus', price: '$47,300', discountedPrice: '$42,570', financePrice: '$54,395', downPayment: '$19,038.25', seats: 1, img: 'assets/cruiser/diabolus.png' },
	  { name: 'Western Freeway', price: '$11,000', discountedPrice: '$9,900', financePrice: '$12,650', downPayment: '$4,427.50', seats: 2, img: 'assets/cruiser/freeway.png' },
	  { name: 'Western Fullback', price: '$19,800', discountedPrice: '$17,820', financePrice: '$22,770', downPayment: '$7,969.50', seats: 2, img: 'assets/cruiser/fullback.png' },
	  { name: 'Western Gargoyle', price: '$14,300', discountedPrice: '$12,870', financePrice: '$16,445', downPayment: '$5,755.75', seats: 1, img: 'assets/cruiser/gargoyle.png' },
	  { name: 'Western Hellfury', price: '$25,300', discountedPrice: '$22,770', financePrice: '$29,095', downPayment: '$10,183.25', seats: 2, img: 'assets/cruiser/hellfury.png' },
	  { name: 'LCC Hexer', price: '$27,500', discountedPrice: '$24,750', financePrice: '$31,625', downPayment: '$11,068.75', seats: 2, img: 'assets/cruiser/hexer.png' },
	  { name: 'LCC Innovation', price: '$39,600', discountedPrice: '$35,640', financePrice: '$45,540', downPayment: '$15,939', seats: 1, img: 'assets/cruiser/innovation.png' },
	  { name: 'Ubermacht Kampfer', price: '$20,900', discountedPrice: '$18,810', financePrice: '$24,035', downPayment: '$8,412.25', seats: 1, img: 'assets/cruiser/kampfer.png' },
	  { name: 'LCS Lycan', price: '$22,000', discountedPrice: '$19,800', financePrice: '$25,300', downPayment: '$8,855', seats: 2, img: 'assets/cruiser/lycan.png' },
	  { name: 'Western Marabunta', price: '$22,000', discountedPrice: '$19,800', financePrice: '$25,300', downPayment: '$8,855', seats: 2, img: 'assets/cruiser/marabunta.png' },
	  { name: 'Western Nightblade', price: '$27,500', discountedPrice: '$24,750', financePrice: '$31,625', downPayment: '$11,068.75', seats: 2, img: 'assets/cruiser/nightblade.png' },
	  { name: 'Western Nightblade Classic', price: '$18,700', discountedPrice: '$16,830', financePrice: '$21,505', downPayment: '$7,526.75', seats: 2, img: 'assets/cruiser/nightbladeclassic.png' },
	  { name: 'Western Nightblade Hex', price: '$33,000', discountedPrice: '$29,700', financePrice: '$37,950', downPayment: '$13,282.50', seats: 1, img: 'assets/cruiser/nightbladehex.png' },
	  { name: 'Western Ratas', price: '$19,800', discountedPrice: '$17,820', financePrice: '$22,770', downPayment: '$7,969.50', seats: 1, img: 'assets/cruiser/ratas.png' },
	  { name: 'Western Revenant', price: '$22,000', discountedPrice: '$19,800', financePrice: '$25,300', downPayment: '$8,855', seats: 2, img: 'assets/cruiser/revenant.png' },
	  { name: 'Western Serpentine', price: '$25,300', discountedPrice: '$22,770', financePrice: '$29,095', downPayment: '$10,183.25', seats: 1, img: 'assets/cruiser/serpentine.png' },
	  { name: 'Western Slave', price: '$9,900', discountedPrice: '$8,910', financePrice: '$11,385', downPayment: '$3,984.75', seats: 1, img: 'assets/cruiser/slave.png' },
	  { name: 'Western Angel Deluxe', price: '$25,300', discountedPrice: '$22,770', financePrice: '$29,095', downPayment: '$10,183.25', seats: 2, img: 'assets/cruiser/angeldeluxe.png' },
	  { name: 'Western Speedster', price: '$16,500', discountedPrice: '$14,850', financePrice: '$18,975', downPayment: '$6,641.25', seats: 1, img: 'assets/cruiser/speedster.png' },
	  { name: 'Western Spirit Chopper', price: '$19,800', discountedPrice: '$17,820', financePrice: '$22,770', downPayment: '$7,969.50', seats: 1, img: 'assets/cruiser/spirit.png' },
	  { name: 'LCC Templar', price: '$16,500', discountedPrice: '$14,850', financePrice: '$18,975', downPayment: '$6,641.25', seats: 1, img: 'assets/cruiser/templar.png' },
	  { name: 'Dinka Thrust', price: '$16,500', discountedPrice: '$14,850', financePrice: '$18,975', downPayment: '$6,641.25', seats: 2, img: 'assets/cruiser/thrust.png' },
	  { name: 'Dinka Vindicator', price: '$14,300', discountedPrice: '$12,870', financePrice: '$16,445', downPayment: '$5,755.75', seats: 2, img: 'assets/cruiser/vindicator.png' },
	  { name: 'Western Wintergreen', price: '$33,000', discountedPrice: '$29,700', financePrice: '$37,950', downPayment: '$13,282.50', seats: 2, img: 'assets/cruiser/wintergreen.png' },
	  { name: 'Western Wolfsbane', price: '$17,050', discountedPrice: '$15,345', financePrice: '$19,607.50', downPayment: '$6,862.63', seats: 2, img: 'assets/cruiser/wolfsbane.png' },
	  { name: 'Western Zombie Bobber', price: '$19,250', discountedPrice: '$17,325', financePrice: '$22,137.50', downPayment: '$7,748.13', seats: 1, img: 'assets/cruiser/zombiebob.png' },
	  { name: 'Western Zombie Chopper', price: '$19,250', discountedPrice: '$17,325', financePrice: '$22,137.50', downPayment: '$7,748.13', seats: 2, img: 'assets/cruiser/zombiechop.png' },
    ],
    commuter: [
      { name: 'Nagasaki BRT-600', price: '$11,000', discountedPrice: '$9,900', financePrice: '$12,650', downPayment: '$4,427.50', seats: 2, img: 'assets/commuter/brt600.png' },
	  { name: 'Dinka CR-250', price: '$3,300', discountedPrice: '$2,970', financePrice: '$3,795', downPayment: '$1,328.25', seats: 2, img: 'assets/commuter/cr250.png' },
	  { name: 'Pegassi Esskey', price: '$6,600', discountedPrice: '$5,940', financePrice: '$7,590', downPayment: '$2,656.50', seats: 1, img: 'assets/commuter/esskey.png' },
	  { name: 'Pegassi Esskey R', price: '$16,500', discountedPrice: '$14,850', financePrice: '$18,975', downPayment: '$6,641.25', seats: 1, img: 'assets/commuter/esskeyr.png' },
	  { name: 'Pegassi Faggio Sport', price: '$1,320', discountedPrice: '$1,188', financePrice: '$1,518', downPayment: '$531.30', seats: 1, img: 'assets/commuter/faggiosport.png' },
	  { name: 'Pegassi Faggio', price: '$825', discountedPrice: '$742.50', financePrice: '$948.75', downPayment: '$331.06', seats: 1, img: 'assets/commuter/faggio.png' },
	  { name: 'Pegassi Faggio Mod', price: '$1,100', discountedPrice: '$990', financePrice: '$1,265', downPayment: '$442.75', seats: 1, img: 'assets/commuter/faggiomod.png' },
	  { name: 'Dinka Frakas', price: '$1,210', discountedPrice: '$1,089', financePrice: '$1,391.50', downPayment: '$487.03', seats: 1, img: 'assets/commuter/frakas.png' },
	  { name: 'Principe Nemesis', price: '$10,725', discountedPrice: '$9,652.50', financePrice: '$12,333.75', downPayment: '$4,317.81', seats: 1, img: 'assets/commuter/nemesis.png' },
	  { name: 'Shitzu PCJ 600', price: '$8,800', discountedPrice: '$7,920', financePrice: '$10,120', downPayment: '$3,542', seats: 2, img: 'assets/commuter/pcj600.png' },
	  { name: 'Pegassi Ruffian', price: '$11,000', discountedPrice: '$9,900', financePrice: '$12,650', downPayment: '$4,427.50', seats: 2, img: 'assets/commuter/ruffian.png' },
	  { name: 'Nagasaki Stryder', price: '$44,000', discountedPrice: '$39,600', financePrice: '$50,600', downPayment: '$17,710', seats: 2, img: 'assets/commuter/stryder.png' },
	  { name: 'Shitzu Vader', price: '$5,500', discountedPrice: '$4,950', financePrice: '$6,325', downPayment: '$2,213.75', seats: 2, img: 'assets/commuter/vader.png' },
	  { name: 'Dinka Ventoso', price: '$550', discountedPrice: '$495', financePrice: '$632.50', downPayment: '$221.38', seats: 1, img: 'assets/commuter/ventoso.png' },
	  { name: 'Maibatsu Wildcat', price: '$660', discountedPrice: '$594', financePrice: '$759', downPayment: '$265.65', seats: 1, img: 'assets/commuter/wildcat.png' },
    ],
	bicycle: [
      { name: 'BMX', price: '$165', discountedPrice: '$148.50', financePrice: '$189.75', downPayment: '$66.41', seats: 1, img: 'assets/bicycle/bmx.png' },
	  { name: 'Cruiser', price: '$110', discountedPrice: '$99', financePrice: '$126.50', downPayment: '$44.28', seats: 1, img: 'assets/bicycle/cruiser.png' },
	  { name: 'Fixter', price: '$275', discountedPrice: '$247.50', financePrice: '$316.25', downPayment: '$110.69', seats: 1, img: 'assets/bicycle/fixter.png' },
	  { name: 'Inductor', price: '$2750', discountedPrice: '$2475', financePrice: '$3162.50', downPayment: '$1106.88', seats: 1, img: 'assets/bicycle/inductor.png' },
	  { name: 'Scorcher', price: '$275', discountedPrice: '$247.50', financePrice: '$316.25', downPayment: '$110.69', seats: 1, img: 'assets/bicycle/scorcher.png' },
	  { name: 'Whippet Race Bike', price: '$770', discountedPrice: '$693', financePrice: '$885.50', downPayment: '$309.93', seats: 1, img: 'assets/bicycle/whippet.png' },
	  { name: 'Endurex Race Bike', price: '$770', discountedPrice: '$693', financePrice: '$885.50', downPayment: '$309.93', seats: 1, img: 'assets/bicycle/endurex.png' },
	  { name: 'Tri-Cycles Race Bike', price: '$770', discountedPrice: '$693', financePrice: '$885.50', downPayment: '$309.93', seats: 1, img: 'assets/bicycle/tricycle.png' },
    ],
	quad: [
      { name: 'Nagasaki Street Blazer', price: '$19,800', discountedPrice: '$17,820', financePrice: '$22,770', downPayment: '$7,969.50', seats: 1, img: 'assets/quad/streetblazer.png' },

    ],
	sport: [
      { name: 'Dinka Akuma', price: '$36,300', discountedPrice: '$32,670', financePrice: '$41,745', downPayment: '$14,610.75', seats: 1, img: 'assets/sport/akuma.png' },
	  { name: 'Pegassi Bati 801', price: '$46,200', discountedPrice: '$41,580', financePrice: '$53,130', downPayment: '$18,595.50', seats: 2, img: 'assets/sport/bati801.png' },
	  { name: 'Pegassi Bati 801RR', price: '$46,200', discountedPrice: '$41,580', financePrice: '$53,130', downPayment: '$18,595.50', seats: 2, img: 'assets/sport/bati801rr.png' },
	  { name: 'Pegassi Bati 701', price: '$44,000', discountedPrice: '$39,600', financePrice: '$50,600', downPayment: '$17,710', seats: 2, img: 'assets/sport/bati701.png' },
	  { name: 'Pegassi Bati 901', price: '$60,500', discountedPrice: '$54,450', financePrice: '$69,575', downPayment: '$24,351.25', seats: 2, img: 'assets/sport/bati901.png' },
	  { name: 'Nagasaki Carbon RS', price: '$66,000', discountedPrice: '$59,400', financePrice: '$75,900', downPayment: '$26,565', seats: 1, img: 'assets/sport/carbonrs.png' },
	  { name: 'Shitzu Defiler', price: '$51,700', discountedPrice: '$46,530', financePrice: '$59,455', downPayment: '$20,809.25', seats: 1, img: 'assets/sport/defiler.png' },
	  { name: 'Principe Diabolus Custom', price: '$77,000', discountedPrice: '$69,300', financePrice: '$88,550', downPayment: '$30,992.50', seats: 1, img: 'assets/sport/diaboluscustom.png' },
	  { name: 'Dinka Double-T', price: '$39,050', discountedPrice: '$35,145', financePrice: '$44,907.50', downPayment: '$15,717.63', seats: 2, img: 'assets/sport/doublet.png' },
	  { name: 'Pegassi FCR 1000', price: '$40,700', discountedPrice: '$36,630', financePrice: '$46,805', downPayment: '$16,381.75', seats: 1, img: 'assets/sport/fcr1000.png' },
	  { name: 'Pegassi FCR 1000 Custom', price: '$51,700', discountedPrice: '$46,530', financePrice: '$59,455', downPayment: '$20,809.25', seats: 1, img: 'assets/sport/fcr1000custom.png' },
	  { name: 'Shitzu Hakuchou', price: '$71,500', discountedPrice: '$64,350', financePrice: '$82,225', downPayment: '$28,778.75', seats: 2, img: 'assets/sport/hakuchou.png' },
	  { name: 'Nagasaki Kunoichi', price: '$33,000', discountedPrice: '$29,700', financePrice: '$37,950', downPayment: '$13,282.50', seats: 1, img: 'assets/sport/kunoichi.png' },
	  { name: 'Nagasaki Kusa', price: '$60,500', discountedPrice: '$54,450', financePrice: '$69,575', downPayment: '$24,351.25', seats: 2, img: 'assets/sport/kusa.png' },
	  { name: 'Principe Lectro', price: '$41,250', discountedPrice: '$37,125', financePrice: '$47,437.50', downPayment: '$16,603.13', seats: 2, img: 'assets/sport/lectro.png' },
	  { name: 'Western Powersurge', price: '$35,200', discountedPrice: '$31,680', financePrice: '$40,480', downPayment: '$14,168', seats: 1, img: 'assets/sport/powersurge.png' },
	  { name: 'Western Reever', price: '$60,500', discountedPrice: '$54,450', financePrice: '$69,575', downPayment: '$24,351.25', seats: 2, img: 'assets/sport/reever.png' },
	  { name: 'Nagasaki Shinobi', price: '$57,750', discountedPrice: '$51,975', financePrice: '$66,412.50', downPayment: '$23,244.38', seats: 1, img: 'assets/sport/shinobi.png' },
	  { name: 'Pegassi Vortex', price: '$63,250', discountedPrice: '$56,925', financePrice: '$72,737.50', downPayment: '$25,458.13', seats: 1, img: 'assets/sport/vortex.png' },
	  { name: 'Nagasaki V-RS', price: '$66,000', discountedPrice: '$59,400', financePrice: '$75,900', downPayment: '$26,565', seats: 1, img: 'assets/sport/vrs.png' },
	  { name: 'Shitzu VTF-1000', price: '$39,600', discountedPrice: '$35,640', financePrice: '$45,540', downPayment: '$15,939', seats: 2, img: 'assets/sport/vtf1000.png' },
	  { name: 'Nagasaki XP1', price: '$60,500', discountedPrice: '$54,450', financePrice: '$69,575', downPayment: '$24,351.25', seats: 1, img: 'assets/sport/xp1.png' },

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
		  <a>Price: ${vehicle.price} </br>Dealer Price: ${vehicle.discountedPrice}</br>Finance Price: ${vehicle.financePrice}</br>Down Payment: ${vehicle.downPayment}</br></a>
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