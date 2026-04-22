const display = document.getElementById("display");
const toggleBtn = document.getElementById("toggle");
const historyList = document.getElementById("historyList");
const sound = document.getElementById("clickSound");

// Add value
function appendValue(value) {
    display.value += value;
    playSound();
}

// Clear
function clearDisplay() {
    display.value = "";
}

// Delete
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate
function calculate() {
    try {
        let result = eval(display.value);

        // Save to history
        let item = document.createElement("li");
        item.textContent = display.value + " = " + result;
        historyList.prepend(item);

        display.value = result;
    } catch {
        display.value = "Error";
    }
}

// Sound
function playSound() {
    sound.currentTime = 0;
    sound.play();
}

// Keyboard support
document.addEventListener("keydown", (e) => {
    if (!isNaN(e.key) || "+-*/.".includes(e.key)) {
        appendValue(e.key);
    } else if (e.key === "Enter") {
        calculate();
    } else if (e.key === "Backspace") {
        deleteLast();
    } else if (e.key === "Escape") {
        clearDisplay();
    }
});

// Dark mode toggle
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    toggleBtn.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});