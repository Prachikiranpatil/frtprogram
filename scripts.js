async function addToCart(productName) {
    try {
        // Call Azure Function to add product to cart
        let response = await fetch('https://<your_azure_function_url>/addToCart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ product: productName })
        });
        let result = await response.json();
        updateCart(result.cart);
    } catch (error) {
        console.error('Error adding to cart:', error);
    }
}

function updateCart(cart) {
    let cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    cart.forEach(item => {
        let div = document.createElement('div');
        div.textContent = item;
        cartDiv.appendChild(div);
    });
}

// using Azure Cognitive Services Computer Vision API
async function analyzeImage(imageUrl) {
    let response = await fetch('https://<your_cognitive_services_endpoint>/vision/v3.1/analyze?visualFeatures=Description', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': '<your_subscription_key>'
        },
        body: JSON.stringify({ url: imageUrl })
    });
    let result = await response.json();
    console.log(result);
}

// using Azure Cognitive Services Translator API
async function translateText(text, targetLanguage) {
    let response = await fetch(`https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=${targetLanguage}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': '<your_subscription_key>',
            'Ocp-Apim-Subscription-Region': '<your_subscription_region>'
        },
        body: JSON.stringify([{ Text: text }])
    });
    let result = await response.json();
    console.log(result);
}
