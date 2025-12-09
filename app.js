let burgerArray=[];
let friesArray=[];
let drinksArray=[];

function placeOrders(){
    let html=`
    </div>
<div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Name :</h5>
    <p class="card-text">Price : </p>
     <p class="card-text">Total : </p>
    <a href="app.js" class="btn btn-primary">order</a>
  </div>
</div>
    `;
    let orderName=document.getElementById("cardArea").value;
    // let orderPrice=document.getElementById("txtValue").value;
    // let orderTotal=document.getElementById("txtTotal").value;
}
    placeOrders();

    let order=[
    {title: "Card 1", text: "First card"},
    {title: "Card 2", text: "Second card"},
    {title: "Card 3", text: "Third card"}

    ];

      function getdetails(){
        let result="";

       order.forEach(c =>{
        result+=`
        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">${c.title}</h5>
                <p class="card-text">${c.text}</p>
            </div>
        </div>`;
    });  
    document.getElementById("cardArea").innerHTML=result;
      }
      getdetails();