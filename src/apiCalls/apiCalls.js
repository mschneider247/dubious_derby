const getRocketData = async () => {
  const url = 'https://api.spacexdata.com/v3/rockets';
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Something went wrong getting your rockets!  Please try again...');
  }
  const data = response.json();
  return data;
};

export default getRocketData;

export const fetchAllProjects = async () => {
  const response = await fetch('https://color-picker-be.herokuapp.com/api/v1/projects');
  const data = await response.json();
  return data;
};