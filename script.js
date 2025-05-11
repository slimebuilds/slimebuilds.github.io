const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const menuModal = document.getElementById('menuModal');
const tabContent = document.getElementById('tabContent');

navToggle.onclick = () => navLinks.classList.toggle('open');

openModal.onclick = () => menuModal.style.display = 'flex';
closeModal.onclick = () => menuModal.style.display = 'none';
window.onclick = (e) => {
  if (e.target == menuModal) menuModal.style.display = 'none';
};

function scrollToMenu() {
  document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

function showTab(tab) {
  const content = {
    koreanbbq: `
      <div class="food-item">
        <img src="images/menu/koreanbbq/beefbulgogi.png" alt="Beef Bulgogi">
        <h2>Beef Bulgogi</h2>
		<a>K-BBQ thinly-sliced beef marinated in a sweet soy sauce blend.</a>
        <p>$75</p>
      </div>
      <div class="food-item">
        <img src="images/menu/koreanbbq/galbi.png" alt="Galbi">
        <h2>Galbi</h2>
		<a>K-BBQ beef short ribs marinated in a sweet soy sauce mixture.</a>
        <p>$75</p>
      </div>
	  <div class="food-item">
        <img src="images/menu/koreanbbq/porkbelly.png" alt="Pork Belly">
        <h2>Pork Belly</h2>
		<a>K-BBQ pork belly with a spicy-sweet gochujang marinade.</a>
        <p>$75</p>
      </div>
    `,
    hotpot: `
      <div class="food-item">
        <img src="images/menu/hotpot/hotpot.png" alt="Hot Pot">
        <h2>Hot Pot</h2>
		<a>Hot pot with thinly sliced beef, tofu, noodles and an assortment of vegetables in a dashi broth.</a>
        <p>$75</p>
      </div>
	  <div class="food-item">
        <img src="images/menu/hotpot/mushroomhotpot.png" alt="Hot Pot">
        <h2>Mushroom Hot Pot</h2>
		<a>A vegetarian hot pot featuring an assortment of mushrooms and vegetables in a savory broth.</a>
        <p>$75</p>
      </div>
    `,
    mains: `
      <div class="food-item">
        <img src="images/menu/mains/spicystirsquid.png" alt="Spicy Stir-fried Squid">
        <h2>Spicy Stir-fried Squid</h2>
		<a>Fresh squid cut into bite-sized pieces & stir-fried with vegetables and a sweet and spicy sauce.</a>
        <p>$50</p>
      </div>
	  <div class="food-item">
        <img src="images/menu/mains/bibimbap.png" alt="Bibimbap">
        <h2>Bibimbap</h2>
		<a>Rice bowl with seasoned vegetables, a fried egg sunny side up, topped with gochujang sauce and sesame seeds.</a>
        <p>$50</p>
      </div>
	  <div class="food-item">
        <img src="images/menu/mains/japchae.png" alt="Japchae">
        <h2>Japchae</h2>
		<a>Korean sweet potato glass noodles, vegetables, marinated beef strips, seasoned with soy sauce and sesame seed oil. Also available served vegetarian.</a>
        <p>$50</p>
      </div>
	  <div class="food-item">
        <img src="images/menu/mains/koreanfriedchicken.png" alt="Korean Fried Chicken">
        <h2>Korean Fried Chicken</h2>
		<a>Super crunchy Korean Fried Chicken with gochujang sauce.</a>
        <p>$50</p>
      </div>
	  <div class="food-item">
        <img src="images/menu/mains/tteokbokki.png" alt="Tteokbokki">
        <h2>Tteokbokki</h2>
		<a>Spicy rice cakes, stir-fried in a gochujang based sauce and paired with boiled eggs and scallions.</a>
        <p>$50</p>
      </div>
	  <div class="food-item">
        <img src="images/menu/mains/kimichistew.png" alt="Kimchi Stew">
        <h2>Kimchi Stew</h2>
		<a>A hearty spicy stew made with pork, kimchi, green onion and bits of tofu in a savory pork stock.</a>
        <p>$50</p>
      </div>
	  <div class="food-item">
        <img src="images/menu/mains/koreancorndogs.png" alt="Korean Corndogs">
        <h2>Korean Corndogs</h2>
		<a>Two dawgs fried in a Korean style batter. Dirty Dawgs x Banchan.</a>
        <p>$50</p>
      </div>
    `,
	sweets: `
      <div class="food-item">
        <img src="images/menu/sweets/hotteok.png" alt="Hotteok">
        <h2>Hotteok</h2>
		<a>Fluffy pancakes topped with a dollop of whipped butter and a sweet syrup drizzle.</a>
        <p>$50</p>
      </div>
	  <div class="food-item">
        <img src="images/menu/sweets/bingsu.png" alt="Bingsu">
        <h2>Bingsu</h2>
		<a>Milk-based Korean shaved ice dessert with assorted sweet toppings.</a>
        <p>$30</p>
      </div>
    `,
//	  
	drinks: `
	  <div class="food-item">
        <img src="images/menu/drinks/yujatea.png" alt="Yuja Tea">
        <h2>Yuja Tea</h2>
		<a>A traditional Korean tea made by mixing hot water with yuja marmalade.</a>
        <p>$25</p>
      </div>
	  <div class="food-item">
        <img src="images/menu/drinks/dalgona.png" alt="Dalgona">
        <h2>Dalgona</h2>
		<a>Coffee whipped together with sugar, served over ice and your choice of milk (1%, whole, oat, or almond).</a>
        <p>$25</p>
      </div>
	  <div class="food-item">
        <img src="images/menu/drinks/cherryblossommilkshake.png" alt="Cherry Blossom Milkshake">
        <h2>Cherry Blossom Milkshake</h2>
		<a>A creamy milkshake made with soft serve vanilla ice cream that has been made in house, milk, and sweet cherries. Topped with whipped cream and little pieces of black cherries.</a>
        <p>$30</p>
      </div>
	  <div class="food-item">
        <img src="images/menu/drinks/hibiscus.png" alt="Hibiscus Herbal Tea with Blueberry Popping Boba">
        <h2>Hibiscus Herbal Tea with Blueberry Popping Boba</h2>
		<a>Floral bliss infused with blueberry popping boba for a delightful burst of fruity freshness in every sip.</a>
		<a>Teaspoon of Boba</a>
        <p>$25</p>
      </div>
	  <div class="food-item">
        <img src="images/menu/drinks/taromilk.png" alt="Taro Milk Tea with Tapioca Pearls">
        <h2>Taro Milk Tea with Tapioca Pearls</h2>
		<a>Teaspoon of Boba. Floral bliss infused with blueberry popping boba for a delightful burst of fruity freshness in every sip.</a>
        <p>$25</p>
      </div>
    `,
//	  
//	  <img src="images/menu/drinks/cherryblossommilkshake.png" alt="Cherry Blossom Milkshake">
	alcohol: `
	  <div class="food-item">
        <img src="images/menu/alcohol/peachsoju.png" alt="Peach Soju">
        <h2>Peach Soju</h2>
		<a>Popular Korean distilled alcoholic beverage traditionally made from rice. Peach flavored.</a>
        <p>$50</p>
      </div>
    `,
  };

  tabContent.innerHTML = content[tab] || "<h2>Section Not Found</h2>";
  menuModal.style.display = 'flex';
  menuModal.style.alignItems = 'center';
  menuModal.style.justifyContent = 'center';
  menuModal.style.padding = '2rem';
}

const openContactModal = document.getElementById('openContactModal');
const contactModal = document.getElementById('contactModal');
const closeContactModal = document.getElementById('closeContactModal');

// Open Contact Modal
openContactModal.onclick = () => contactModal.style.display = 'flex';
// Close Contact Modal
closeContactModal.onclick = () => contactModal.style.display = 'none';
// Close when clicking outside modal
window.onclick = (e) => {
  if (e.target == contactModal) contactModal.style.display = 'none';
};

// Copy to Clipboard
function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
//    alert(`Copied: ${text}`);
  });
}

const contactNavLink = document.getElementById('contactNavLink');

contactNavLink.onclick = (e) => {
  e.preventDefault(); // Prevent default anchor behavior
  contactModal.style.display = 'flex';
};

contactNavLink.onclick = () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  contactModal.style.display = 'flex';
  navLinks.classList.remove('open');   // Close mobile nav menu
};
