document.getElementById("whatsappForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("input1").value.trim();
    const mensaje = document.getElementById("textarea1").value.trim();

    if (!nombre || !mensaje) {
        alert("Por favor, completá todos los campos.");
        return;
    }

    const telefono = "5491140305098"; // sin el "+"
    const texto = `Hola, soy ${nombre}. ${mensaje}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank"); // abre WhatsApp en una nueva pestaña
});