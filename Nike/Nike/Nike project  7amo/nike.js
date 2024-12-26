// Script for interactivity
const cartCountElement = document.getElementById("cart-count");
const addToCartButtons = document.querySelectorAll(".add-to-cart");
let cartCount = 0;
let totalPrice = 0;

// Add products to cart and update count
addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        cartCount++;
        cartCountElement.textContent = cartCount;

        const productElement = event.target.closest(".product");
        const price = parseInt(productElement.getAttribute("data-price"));
        totalPrice += price;

        alert(AddedcartCount, TotaltotalPrice);
    })
});

// Scroll back to top functionality
const scrollToTopButton = document.createElement("button");
scrollToTopButton.textContent = "⬆ Back to Top";
scrollToTopButton.style.position = "fixed";
scrollToTopButton.style.bottom = "20px";
scrollToTopButton.style.right = "20px";
scrollToTopButton.style.padding = "10px 15px";
scrollToTopButton.style.backgroundColor = "#000";
scrollToTopButton.style.color = "#fff";
scrollToTopButton.style.border = "none";
scrollToTopButton.style.borderRadius = "5px";
scrollToTopButton.style.cursor = "pointer";
scrollToTopButton.style.display = "none";
document.body.appendChild(scrollToTopButton);

// Show the button when user scrolls down
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

// Scroll to top when button clicked
scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
function flipCard(card){
    card.classlist.toggle('flipped');
}