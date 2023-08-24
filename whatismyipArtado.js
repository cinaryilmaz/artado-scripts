if (window.location.pathname === "/search") {
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get('i').replace("+", " ").trim()
        .replace(/[!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@\[\\\]\^_`{\|}~]/g, "").replace(/ +/g, " ");

    const searches = [
        "whats my ip",
        "what is my ip",
        "what my ip",
        "my ip",
    ];

    if (searches.includes(search)) {
        fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                var element = document.createElement("div");
                element.className = "card";
                element.style = "border: 1px solid #bdbdbd; text-transform: none";
                element.innerHTML = `<p>Your IP address is: <code>${data.ip}</code></p>`;

                document.getElementById("web_results").insertBefore(element, document.getElementById("web_results").firstChild);
            });
    }
}