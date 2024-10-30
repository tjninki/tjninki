// script.js

function calculateDuration(startDate) {
  const now = new Date();
  const years = now.getFullYear() - startDate.getFullYear();
  const months = now.getMonth() - startDate.getMonth();
  const days = now.getDate() - startDate.getDate();

  let totalYears = years;
  let totalMonths = months;
  let totalDays = days;

  // Adjust the counts if the current month/day is less than the start month/day
  if (totalDays < 0) {
      totalMonths--;
      const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      totalDays += lastMonth.getDate();
  }
  if (totalMonths < 0) {
      totalYears--;
      totalMonths += 12;
  }

  return { totalYears, totalMonths, totalDays };
}

const startDate = new Date('2022-10-31'); // Start date: October 31, 2022
const duration = calculateDuration(startDate);
const durationText = ` WE SPENT: ${duration.totalYears} YEARS, ${duration.totalMonths} MONTHS, AND ${duration.totalDays} DAYS TOGETHER.`;
document.getElementById('date').innerText = durationText;
