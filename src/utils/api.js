
import axios from 'axios';


const utilsApi = user => new Promise((resolve, reject) => {
  axios({ url: 'api/v1/tokens', data: user, method: 'POST' })
    .then((resp) => {
      const token = resp.data.token;
      localStorage.setItem('user-token', token);
      resolve(resp);
    })
    .catch((err) => {
      localStorage.removeItem('user-token');
      reject(err);
    });
});


export default utilsApi;
