let randomPromise = new Promise((resolve, reject) => {
  let delay = Math.floor(Math.random() * 2000) + 1000;
  let outcome = Math.random() < 0.5;
  if (outcome) {
    resolve(`Resolved`);
  } else {
    reject(`Rejected`);
  }
});
randomPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

function RandomDelayPromise(taskname) {
  return new Promise((resolve) => {
    let delay = Math.floor(Math.random() * 2000) + 1000;
    let seconds = delay / 1000;
    setTimeout(() => {
      resolve(`${taskname} Resolved after ${seconds} seconds`);
    }, delay);
  });
}

Promise.all([RandomDelayPromise(`Task 2, 1st Promise:`), RandomDelayPromise(`Task 2, 2nd Promise:`), RandomDelayPromise(`Task 2, 3rd Promise:`)])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => console.log(error));

Promise.race([RandomDelayPromise(`Task 3, 1st Promise:`), RandomDelayPromise(`Task 3, 2nd Promise:`)])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));



function randomTask4(taskname) {
    return new Promise((resolve,reject) => {
      let delay = Math.floor(Math.random() * 2000) + 1000;
      let outcome = Math.random() < 0.5;
      if (outcome) {
        resolve(`Resolved`);
      } else {
        reject(`Rejected`);
      }
    });
  }

Promise.all([randomTask4(`Task 4, 1st Promise:`),randomTask4(),randomTask4(),randomTask4()])
.then((results) => {
    console.log(results);
  })
  .catch((error) => console.log(error));