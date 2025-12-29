console.log('Loaded index.js');

// Default value
let selectedTimeframe = 'weekly';

// Cached JSON data
let cache;

async function fetchData() {
  try {
    // Fetch local file
    const response = await fetch('./data.json');

    // See if file exists or if possible to load correctly
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    // Parse JSON data
    const data = await response.json();

    // Use data
    cache = data;
    console.log('Success! Here is your data: ', data);
  } catch (error) {
    console.error('Error loading JSON: ', error);
  }
}
fetchData();

function updateData(timeframe) {
  // Update 'current' hrs

  // Wording changes for different periods on 'prev'
  if (timeframe === 'daily') {
    cache.forEach((element) => {
      console.log(element.timeframes.daily.current);
    });
    // Yesterday - Xhrs
  } else if (timeframe === 'weekly') {
    // Last Week - Xhrs
  } else if (timeframe == 'monthly') {
    // Last Month - Xhrs
  } else {
    // Error
    console.log('Error: timeframe not recognized');
  }
}

// Button onclick function

// function testFunc() {
//   const list = document.querySelectorAll('.category-card__time');
//   const listArray = Array.from(list).map((item) => item.textContent);

//   console.log(listArray);
// }
