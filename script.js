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

case 'Garlic_Parmesan_Fries':
      alert("Garlic Parmesan Fries added to cart");
        break;