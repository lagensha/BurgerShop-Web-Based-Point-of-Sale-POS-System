prdoucts = [];


function addItem(item) {
  Items.push(item);
  console.log(Items);
  localStorage.setItem("Items", JSON.stringify(Items));
}

function viewCart() {
  let subtotal=0;
    let body = "";
    let subproduct=localStorage.getItem("Items");
    subpeoducts=JSON.parse(subproduct);
    
    prdoucts.forEach(element => {
       console.log("Item :" + element);
      switch (element) {
   case 'Bacon beef burger':
      alert("Bacon beef Burger added to cart");
        break;
  case 'Bacon cheddar burger':
    alert("Bacon cheddar burger added to cart");
    break;

    case 'Chili crunch burger':
    alert("Chili crunch burger added to cart");
    break;

    case 'Classic burger':
    alert("Classic burger added to cart");
    break;

     case 'Double stack beef burger':
    alert("Double stack beef burger added to cart");
    break;
    
      case 'Hawaiian pineapple burger':
    alert("Hawaiian pineapple burger added to cart");
    break;

    case 'Classic french fries':
    alert("Classic frnch fries added to cart");
    break;
    
        case 'Chilli cheese fries':
    alert("Chilli cheese fries added to cart");
    break;

        case 'Curly fries':
    alert("Curly  fries added to cart");
    break;
    
        case 'Garlic parmesan french fries':
    alert("Garlic parmesan fries added to cart");
    break;

       case 'Sweet potato french fries':
    alert("Sweet potato fries added to cart");
    break;  
    
      case 'Waffle fries':
    alert("Waffle fries added to cart");
    break;

     case ' Coca-cola':
    alert("Coca-cola added to cart");
    break;

      case 'Cream-soda':
    alert("Cream-soda added to cart");
    break;

      case 'Pepsi':
    alert("Pepsi added to cart");
    break;

      case 'Fanta Orange':
    alert("Fanta Orange added to cart");
    break;

      case 'Fanta pineapple':
    alert("Fanta pineapple added to cart");
    break;

    case 'Bacon beef burger':
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
          <div class="itme-total">
            <span class="total-price" id="total-price-item" >Rs 1,750.00</span>
          </div>
          <button class="btn-remove" onclick="removeItem(this,'Bacon_beef')"><i class="ri-close-line"></i></button>
        </div>`;
        subtotal+=1750;
        break;
        case  'Bacon cheddar burger':
         body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/bacon-cheddar-jalapeno-burger.jpg" alt="Bacon cheddar burger">
          </div>
          <div class="item-details">
            <h3 class="item-name">Bacon cheddar burger</h3>
            <p class="item-description">Juicy cheddar with crispy bacon</p>
            <span class="item-price">Rs 1,750.00</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">1</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="itme-total">
            <span class="total-price" id="total-price-item" >Rs 1,750.00</span>
          </div>
          <button class="btn-remove" onclick="removeItem(this,'Bacon_cheddar_burger')"><i class="ri-close-line"></i></button>
        </div>`;
         subtotal += 1750;
        break;
           case  'Chili crunch burger':
         body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/Chili Crunch Burger.jpg" alt="Chili crunch burger">
          </div>
          <div class="item-details">
            <h3 class="item-name">Chili crunch burger</h3>
            <p class="item-description">Juicy Chili crunch burger with crispy bacon</p>
            <span class="item-price">Rs 1,100.00</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">1</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="itme-total">
            <span class="total-price" id="total-price-item" >Rs 1,100.00</span>
          </div>
          <button class="btn-remove" onclick="removeItem(this,'Bacon_cheddar_burger')"><i class="ri-close-line"></i></button>
        </div>`;
         subtotal += 1100;
        break;
 case  'Classic burger':
         body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/classic.jpg" alt="Classic burger">
          </div>
          <div class="item-details">
            <h3 class="item-name">Chili crunch burger</h3>
            <p class="item-description">Juicy classic burger with crispy bacon</p>
            <span class="item-price">Rs 430.00</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">1</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="itme-total">
            <span class="total-price" id="total-price-item" >Rs 430.00</span>
          </div>
          <button class="btn-remove" onclick="removeItem(this,'Chili_crunch_burger')"><i class="ri-close-line"></i></button>
        </div>`;
         subtotal += 430;
        break;

        case  'Double stack beef burger':
         body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/double-stack-beef-burger.jpg" alt="double-stack-beef-burger">
          </div>
          <div class="item-details">
            <h3 class="item-name">Chili crunch burger</h3>
            <p class="item-description">Juicy double-stack-beef-burger with crispy bacon</p>
            <span class="item-price">Rs 2600.00</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">1</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="itme-total">
            <span class="total-price" id="total-price-item" >Rs 2600.00</span>
          </div>
          <button class="btn-remove" onclick="removeItem(this,'Double stack beef burger')"><i class="ri-close-line"></i></button>
        </div>`;
         subtotal += 2600;
        break;
      
         case  'Hawaiian pineapple burger':
         body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/hawaiian-burger-pineapple-ham-cheese-topped-crispy-fried-onion.jpg" alt="Hawaiian pineapple burger">
          </div>
          <div class="item-details">
            <h3 class="item-name">Chili crunch burger</h3>
            <p class="item-description">Juicy Hawaiian pineapple burger with crispy bacon</p>
            <span class="item-price">Rs 430.00</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">1</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="itme-total">
            <span class="total-price" id="total-price-item" >Rs 430.00</span>
          </div>
          <button class="btn-remove" onclick="removeItem(this,'Hawaiian_pineapple_burger')"><i class="ri-close-line"></i></button>
        </div>`;
         subtotal += 2700;
        break;

          case  'Classic french fries':
         body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/Classic French Fries.jpg" alt="Classic French Fries">
          </div>
          <div class="item-details">
            <h3 class="item-name">Chili crunch burger</h3>
            <p class="item-description">Juicy Hawaiian pineapple burger with crispy bacon</p>
            <span class="item-price">Rs 550.00</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">1</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="itme-total">
            <span class="total-price" id="total-price-item" >Rs 430.00</span>
          </div>
          <button class="btn-remove" onclick="removeItem(this,'Classic_french_fries')"><i class="ri-close-line"></i></button>
        </div>`;
         subtotal += 550;
        break;
 
           case  'Chilli cheese fries':
         body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/chili-cheese-fries.jpg" alt="asset/chili-cheese-fries.jpg">
          </div>
          <div class="item-details">
            <h3 class="item-name">Chili cheese fries</h3>
            <p class="item-description">best potato and well tast</p>
            <span class="item-price">Rs 700.00</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">1</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="itme-total">
            <span class="total-price" id="total-price-item" >Rs 700.00</span>
          </div>
          <button class="btn-remove" onclick="removeItem(this,'Chilli_cheese_fries')"><i class="ri-close-line"></i></button>
        </div>`;
         subtotal += 700;
        break;

  case  'Curly fries':
         body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/Curly Fries.jpg" alt="asset/Curly Fries.jpg">
          </div>
          <div class="item-details">
            <h3 class="item-name">Curly fries</h3>
            <p class="item-description">best potato and well tast</p>
            <span class="item-price">Rs 800.00</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">1</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="itme-total">
            <span class="total-price" id="total-price-item" >Rs 700.00</span>
          </div>
          <button class="btn-remove" onclick="removeItem(this,'Curly_fries')"><i class="ri-close-line"></i></button>
        </div>`;
         subtotal += 700;
        break;

        case  'Garlic parmesan fries':
         body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/Garlic Parmesan Fries.jpg" alt="asset/Garlic Parmesan Fries.jpg">
          </div>
          <div class="item-details">
            <h3 class="item-name">Garlic parmesan fries</h3>
            <p class="item-description">best potato and well tast</p>
            <span class="item-price">Rs 1700.00</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">1</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="itme-total">
            <span class="total-price" id="total-price-item" >Rs 700.00</span>
          </div>
          <button class="btn-remove" onclick="removeItem(this,'Garlic_parmesan_fries')"><i class="ri-close-line"></i></button>
        </div>`;
         subtotal += 1700;
        break;

        case  'Sweet potato fries':
         body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/Sweet Potato Fries.jpg" alt="asset/Sweet Potato Fries.jpg">
          </div>
          <div class="item-details">
            <h3 class="item-name">Garlic parmesan fries</h3>
            <p class="item-description">best potato and well tast</p>
            <span class="item-price">Rs 650.00</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">1</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="itme-total">
            <span class="total-price" id="total-price-item" >Rs 700.00</span>
          </div>
          <button class="btn-remove" onclick="removeItem(this,'Sweet_potato_fries')"><i class="ri-close-line"></i></button>
        </div>`;
         subtotal += 650;
        break;



        }
    });

    document.getElementById("cart-items-section").innerHTML = body;
    console.log(">>" + body);
}