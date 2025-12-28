console.log('Loaded index.js');

// Default value
let selectedTimeframe = 'weekly';

// 1. Read json
async function fetchData() {
  try {
    // Fetch local file
    const response = await fetch('./data.json');

    // See if file exists or if possible to load correctly
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    // Parse JSON data
    const data = await response.json();
    testData = data;

    // Use data
    console.log('Success! Here is your data: ', data);
  } catch (error) {
    console.error('Error loading JSON: ', error);
  }
}

fetchData();

function updateData() {}
// 2. Take input, (daily weekly monthly) three choices
// 3. Get back current and previous values depending on choice
// 4. Update DOM with values
