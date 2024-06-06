# frtprogram
online clothes shopping webpage
!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title>Online Clothes Shop</title>
        <link rel="stylesheet"
        href="styles.css">

</head>
<body>
    <header>
        <h1>Online Clothes Shop </h1>
        <nav>
            <ul>
<li> <a href="#">Home</a> </li>
<li> <a href="#">Men</a> </li>
<li> <a href="#">Women</a> </li>
<li> <a href="#">Kids</a> </li>
<li> <a href="#">Sale</a> </li>
            </ul>
        </nav>
    </header>
    <main>
        <section class="product-grid">
            <div class="product-card">
                <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqBmWoPUqWp-KBtriqBD-UuJGoh4wI9XJKMA&s" alt="product1">
                <h2>product1</h2>
                <p>$29.99</p>
                <button onclick="addtocart('product1')"> addtocart </button>
            </div>
            <div class="product-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXKg7YcGIU-IykbpvfsibP3ERMiMwfVOgQ3w&s" alt="product2">
                <h2>product2</h2>
                <p>$39.99</p>
                <button onclick="addtocart('product2')"> addtocart </button>
            </div>
            <div class="product-card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVbGrDAlCYzqVUrELKhtUoH-XpksrJDP97og&s " alt="product3">
                <h2>product3</h2>
                <p>$19.99</p>
                <button onclick="addtocart('product3')"> addtocart </button>
            </div>
            <div class="product-card">
                <img src="https://www.shutterstock.com/shutterstock/photos/2015004815/display_1500/stock-vector-special-summer-sale-banner-discount-in-form-of-d-yellow-balloons-sun-vector-design-seasonal-2015004815.jpg " alt="product4">
                <h2>product4</h2>   
                <button onclick="addtocart('product4')"> addtocart </button>
            </div>
            
            <!--add more product cards as needed-->
            
        </section>
    </main>
    body{
    font-family:Arial,  sans-serif;
    margin:0;
    padding: 0;
    box-sizing: border-box;}
    header
    {background-color: #333;
        color:white;
        padding: 10px 0;
        text-align: center;}
    header h1{ 
        margin: 0;}
    nav ul{
        list-style:none;
        padding: 0;}
    nav ul li{ 
        display:inline;
        margin:0 10px;}
    nav ul il a { 
        color:white;
         text-decoration:none;}
    .product-grid{
         display:flex;
         flex-wrap: wrap; 
         justify-content: center; 
         padding: 20px;}
    .product-card{ 
        background: color #f9f9f9;
        border: 1px solid #add;
        border-radius:5px;
        margin: 10px; 
        padding: 20px;
         text-align: center; 
         width: 200px;}
    .product-card img{
         max-width: 100%;
          height: auto;
          border-bottom: 1px solid #add;
          margin-bottom: 15px;}
    .product-card h2{
         font-size: 1.2em;
          margin: 0 0 10px;}
    .product-card p{
        font-size: 1em;
        margin: 0 0 15px;}
    .product-card button{ 
        background-color: #333;
        color:white;
        border:none; 
        padding: 10px 15px;
        cursor: pointer;
        border-radius: 5px;}
    .product-card button:hover{
        background-color: #555;}
    footer{
        background-color: #333;
        color:white; 
        text-align: center;
        padding:10px 0;
        position: fixed;
        width: 100%; 
        bottom:0;}
    
    <footer>
        <p> & copy;2024 Online Clothes Shop.All rights reserved.</p>
    </footer>
    <script src="scripts.js"></script>
    function addtocart(productname){ alert(productname+" has been added to your cart!");}
</body>function addtocart(productname){ alert(productname+" has been added to your cart!");}function addtocart(productname){ alert(productname+" has been added to your cart!");}
</html>
