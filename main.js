const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const phone = document.getElementById('phone').value;
    const phoneError = document.getElementById('phone-error');
    const successMessage = document.getElementById('success-message');

    // Clear old messages
    phoneError.textContent = "";
    successMessage.textContent = "";

    // Validate phone number (10 digits)
    if (!phoneIsValid(phone)) {
        phoneError.textContent = "Please enter a valid phone number (10 digits).";
        return; // stop form submission
    }

    // Show success message
    successMessage.textContent = "Form submitted successfully!";

    // Reset form fields
    form.reset();
});

function phoneIsValid(phone) {
    // Allows only 10 digits (e.g., 1234567890)
    return /^\d{10}$/.test(phone);
}