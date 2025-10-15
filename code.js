// Fetch products dynamically from FakeStoreAPI
fetch('https://template6-six.vercel.app/api/products')

  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('productContainer');
    container.innerHTML = '';

    // Optional: Filter furniture-like items
    const furniture = data.filter(p =>
      p.category === "jewelery" || p.category === "electronics" || p.category === "home-decoration"
    );

    furniture.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <div class="price">$${product.price}</div>
        <a class="btn-detail" href="product-detail.html?id=${product.id}">Check Detail</a>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error fetching products:", error);
    document.getElementById('productContainer').innerHTML =
      "<p style='color:red; text-align:center;'>Failed to load products 😞</p>";
  });

