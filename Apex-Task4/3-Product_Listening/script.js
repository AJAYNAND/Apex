const products = [
  {
    name: "Smartphone",
    category: "electronics",
    price: 18999,
    rating: 4.2,
    image: "Smartphone.jpg"
  },
  {
    name: "T-Shirt",
    category: "fashion",
    price: 199,
    rating: 4.5,
    image: "T-Shirt.jpg"
  },
  {
    name: "Microwave",
    category: "home",
    price: 999,
    rating: 4.0,
    image: "Microwave.jpg"
  },
  {
    name: "Headphones",
    category: "electronics",
    price: 499,
    rating: 4.8,
    image: "Headphones.jpg"
  },
  {
    name: "Sofa",
    category: "home",
    price: 30999,
    rating: 4.3,
    image: "sofa.jpg"
  },
  {
    name: "Jeans",
    category: "fashion",
    price: 399,
    rating: 4.1,
    image: "Jeans.jpg"
  }
];

function displayProducts(productList) {
  const container = document.getElementById('productList');
  container.innerHTML = '';

  productList.forEach(product => {
    container.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">₹${product.price}</p>
        <p class="rating">⭐ ${product.rating}</p>
      </div>
    `;
  });
}

function filterAndSort() {
  const category = document.getElementById('categoryFilter').value;
  const sortOption = document.getElementById('sortOption').value;

  let filtered = [...products];

  if (category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sortOption === 'priceLowHigh') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'priceHighLow') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'ratingHighLow') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

// Initial render
displayProducts(products);
