var products = [
  {name: "Mecor Upholstered Faux Leather Platform Bed ", price: "169", image: "https://m.media-amazon.com/images/I/813epeJ6gjL._AC_UL320_.jpg"},
  {name: "Tall headboard platform bed", price: "165", image: "https://m.media-amazon.com/images/I/61580K9ckxL._AC_UL320_.jpg"},
  {name: "CASTLECREEK Cedar Log Bed", price: "290", image: "https://m.media-amazon.com/images/I/91VTlaWCqSL._AC_UL320_.jpg"},
  {name: "Modern Contemporary Wave-Like Curve Upholstered Platform Bed ", price: "220", image: "https://m.media-amazon.com/images/I/71CNB7LBigL._AC_UL320_.jpg"},
  {name: "Multipurpose Modern Rectangular Computer and study Table", price: "46", image: "https://m.media-amazon.com/images/I/71HFi86BtlL._AC_UL320_.jpg"},
  {name: "Smart Home 151344CT Chloe Living Room Coffee Table", price: "23", image: "https://m.media-amazon.com/images/I/51S1modwnML._AC_UL320_.jpg"},
  {name: "Tribesigns Dining Table with Two Benches, 3 Pieces Dining Set Kitchen Table Set with Metal Base for Small Spaces", price: "209", image: "https://m.media-amazon.com/images/I/61UsFAH7-7L._AC_UL320_.jpg"},
  {name: "Sofa Sectional Sofa Bed Living Room ", price: "23", image: "https://m.media-amazon.com/images/I/71iV6kGJfxL._AC_UL320_.jpg"},
  {name: "Mecor Loveseat Sofa Couch  ", price: "276", image: "https://m.media-amazon.com/images/I/712J1H09-uL._AC_UL320_.jpg"}


];
var cart = {
  items: [],
  total: 0
};

$(document).ready(function(){
  console.log(localStorage.getItem('cart'))
  if(localStorage.getItem('cart')){
    //populate the cart view with cart from localstorage
    cart = JSON.parse(localStorage.getItem('cart'))
    for(var i = 0; i < cart.items.length; i++){
      var divCol = $('<div class="col-md-4">')
      var divCard = $('<div class="card">')
      var image = $('<img class="card-img-top" src="'+cart.items[i].image+'" />')
      var divCardBody = $('<div class="card-body">')
      var title = $('<h5 class="card-title">'+cart.items[i].name+'</h5>')
      var text = $('<p class="card-text">$ '+cart.items[i].price+' x <input type="number" min="0"></p>')
      divCard.append(image)
      divCardBody.append(title)
      divCardBody.append(text)
      divCard.append(divCardBody)
      divCol.append(divCard)
      $('#cart .row').append(divCol)
    }
  }
  console.log("Start here");
  // Basic tasks
  // 1. Show / hide cart section on button click (Cart button / close cutton)
  $('#showCartBtn').click(function(){
    $('#cart').show();
  })

  $('#close').click(function(){
    $('#cart').hide();
  })
  
  // 2. Dynamically load products to view
  for(var i = 0; i  < products.length; i++){
      var divCol = $('<div class="col-md-4">')
      var divCard = $('<div class="card">')
      var image = $('<img class="card-img-top" src="'+products[i].image+'" />')
      var divCardBody = $('<div class="card-body">')
      var title = $('<h5 class="card-title">'+products[i].name+'</h5>')
      var text = $('<p class="card-text">$ '+products[i].price+'</p>')
      var cartBtn = $('<button class="btn btn-primary cartCSS">Add to Cart</button>')
      cartBtn.attr('id', i)
      divCard.append(image)
      divCardBody.append(title)
      divCardBody.append(text)
      divCardBody.append(cartBtn)
      divCard.append(divCardBody)
      divCol.append(divCard)
      $('#products .row').append(divCol)
  }

  // 3. Dynamically show total items in Cart
  // 4. Add to cart button functionality
  $('.cartCSS').click(function(event){
    $(this).prop('disabled', true)
    var index = event.target.id
    cart.items.push(products[index]);
    localStorage.setItem('cart', JSON.stringify(cart))
    $('#itemNo').text(cart.items.length); 

    // 5. Dynamically load cart items
    var divCol = $('<div class="col-md-4">')
      var divCard = $('<div class="card">')
      var image = $('<img class="card-img-top" src="'+products[index].image+'" />')
      var divCardBody = $('<div class="card-body">')
      var title = $('<h5 class="card-title">'+products[index].name+'</h5>')
      var text = $('<p class="card-text">$ '+products[index].price+' x <input type="number" min="0"></p>')
      divCard.append(image)
      divCardBody.append(title)
      divCardBody.append(text)
      divCard.append(divCardBody)
      divCol.append(divCard)
      $('#cart .row').append(divCol)
  })
  
  

  // 6. Implement quantity update for each cart item and update total cost dynamically.
  // 7. Store and load cart from localStorage
});