console.log('Loaded index.js');

// 1. Read json
async function getData() {
  try {
    // Fetch local file
    const response = await fetch('./data.json');

    // See if file exists or if possible to load correctly
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    // Parse JSON data
    const data = await response.json();

    // Use data
    console.log('Success! Here is your data: ', data);
  } catch (error) {
    console.error('Error loading JSON: ', error);
  }
}

getData();

// 2. Take input, (daily weekly monthly) three choices
// 3. Get back current and previous values depending on choice
// 4. Update DOM with values
