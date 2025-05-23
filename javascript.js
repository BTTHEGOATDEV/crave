function sendWhatsAppMessage() {
  const name = document.getElementById("name").value || "Customer";
  const phone = document.getElementById("phone").value || "";
  const item = document.getElementById("item").value || "Not specified";
  const quantity = document.getElementById("quantity").value || "1";
  const date = document.getElementById("date").value || "Not specified";
  const notes = document.getElementById("notes").value || "None";

  const message = `Hi! I'd like to place an order from Crave-in:\n\n` +
    `👤 Name: ${name}\n📞 Phone: ${phone}\n🍰 Item: ${item}\n🔢 Quantity: ${quantity}\n📅 Date: ${date}\n📝 Notes: ${notes}`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/2349026738391?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
}
// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('product-modal');
  const modalClose = document.getElementById('modal-close');
  const modalProductName = document.getElementById('modal-product-name');
  const modalSizesList = document.getElementById('modal-sizes-list');

  // Add click listeners to all product cards
  document.querySelectorAll('.product-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      const name = card.dataset.name;
      const sizes = JSON.parse(card.dataset.sizes);

      // Set modal content
      modalProductName.textContent = name;
      modalSizesList.innerHTML = ''; // Clear previous sizes

      sizes.forEach(({size, price}) => {
        const li = document.createElement('li');
        li.textContent = `${size} - ${price}`;
        modalSizesList.appendChild(li);
      });

  const orderButton = document.getElementById('modal-order-button');

orderButton.onclick = () => {
  // Set the value in the order form dropdown
  const orderSelect = document.getElementById('item');
  orderSelect.value = name;

  // Close modal
  modal.classList.remove('show');

  // Scroll smoothly to the order section
  document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
};

      modal.classList.add('show');
    });
  });

  
  modalClose.addEventListener('click', () => {
    modal.classList.remove('show');
  });


  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
});


