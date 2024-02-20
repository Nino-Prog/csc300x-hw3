document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to dish images but currently not implemented
    const dishes = document.querySelectorAll('.dish img');
    dishes.forEach(dish => {
        dish.addEventListener('click', function() {
            // Display dish description when image is clicked but currently not implemented
            const dishDescription = this.nextElementSibling.innerHTML;
            document.getElementById('dish-description').innerHTML = dishDescription;
        });
    });
});
