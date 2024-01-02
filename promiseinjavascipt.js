

// promises in javascript


myPromise
  .then((result) => {
    // Do something with the result
    return modifiedResult;
  })
  .then((modifiedResult) => {
    // Continue processing
    console.log(modifiedResult);
  })
  .catch((error) => {
    // Handle errors in any part of the chain
    console.error(error);
  });
