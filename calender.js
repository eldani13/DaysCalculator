function calculateDifference() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
  
    const inputDate = new Date(year, month - 1, day);
    const currentDate = new Date();
  
    const differenceInMilliseconds = Math.abs(currentDate - inputDate);
  
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    const years = Math.floor(differenceInDays / 365);
    const months = Math.floor((differenceInDays % 365) / 30);
    const days = Math.floor((differenceInDays % 365) % 30);
  
    document.getElementById("yearsDifference").textContent = years;
    document.getElementById("monthsDifference").textContent = months;
    document.getElementById("daysDifference").textContent = days;
}
