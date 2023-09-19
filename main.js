function showCategory(category) {
    const productContainer = document.querySelectorAll('.products');
    productContainer.forEach(container =>{
        container.style.display = "none";
    });

    const selectedCategory = document.getElementById(`${category}-products`);
    selectedCategory.style.display = "flex"
}