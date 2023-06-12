
async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      return (data);
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  function render(data) {
    const container = document.getElementById('container');
  
    data.forEach(item => {
      const div = document.createElement('div');
      div.classList.add('product');
  
      const image = document.createElement('img');
      image.src = item.images[0];
      div.appendChild(image);
  
      const name = document.createElement('p');
      name.classList.add('name');
      name.textContent = `Title: ${item.title}`;
      div.appendChild(name);
  
      const price = document.createElement('p');
      price.textContent = `Price: ${item.price}$`;
      div.appendChild(price);
  
      const rating = document.createElement('p');
      rating.innerHTML = ratingStars(item.rating);
      div.appendChild(rating);
  
      container.appendChild(div);
    
    });
  }
  
  function ratingStars(n) {
    const roundedRating = Math.round(n);
  
    const activeStars = '<span class="fa fa-star active"></span>'.repeat(roundedRating);
    const inactiveStars = '<span class="fa fa-star"></span>'.repeat(5 - roundedRating);
  
    return activeStars + inactiveStars;
  }
  
  const url = "https://dummyjson.com/products";
  fetchData(url)
    .then(data => {
      render(data.products);
    });



  
  