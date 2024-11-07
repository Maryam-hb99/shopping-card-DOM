document.addEventListener("DOMContentLoaded", () => {
    // Select all the plus, minus, delete, and like buttons
    const plusButtons = document.querySelectorAll(".fa-plus-circle");
    const minusButtons = document.querySelectorAll(".fa-minus-circle");
    const deleteButtons = document.querySelectorAll(".fa-trash-alt");
    const likeButtons = document.querySelectorAll(".fa-heart"); 
    const quantities = document.querySelectorAll(".quantity");
    const totalPriceElement = document.querySelector(".total");
    const unitPrices = document.querySelectorAll(".unit-price");
  
    // Function to update the total price
    const updateTotalPrice = () => {
      let total = 0;
      unitPrices.forEach((priceElement, index) => {
        const price = parseFloat(priceElement.textContent.replace(" $", ""));
        const quantity = parseInt(quantities[index].textContent);
        total += price * quantity;
      });
      totalPriceElement.textContent = `${total} $`;
    };
  
    // Handle the "+" button click
    plusButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        let quantity = parseInt(quantities[index].textContent);
        quantities[index].textContent = quantity + 1;
        updateTotalPrice();
      });
    });
  
    // Handle the "-" button click
    minusButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        let quantity = parseInt(quantities[index].textContent);
        if (quantity > 0) {
          quantities[index].textContent = quantity - 1;
          updateTotalPrice();
        }
      });
    });
  
    // Handle the delete button click
    deleteButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        const productCard = button.closest(".card-body"); 
        productCard.remove(); 
  
        updateTotalPrice();
      });
    });
  
    // Handle the like button click
    likeButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        button.classList.toggle("liked");
  
        if (button.classList.contains("liked")) {
          button.style.color = "red";  
        } else {
          button.style.color = "";  
        }
      });
    });
  });
  