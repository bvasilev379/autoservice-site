const bookingForm = document.querySelector("#booking-form");
const formMessage = document.querySelector("#form-message");

if (bookingForm && formMessage) {
    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const customerName = bookingForm.elements.name.value.trim();
        formMessage.textContent =
            `Благодарим, ${customerName}! Това е демо форма и заявката не е изпратена. Свържете се с нас по телефона за потвърждение.`;

        bookingForm.reset();
    });
}
