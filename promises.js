



// Example asynchronous function
function simulateAsyncOperation(success = true) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve("Operation successful!");
        } else {
          reject(new Error("Operation failed."));
        }
      }, 1000); // Simulating an asynchronous operation that takes 1 second
    });
  }
  
  // Using the Promise
  simulateAsyncOperation(true)
    .then((result) => {
      console.log(result);
      return "Next step after successful operation.";
    })
    .then((nextResult) => {
      console.log(nextResult);
    })
    .catch((error) => {
      console.error(error.message);
    });
  