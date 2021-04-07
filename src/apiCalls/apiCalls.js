export const fetchAllMovies = async (i) => {
  const url = `https://api.airtable.com/v0/appMIxUhHGTJZ4ur8/Sheet1?api_key=${i}`;
  const response = await fetch(url);
  if(!response.ok) {
    throw new Error('Something went wrong while trying to get movies....  try again?');
  }
  const data = await response.json();
  return data;
}