const tips = [
    "Add a splash of pasta water to help bind the sauce.",
    "Toast the garlic slowly for maximum flavor.",
    "Finish the pasta in the pan for better coating.",
    "Add a squeeze of lemon juice for brightness.",
    "Top with crushed nuts for a crunchy twist."
  ];
  
  document.getElementById('surpriseBtn').addEventListener('click', function () {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById('tip').textContent = "💡 " + randomTip;
  });
  function searchRecipes() {
    const query = document.getElementById('searchInput').value;
    const resultsDiv = document.getElementById('results');
  
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then(response => response.json())
      .then(data => {
        resultsDiv.innerHTML = ''; // Clear previous results
  
        if (data.meals) {
          data.meals.forEach(meal => {
            const mealDiv = document.createElement('div');
            mealDiv.innerHTML = `
              <h2>${meal.strMeal}</h2>
              <img src="${meal.strMealThumb}" width="200" />
              <p>${meal.strInstructions.substring(0, 200)}...</p>
            `;
            resultsDiv.appendChild(mealDiv);
          });
        } else {
          resultsDiv.innerHTML = '<p>No results found.</p>';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultsDiv.innerHTML = '<p>Something went wrong.</p>';
      });
  }
   