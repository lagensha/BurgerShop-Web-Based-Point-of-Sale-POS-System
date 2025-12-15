products = [];
products=JSON.parse(localStorage.getItem("products")) || [];
function addItem(item) {
  products.push(item);
  console.log(products);
  localStorage.setItem("products", JSON.stringify(products));
}

function viewCart() {
  let subtotal = 0;

  var body = "";
  let subproducts = localStorage.getItem("products");
  subproducts = JSON.parse(subproducts);

  subproducts.forEach(element => {
    console.log("products: " + element);
    switch(element){

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
          <div class="itme-total">
            <span class="total-price" id="total-price-item" >Rs 1,750.00</span>
          </div>
          <button class="btn-remove" onclick="removeItem(this,'Bacon_beef')"><i class="ri-close-line"></i></button>
        </div>`;
        subtotal+=1750;
        break;
        case  'Bacon_cheddar':
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
          <button class="btn-remove" onclick="removeItem(this,'Bacon_cheddar')"><i class="ri-close-line"></i></button>
        </div>`;
         subtotal += 1750;
        break;
           case  'Chili_Crunch':
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
          <button class="btn-remove" onclick="removeItem(this,'Chili_Crunch')"><i class="ri-close-line"></i></button>
        </div>`;
         subtotal += 1100;
        break;
 case  'Classic':
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
          <button class="btn-remove" onclick="removeItem(this,'Classic')"><i class="ri-close-line"></i></button>
        </div>`;
         subtotal += 430;
        break;

        case  'Double_stack_beef':
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
          <button class="btn-remove" onclick="removeItem(this,'Double_stack_beef')"><i class="ri-close-line"></i></button>
        </div>`;
         subtotal += 2600;
        break;
      
         case  'Hawaiian_pineapple_burger ':
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
          <button class="btn-remove" onclick="removeItem(this,'Hawaiian_pineapple_burger ')"><i class="ri-close-line"></i></button>
        </div>`;
         subtotal += 2700;
        break;

         case  'mushroom_burger ':
         body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/" alt="mushroom_burger">
          </div>
          <div class="item-details">
            <h3 class="item-name">Chili crunch burger</h3>
            <p class="item-description">Juicy mushroom_burger burger with crispy bacon</p>
            <span class="item-price">Rs 2700.00</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">1</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="itme-total">
            <span class="total-price" id="total-price-item" >Rs 430.00</span>
          </div>
          <button class="btn-remove" onclick="removeItem(this,'mushroom_burger')"><i class="ri-close-line"></i></button>
        </div>`;
         subtotal += 2700;
        break;
          case  'Classic_french_fries':
         body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/Classic French Fries.jpg" alt="Classic French Fries">
          </div>
          <div class="item-details">
            <h3 class="item-name">Chili crunch burger</h3>
            <p class="item-description">Juicy Classic_french_fries with crispy bacon</p>
            <span class="item-price">Rs 550.00</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">1</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="itme-total">
            <span class="total-price" id="total-price-item" >Rs 550.00</span>
          </div>
          <button class="btn-remove" onclick="removeItem(this,'Classic_french_fries')"><i class="ri-close-line"></i></button>
        </div>`;
         subtotal += 550;
        break;
 
           case  'Chilli_cheese_fries':
         body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/chili-cheese-fries.jpg" alt="chili-cheese-fries.jpg">
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

  case  'Curly_Fries':
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
          <button class="btn-remove" onclick="removeItem(this,'Curly_Fries')"><i class="ri-close-line"></i></button>
        </div>`;
         subtotal += 700;
        break;

        case  'Garlic_Parmesan_Fries':
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
          <button class="btn-remove" onclick="removeItem(this,'Garlic_Parmesan_Fries')"><i class="ri-close-line"></i></button>
        </div>`;
         subtotal += 1700;
        break;

        case  'Sweet_Potato_Fries':
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
            <span class="total-price" id="total-price-item" >Rs 650.00</span>
          </div>
          <button class="btn-remove" onclick="removeItem(this,'Sweet_Potato_Fries')"><i class="ri-close-line"></i></button>
        </div>`;
         subtotal += 650;
        break;
case  'Waffle_Fries':
         body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/Waffle Fries.jpg" alt="asset/Waffle Fries.jpg>
          </div>
          <div class="item-details">
            <h3 class="item-name">Waffle fries</h3>
            <p class="item-description">best potato and well tast</p>
            <span class="item-price">Rs 750.00</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">1</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="itme-total">
            <span class="total-price" id="total-price-item" >Rs 750.00</span>
          </div>
          <button class="btn-remove" onclick="removeItem(this,'Waffle_Fries')"><i class="ri-close-line"></i></button>
        </div>`;
         subtotal += 750;
        break;

case  ' Coca-cola':
         body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/coca.jpg" alt=asset/coca.jpg>
          </div>
          <div class="item-details">
            <h3 class="item-name">Coca-cola</h3>
            <p class="item-description">best drinks and well tast</p>
            <span class="item-price">Rs 150.00</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">1</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="itme-total">
            <span class="total-price" id="total-price-item" >Rs 150.00</span>
          </div>
          <button class="btn-remove" onclick="removeItem(this,'Coca-cola')"><i class="ri-close-line"></i></button>
        </div>`;
         subtotal += 150;
        break;        

case  'Cream_soda':
         body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/Cream-soda.jpg" alt=asset/Cream-soda.jpg>
          </div>
          <div class="item-details">
            <h3 class="item-name">Cream-soda</h3>
            <p class="item-description">best drinks and well tast</p>
            <span class="item-price">Rs 150.00</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">1</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="itme-total">
            <span class="total-price" id="total-price-item" >Rs 150.00</span>
          </div>
          <button class="btn-remove" onclick="removeItem(this,'Cream_soda')"><i class="ri-close-line"></i></button>
        </div>`;
         subtotal += 150;
        break; 

        case  'Pepsi':
         body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/pepsi.jpg" alt=asset/pepsi.jpg>
          </div>
          <div class="item-details">
            <h3 class="item-name">Pepsi</h3>
            <p class="item-description">best drinks and well tast</p>
            <span class="item-price">Rs 150.00</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">1</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="itme-total">
            <span class="total-price" id="total-price-item" >Rs 150.00</span>
          </div>
          <button class="btn-remove" onclick="removeItem(this,'Pepsi')"><i class="ri-close-line"></i></button>
        </div>`;
         subtotal += 150;
        break; 
        
        case  'Fanta_Orange':
         body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/fantaorange.jpg" alt=asset/Cream-soda.jpg>
          </div>
          <div class="item-details">
            <h3 class="item-name">Fanta Orange</h3>
            <p class="item-description">best drinks and well tast</p>
            <span class="item-price">Rs 150.00</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">1</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="itme-total">
            <span class="total-price" id="total-price-item" >Rs 150.00</span>
          </div>
          <button class="btn-remove" onclick="removeItem(this,'Fanta_Orange')"><i class="ri-close-line"></i></button>
        </div>`;
         subtotal += 150;
        break; 

        case  'Fanta_Pineapple':
         body += `<div class="cart-item">
          <div class="item-image">
            <img src="asset/fantapinaple.jpg" alt=asset/fantapinaple.jpg>
          </div>
          <div class="item-details">
            <h3 class="item-name">Fanta Pineapple</h3>
            <p class="item-description">best drinks and well tast</p>
            <span class="item-price">Rs 150.00</span>
          </div>
          <div class="item-quantity">
            <button class="qty-btn">-</button>
            <span class="qty-number">1</span>
            <button class="qty-btn">+</button>
          </div>
          <div class="itme-total">
            <span class="total-price" id="total-price-item" >Rs 250.00</span>
          </div>
          <button class="btn-remove" onclick="removeItem(this,'Fanta_pineapple')"><i class="ri-close-line"></i></button>
        </div>`;
         subtotal += 250;
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
          <button class="btn-remove" onclick="removeItem(this,"null")"><i class="ri-close-line"></i></button>
        </div>`;
        break;
        }
    });

 document.getElementById("cart-items-section").innerHTML = body;
  document.getElementById("sub-total").innerText = "Rs " + (subtotal) + ".00";
  document.getElementById("summary-value").innerText = "Rs " + (subtotal * 0.1)+ ".00";
  document.getElementById("total-amount").innerText = "Rs " + (subtotal + (subtotal * 0.1)+100) + ".00";
}

function removeItem(element,name) {
  element.parentNode.remove();  
 
   const index = products.indexOf(name);
  if (index > -1) {
    products.splice(index, 1);
  }

  localStorage.setItem("products", JSON.stringify(products));

 viewCart;

}
