import axios from 'axios';
import firebaseConfig from '../../api/apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getTerms = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch(reject);
});

const createTerm = (termObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/vocab.json`, termObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/vocab/${response.data.name}.json`, body)
        .then(() => {
          getTerms().then((termArray) => resolve(termArray));
        });
    }).catch(reject);
});

const deleteTerm = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/vocab/${firebaseKey}.json`)
    .then(() => {
      getTerms().then(resolve);
    })
    .catch(reject);
});

const updateTerm = (termObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/vocab/${termObj.firebaseKey}.json`, termObj)
    .then(() => getTerms().then(resolve))
    .catch(reject);
});

const getSingleTerm = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const filterTerms = (userId) => new Promise((resolve, reject) => {
  getTerms(userId)
    .then((termArray) => {
      const typeOfTerm = termArray.filter((term) => term.category);
      resolve(typeOfTerm);
    }).catch(reject);
});

export {
  getTerms, createTerm, deleteTerm, updateTerm, getSingleTerm, filterTerms
};
