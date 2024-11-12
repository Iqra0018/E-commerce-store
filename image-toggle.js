document.querySelectorAll('.image-toggle-btns .toggle-btn').forEach(button => {
    button.addEventListener('click', function () {
        const productImages = this.closest('.product-images');
        const imageIndex = this.getAttribute('data-image');

        // Update active button styling
        productImages.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        // Toggle images
        if (imageIndex === '1') {
            productImages.querySelector('.display-image').style.opacity = '1';
            productImages.querySelector('.product-image-hover').style.opacity = '0';
        } else if (imageIndex === '2') {
            productImages.querySelector('.display-image').style.opacity = '0';
            productImages.querySelector('.product-image-hover').style.opacity = '1';
        }
    });
});

// Set the first button as active on page load
document.querySelectorAll('.image-toggle-btns .toggle-btn[data-image="1"]').forEach(btn => btn.classList.add('active'));
