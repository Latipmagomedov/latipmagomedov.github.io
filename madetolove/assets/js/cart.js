const cartInput = document.querySelector(".cart-oninput");
const cartPush = document.querySelector(".cart__footer-top-push");
const cartCheck = document.querySelector(".cart__footer-top-check");

cartInput.addEventListener("input", () => {
    cartPush.classList.remove('hidden')
    cartCheck.classList.add('hidden')
});
