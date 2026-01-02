// Default value
let selectedTimeframe = 'weekly';

// Cached JSON data
let cache;

async function fetchData() {
  try {
    const response = await fetch('./data.json');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();

    cache = data;
    console.log('Success! Here is your data: ', data);
  } catch (error) {
    console.error('Error loading JSON: ', error);
  }
}
fetchData();

function writeText(input, prevTerm) {
  // Get current array
  const currentHrs = document.querySelectorAll('.category-card__curr');
  const prevHrs = document.querySelectorAll('.category-card__prev');

  cache.forEach((item, idx) => {
    const timeData = item.timeframes[input];

    currentHrs[idx].innerText = `${timeData.current}hrs`;
    prevHrs[idx].innerText = `${prevTerm} - ${timeData.previous}hrs`;
  });
}

function updateData(timeframe) {
  if (timeframe !== selectedTimeframe) {
    selectedTimeframe = timeframe;
    console.log('Updating data...');

    if (timeframe === 'daily') writeText('daily', 'Yesterday');
    else if (timeframe === 'weekly') writeText('weekly', 'Last Week');
    else if (timeframe == 'monthly') writeText('monthly', 'Last Month');
    else console.log('Error: timeframe not recognized');
  }
}

// Button onclick function
// Do something to styling (e.g: highlight, bold, etc)
