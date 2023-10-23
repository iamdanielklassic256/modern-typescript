// Get the HTML element with the ID "year" and assign it to the 'year' variable.
let year: HTMLElement | null
year = document.getElementById("year");
// Get the current year and store it in the 'thisYear' variable.
let thisYear: string
thisYear = new Date().getFullYear().toString();

// Check if the 'year' element exists (i.e., it's not 'null').
if (year) {
	// Set the "datetime" attribute of the 'year' element to the current year.
	year.setAttribute("datetime", thisYear)
	year.textContent = thisYear
}
// If the 'year' element is 'null', nothing happens, and there are no errors.