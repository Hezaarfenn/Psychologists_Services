export const times = (() => {
  const result = [];

  for (let hour = 8; hour <= 18; hour++) {
    if (hour === 8) {
      result.push("08:30");
    } else if (hour === 18) {
      result.push("18:00", "18:30");
    } else {
      result.push(`${String(hour).padStart(2, "0")}:00`);
      result.push(`${String(hour).padStart(2, "0")}:30`);
    }
  }
  return result;
})();
