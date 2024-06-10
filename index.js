module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const product = (req.body && req.body.product) || '';
    
    // Simulating a cart stored in session 
    let cart = context.bindings.cart || [];
    cart.push(product);
    
    context.bindings.cart = cart;

    context.res = {
        status: 200,
        body: { cart: cart }
    };
};
