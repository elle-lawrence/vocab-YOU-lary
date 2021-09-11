import axios from 'axios';
import firebaseConfig from '../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getCategories = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/category.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createCategory = (catObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/category.json`, catObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/category/${response.data.name}.json`, body)
        .then(() => {
          getCategories().then((catArray) => resolve(catArray));
        });
    }).catch(reject);
});

export { getCategories, createCategory };
