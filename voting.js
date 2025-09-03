let cart = [];
        const products = [
            { id: 1, title: 'Apple', price: 1.00 },
            { id: 2, title: 'Banana', price: 0.50 },
            { id: 3, title: 'Cherry', price: 2.00 },
            { id: 4, title: 'Date', price: 3.00 },
        ];

        function displayMenu() {
            return prompt(
                "1. Add Product to Cart\n" +
                "2. Remove Item from Cart\n" +
                "3. View Cart\n" +
                "4. Exit\n" +
                "Choose an option:"
            );
        }

        function addProductToCart() {
            let productList = "Available Products:\n";
            products.forEach(product => {
                productList += `${product.id}. ${product.title} - $${product.price.toFixed(2)}\n`;
            });

            const choice = parseInt(prompt(productList + "Choose a product number to add to cart:"));
            const product = products.find(p => p.id === choice);

            if (product) {
                cart.push(product);
                alert(`${product.title} has been added to your cart.`);
            } else {
                alert('Invalid product number.');
            }
        }

        function removeItemFromCart() {
            if (cart.length === 0) {
                alert("Your cart is empty.");
                return;
            }

            let cartItems = "Items in Cart:\n";
            cart.forEach((item, index) => {
                cartItems += `${index + 1}. ${item.title} - $${item.price.toFixed(2)}\n`;
            });

            const choice = parseInt(prompt(cartItems + "Choose a number to remove from cart:"));
            if (choice > 0 && choice <= cart.length) {
                const removedItem = cart.splice(choice - 1, 1);
                alert(`${removedItem[0].title} has been removed from your cart.`);
            } else {
                alert('Invalid number.');
            }
        }

        function viewCart() {
            if (cart.length === 0) {
                alert("Your cart is empty.");
                return;
            }

            let cartDetails = "Your Cart:\n";
            cart.forEach((item, index) => {
                cartDetails += `${index + 1}. ${item.title} - $${item.price.toFixed(2)}\n`;
            });
            alert(cartDetails);
        }

        function main() {
            while (true) {
                const option = displayMenu();

                switch (option) {
                    case '1':
                        addProductToCart();
                        break;
                    case '2':
                        removeItemFromCart();
                        break;
                    case '3':
                        viewCart();
                        break;
                    case '4':
                        alert("Exiting the program. Thank you!");
                        return;
                    default:
                        alert("Invalid option. Please try again.");
                }
            }
        }
      main();