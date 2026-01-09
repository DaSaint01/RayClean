const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "f6f8f2ae-312d-4ff3-a961-8b32580def86");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Uw bericht is verzonden. Wij contacteren uw zo spoedig  mogelijk.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Er ging iets mis. Gelieve nogmaals te proberen.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});