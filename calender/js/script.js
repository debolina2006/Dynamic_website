let currentDate = new Date();

function renderCalendar() {
    const monthYear = document.getElementById("monthYear");
    const datesContainer = document.getElementById("dates");

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    monthYear.innerText = currentDate.toLocaleString("default", {
        month: "long",
        year: "numeric"
    });

    datesContainer.innerHTML = "";

    // Empty spaces
    for (let i = 0; i < firstDay; i++) {
        datesContainer.innerHTML += "<div></div>";
    }

    // Dates
    for (let i = 1; i <= lastDate; i++) {
        const today = new Date();
        const isToday =
            i === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

        const dayDiv = document.createElement("div");
        dayDiv.innerText = i;

        if (isToday) {
            dayDiv.classList.add("today");
        }

        datesContainer.appendChild(dayDiv);
    }
}

// Buttons
document.getElementById("prev").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

document.getElementById("next").addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Initial load
renderCalendar();