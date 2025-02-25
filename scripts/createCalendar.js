document.addEventListener("DOMContentLoaded", () => {
  const calendarBody = document.createElement("div");
  calendarBody.classList.add("calendar-body");

  const calendar = document.querySelector(".calendar");
  calendar.appendChild(calendarBody);

  const prevMonthButton = document.querySelector(".previous-month-button");
  const nextMonthButton = document.querySelector(".next-month-button");
  const yearSelect = document.querySelector(".pick-year__select");
  const monthSelect = document.querySelector(".pick-month__select");

  const currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();

  const formattedCurrentDate = currentDate.toISOString().split("T")[0];

  for (let i = currentYear; i < currentYear + 100; i++) {
    let yearOption = document.createElement("option");
    yearOption.textContent = i;
    yearOption.setAttribute("value", i);
    yearSelect.appendChild(yearOption);
  }

  function generateCalendar(currentMonth, currentYear) {
    calendarBody.innerHTML = "";

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    let daysRow = document.createElement("div");
    daysRow.classList.add("calendar-body__days-row");

    for (let i = 0; i < firstDayOfMonth - 1; i++) {
      let emptyDay = document.createElement("div");
      emptyDay.classList.add("day");
      daysRow.appendChild(emptyDay);
    }

    for (let day = 1; day <= lastDayOfMonth; day++) {
      if (daysRow.children.length === 7) {
        calendarBody.appendChild(daysRow);

        daysRow = document.createElement("div");
        daysRow.classList.add("calendar-body__days-row");
      }

      let dayDiv = document.createElement("div");
      let button = document.createElement("button");
      button.setAttribute("type", "button");

      dayDiv.classList.add("day");

      const formattedDate = `${currentYear}-${String(currentMonth + 1).padStart(
        2,
        "0"
      )}-${String(day).padStart(2, "0")}`;

      button.textContent = day;
      button.setAttribute(
        "data-date",
        `${currentYear}-${currentMonth + 1}-${day}`
      );

      if (formattedDate === formattedCurrentDate)
        button.classList.add("todays-date");

      button.addEventListener("click", (e) => {
        const selectedDate = e.target.getAttribute("data-date");
        console.log(selectedDate);
        document
          .querySelectorAll(".day button")
          .forEach((btn) => btn.classList.remove("selected-date"));

        e.target.classList.add("selected-date");
      });

      dayDiv.appendChild(button);
      daysRow.appendChild(dayDiv);
    }

    if (daysRow.children.length > 0) {
      calendarBody.appendChild(daysRow);
    }

    for (let i = daysRow.children.length; i < 7; i++) {
      let emptyDay = document.createElement("div");
      emptyDay.classList.add("day");
      daysRow.appendChild(emptyDay);
    }
  }

  function updateCalendar() {
    prevMonthButton.disabled = false;
    nextMonthButton.disabled = false;

    currentYear = parseInt(yearSelect.value);
    currentMonth = parseInt(monthSelect.value);
    generateCalendar(currentMonth, currentYear);
  }

  prevMonthButton.addEventListener("click", () => {
    nextMonthButton.disabled = false;

    if (currentYear === 2025 && currentMonth === 0) {
      prevMonthButton.disabled = true;
      return;
    }
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }

    yearSelect.value = currentYear;
    monthSelect.value = currentMonth;

    generateCalendar(currentMonth, currentYear);
  });

  nextMonthButton.addEventListener("click", () => {
    prevMonthButton.disabled = false;

    if (currentYear === 2124 && currentMonth === 11) {
      nextMonthButton.disabled = true;
      return;
    }

    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }

    yearSelect.value = currentYear;
    monthSelect.value = currentMonth;

    generateCalendar(currentMonth, currentYear);
  });

  yearSelect.value = currentYear;
  monthSelect.value = currentMonth + 1;

  yearSelect.addEventListener("change", updateCalendar);
  monthSelect.addEventListener("change", updateCalendar);

  generateCalendar(currentMonth, currentYear);
});
