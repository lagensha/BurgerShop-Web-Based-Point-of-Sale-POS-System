prdoucts = [];


function addItem(item) {
  prdoucts.push(item);
  console.log(prdoucts);
}


function viewCart() {
    let body = "";
    console.log("+>" + body);
    
    prdoucts.forEach(element => {
      switch (element) {
    case 'Garlic_Parmesan_Fries':
      alert("Garlic Parmesan Fries added to cart");
        break;
    case 'Sweet_Potato_Fries':
      alert("Sweet Potato Fries added to cart");
        break;  
    case 'Waffle_Fries':
      alert("Waffle Fries added to cart");
        break;
    case 'Coca_cola':
      alert("Coca cola added to cart");
        break;
    case 'Bacon_cheddar':
      alert("Bacon cheddar added to cart");
        break;
case 'Pepsi':
      alert("Pepsi added to cart");
        break;
    case 'Fanta_Orange':
      alert("Fanta Orange added to cart");
        break;
    case 'Fanta_Pineapple':
      alert("Fanta Pineapple added to cart");
        break;
    case 'Classic_Burger':
      alert("Classic Burger added to cart");
        break;
    case 'Cheese_Burger':
      alert("Cheese Burger added to cart");
        break;
    case 'Bacon_Burger':
      alert("Bacon Burger added to cart");
        break;
    case 'Mushroom_Swiss_Burger':
      alert("Mushroom Swiss Burger added to cart");
        break;
case 'Veggie_Burger':
      alert("Veggie Burger added to cart");
        break;
    case 'BBQ_Burger':
      alert("BBQ Burger added to cart");
        break;
    default:
      alert("Item added to cart");
        break;

  
    case 'Bacon_beef':
      body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/bacon-burger-beef.jpg" alt="Bacon beef burger">
          </div>
          <div class="item-details">
            <h3 class="item-name">Bacon beef burger</h3>
            <p class="item-description">Juicy beef with crispy bacon</p>
            <span class="item-price">Rs 1,750.00</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">1</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="item-total">
            <span class="total-price">Rs 1,750.00</span>
          </div>
          <button class="btn-remove"><i class="ri-close-line"></i></button>
        </div>`;
        break;
    case 'Bacon_cheddar':
      body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/bacon-cheddar-jalapeno-burger.jpg" alt="Bacon cheddar burger">
          </div>
          <div class="item-details">
            <h3 class="item-name">Bacon cheddar burger</h3>
            <p class="item-description">Crispy bacon with melted cheddar</p>
            <span class="item-price">Rs 1,750.00</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">1</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="item-total">
            <span class="total-price">Rs 1,750.00</span>
          </div>
          <button class="btn-remove"><i class="ri-close-line"></i></button>
        </div>`;
        break;

    case 'Chili_Crunch':
      body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/Chili Crunch Burger.jpg" alt="Chili Crunch Burger">
          </div>
          <div class="item-details">
            <h3 class="item-name">Chili Crunch Burger</h3>
            <p class="item-description">Spicy chili with crispy crunch</p>
            <span class="item-price">Rs 1,100.00</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">2</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="item-total">
            <span class="total-price">Rs 2,200.00</span>
          </div>
          <button class="btn-remove"><i class="ri-close-line"></i></button>
        </div>`;
        break;

  case 'Waffle_Fries':
      body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/Waffle_Fries.jpg" alt="Chili Crunch Burger">
          </div>
          <div class="item-details">
            <h3 class="item-name">Waffle_Fries_Burger</h3>
            <p class="item-description">Spicy chili with crispy crunch</p>
            <span class="item-price">Rs 1,100.00</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">2</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="item-total">
            <span class="total-price">Rs 2,200.00</span>
          </div>
          <button class="btn-remove"><i class="ri-close-line"></i></button>
        </div>`;
        break;

        case 'Sweet_Potato_Fries':
      body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/.jpg" alt="Sweet_Potato_Fries">
          </div>
          <div class="item-details">
            <h3 class="item-name">Sweet_Potato_Fries</h3>
            <p class="item-description">Spicy chili with crispy crunch</p>
            <span class="item-price">Rs 1,100.00</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">2</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="item-total">
            <span class="total-price">Rs 2,200.00</span>
          </div>
          <button class="btn-remove"><i class="ri-close-line"></i></button>
        </div>`;
        break;
   case 'Coca_cola':
      body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/bacon-burger-beef.jpg" alt="Coca_cola">
          </div>
          <div class="item-details">
            <h3 class="item-name">Coca_cola</h3>
            <span class="item-price">Rs 1,750.00</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">1</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="item-total">
            <span class="total-price">Rs 1,750.00</span>
          </div>
          <button class="btn-remove"><i class="ri-close-line"></i></button>
        </div>`;
        break;

        case 'Bacon_cheddar':
      body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/bacon-burger-beef.jpg" alt="Coca_cola">
          </div>
          <div class="item-details">
            <h3 class="item-name">Bacon_cheddar</h3>
            <span class="item-price">Rs 1,750.00</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">1</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="item-total">
            <span class="total-price">Rs 1,750.00</span>
          </div>
          <button class="btn-remove"><i class="ri-close-line"></i></button>
        </div>`;
        break;
     case 'Pepsi':
      body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/Pepsi.jpg" alt="Coca_cola">
          </div>
          <div class="item-details">
            <h3 class="item-name">Pepsi</h3>
            <span class="item-price">Rs 1,750.00</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">1</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="item-total">
            <span class="total-price">Rs 1,750.00</span>
          </div>
          <button class="btn-remove"><i class="ri-close-line"></i></button>
        </div>`;
        break;

         case '':
      body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/Pepsi.jpg" alt="Coca_cola">
          </div>
          <div class="item-details">
            <h3 class="item-name">Pepsi</h3>
            <span class="item-price">Rs 1,750.00</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">1</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="item-total">
            <span class="total-price">Rs 1,750.00</span>
          </div>
          <button class="btn-remove"><i class="ri-close-line"></i></button>
        </div>`;
        break;

    case '':
      body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/Pepsi.jpg" alt="Coca_cola">
          </div>
          <div class="item-details">
            <h3 class="item-name">Pepsi</h3>
            <span class="item-price">Rs 1,750.00</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">1</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="item-total">
            <span class="total-price">Rs 1,750.00</span>
          </div>
          <button class="btn-remove"><i class="ri-close-line"></i></button>
        </div>`;
        break;

            case '':
      body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/Pepsi.jpg" alt="Coca_cola">
          </div>
          <div class="item-details">
            <h3 class="item-name">Pepsi</h3>
            <span class="item-price">Rs 1,750.00</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">1</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="item-total">
            <span class="total-price">Rs 1,750.00</span>
          </div>
          <button class="btn-remove"><i class="ri-close-line"></i></button>
        </div>`;
        break;

    default:
      body += `<div class="cart-item">
          <div class="item-image">
            <img src="https://placehold.co/600x400" alt="Bacon beef burger">
          </div>
          <div class="item-details">
            <h3 class="item-name">Null</h3>
            <p class="item-description">Null</p>
            <span class="item-price">Rs #,###.##</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">1</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="item-total">
            <span class="total-price">Rs #,###.##</span>
          </div>
          <button class="btn-remove"><i class="ri-close-line"></i></button>
        </div>`;
        break;
        

  }
    });

    document.getElementById("cart-items-section").innerHTML = body;
    console.log(">>" + body);
}