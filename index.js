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

const buttons = document.querySelectorAll('.timeframe__btn');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const timeframe = button.textContent.toLowerCase();
    updateData(timeframe);

    // Do something to styling (e.g: highlight, bold, etc) [Can be done after styling]
  });
});

function writeText(input, prevTerm) {
  const currentHrs = document.querySelectorAll('.category-card__curr');
  const prevHrs = document.querySelectorAll('.category-card__prev');

  cache.forEach((item, idx) => {
    const timeData = item.timeframes[input];

    currentHrs[idx].textContent = `${timeData.current}hrs`;
    prevHrs[idx].textContent = `${prevTerm} - ${timeData.previous}hrs`;
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

// Want to improve functions
