# vocab-YOU-lary  


This app is a buildable glossary for terms and definitions you need to remember.

## About the User 
- The ideal user for this application is anyone who works in a feild that has unique terminology for that field.
- They have lots of terms and their definitions that they want to save. 
- The problem this app solves for them is it allows them quickly save the terms and then refernce them when needed.

## Features 
- Create, Delete, Update Terms
- Create Categories


## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [ERD](#https://dbdiagram.io/d/613bff9c825b5b0146fd01ab)
- [FIGMA](#https://www.figma.com/file/IW4jF3GnzCFLYbEXlgFNIZ/MVP?node-id=0%3A1)

## Code Snippet 

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


## Contributors
- [Elle Lawrence](https://github.com/elle-lawrence)
