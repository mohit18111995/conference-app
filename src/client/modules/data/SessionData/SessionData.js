let URL = '/api/sessions';
let sessions = [];
export const getSessions = () => fetch(URL)
  .then(response => {
    if (!response.ok) {
      console.log("error");
      throw new Error('No response from server');
    }
    return response.json();
  })
  .then(result => {
    sessions = result.data;
    return sessions;
  });

