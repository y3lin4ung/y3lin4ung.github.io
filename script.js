function encodeBase64() {
    const input = document.getElementById("base64Input").value;
    const result = btoa(input);
    document.getElementById("base64Result").textContent = result;
}

function decodeBase64() {
    const input = document.getElementById("base64Input").value;
    try {
        const result = atob(input);
        document.getElementById("base64Result").textContent = result;
    } catch (error) {
        document.getElementById("base64Result").textContent = "Invalid Base64 input.";
    }
}

function encodeHEX() {
    const input = document.getElementById("hexInput").value;
    let result = "";
    for (let i = 0; i < input.length; i++) {
        const hexChar = input.charCodeAt(i).toString(16).toUpperCase();
        result += hexChar.length === 1 ? "0" + hexChar : hexChar;
    }
    document.getElementById("hexResult").textContent = result;
}

function decodeHEX() {
    const input = document.getElementById("hexInput").value.replace(/\s/g, ''); // Remove spaces
    if (/^[0-9A-Fa-f]+$/.test(input)) {
        let result = "";
        for (let i = 0; i < input.length; i += 2) {
            const hexChar = input.substr(i, 2);
            result += String.fromCharCode(parseInt(hexChar, 16));
        }
        document.getElementById("hexResult").textContent = result;
    } else {
        document.getElementById("hexResult").textContent = "Invalid HEX input.";
    }
}

function encodeHexDump() {
    const input = document.getElementById("hexDumpInput").value;
    let result = "";
    for (let i = 0; i < input.length; i++) {
        const hexChar = input.charCodeAt(i).toString(16).toUpperCase();
        result += hexChar.length === 1 ? "0" + hexChar : hexChar;
        if ((i + 1) % 16 === 0) {
            result += "\n";
        } else {
            result += " ";
        }
    }
    document.getElementById("hexDumpResult").textContent = result;
}

function decodeHexDump() {
    const input = document.getElementById("hexDumpInput").value.replace(/\s/g, ''); // Remove spaces
    if (/^[0-9A-Fa-f]+$/.test(input)) {
        let result = "";
        for (let i = 0; i < input.length; i += 2) {
            const hexChar = input.substr(i, 2);
            result += String.fromCharCode(parseInt(hexChar, 16));
        }
        document.getElementById("hexDumpResult").textContent = result;
    } else {
        document.getElementById("hexDumpResult").textContent = "Invalid HexDump input.";
    }
}

function encodeURL() {
    const input = document.getElementById("urlInput").value;
    const result = encodeURIComponent(input);
    document.getElementById("urlResult").textContent = result;
}

function decodeURL() {
    const input = document.getElementById("urlInput").value;
    try {
        const result = decodeURIComponent(input);
        document.getElementById("urlResult").textContent = result;
    } catch (error) {
        document.getElementById("urlResult").textContent = "Invalid URL input.";
    }
}

// Set the initial tab to "Base64" as active
document.querySelector("nav ul.tabs li.active").addEventListener("click", () => {
    openTab("Base64");
});

function openTab(tabName) {
    const tabs = document.getElementsByClassName("tab-content");
    for (const tab of tabs) {
        tab.classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
}
