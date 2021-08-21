export const getUsers = () => {
  const url = 'https://randomuser.me/api/?results=15';

  return fetch(url)
    .then(response => response.json())
    .then(dataObject => dataObject.results);
}