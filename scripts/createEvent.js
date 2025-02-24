document.addEventListener("DOMContentLoaded", () => {
  const calendarBody = document.createElement("div");
  calendarBody.classList.add("calendar-body");
  const calendar = document.querySelector(".calendar");
  calendar.appendChild(calendarBody);

  const prevMonthButton = document.querySelector(".previous-month-button");
  const nextMonthButton = document.querySelector(".next-month-button");
  const yearSelect = document.querySelector(".pick-year__select");
  const monthSelect = document.querySelector(".pick-month__select");

  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();

  for (let i = currentYear; i < currentYear + 100; i++) {
    let yearOption = document.createElement("option");
    yearOption.textContent = i;
    yearSelect.appendChild(yearOption);
  }

  function generateCalendar(currentMonth, currentYear) {
    calendarBody.innerHTML = "";

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    console.log(firstDayOfMonth + " " + lastDayOfMonth);
    console.log(currentMonth);

    let daysRow = document.createElement("div");
    daysRow.classList.add("calendar-body__days-row");

    for (let i = 0; i < firstDayOfMonth; i++) {
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

      button.textContent = day;
      button.setAttribute(
        "data-date",
        `${currentYear}-${currentMonth + 1}-${day}`
      );

      dayDiv.appendChild(button);
      daysRow.appendChild(dayDiv);
    }

    if (daysRow.children.length > 0) {
      calendarBody.appendChild(daysRow);
    }
  }

  function updateCalendar() {
    currentYear = parseInt(yearSelect.value);
    currentMonth = parseInt(monthSelect.value) - 1;
    generateCalendar(currentMonth, currentYear);
  }

  prevMonthButton.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }

    yearSelect.value = currentYear;
    monthSelect.value = currentMonth + 1;

    generateCalendar(currentMonth, currentYear);
  });

  nextMonthButton.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }

    yearSelect.value = currentYear;
    monthSelect.value = currentMonth + 1;

    generateCalendar(currentMonth, currentYear);
  });

  yearSelect.value = currentYear;
  monthSelect.value = currentMonth + 1;

  yearSelect.addEventListener("change", updateCalendar);
  monthSelect.addEventListener("change", updateCalendar);

  generateCalendar(currentMonth, currentYear);
});
