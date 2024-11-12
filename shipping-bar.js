window.addEventListener('DOMContentLoaded', () => {
    const shippingBar = document.querySelector('.shipping-bar');
    
    // Trigger the fill animation by setting the width to 100%
    setTimeout(() => {
        shippingBar.style.width = '100%';
    }, 500); // Delay to start animation after 0.5 seconds (optional)
});
