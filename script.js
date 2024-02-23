fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json')
            .then(response => response.json()) 
            .then(data => {
        
                const productCatalogDiv = document.getElementById('product-catalog');

                // Iterate through each category in the data
                data.categories.forEach(category => {
                    // Create a new div for the category
                    const categoryDiv = document.createElement('div');
                    categoryDiv.classList.add('category');

                    // Add category name to the div
                    categoryDiv.innerHTML = `<h2>${category.category_name}</h2>`;

                    // Iterate through each product in the category
                    category.category_products.forEach(product => {
                        // Create a new div to display product information
                        const productDiv = document.createElement('div');
                        productDiv.classList.add('product');

                        // Add product details to the div
                        productDiv.innerHTML = `
                            <h3>${product.title}</h3>
                            <p>Price: ${product.price}</p>
                            <p>Vendor: ${product.vendor}</p>
                            <img src="${product.image}" alt="${product.title}">
                        `;

                        // Append the product div to the category div
                        categoryDiv.appendChild(productDiv);
                    });

                    // Append the category div to the product catalog div
                    productCatalogDiv.appendChild(categoryDiv);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });