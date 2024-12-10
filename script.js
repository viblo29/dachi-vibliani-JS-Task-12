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

function RandomDelayPromise() {
  return new Promise((resolve) => {
    let delay = Math.floor(Math.random() * 2000) + 1000;
    let seconds = delay / 1000;
    setTimeout(() => {
      resolve(`Resolved after ${seconds} seconds`);
    }, delay);
  });
}

Promise.all([RandomDelayPromise(), RandomDelayPromise(), RandomDelayPromise()])
  .then((results) => {
    console.log(`Task 2: ${results}`);
  })
  .catch((error) => console.error(error));

Promise.race([RandomDelayPromise(), RandomDelayPromise()])
  .then((result) => {
    console.log(`Task 3 ${result}`);
  })
  .catch((error) => console.log(error));



function randomTask4() {
    return new Promise((resolve) => {
      let delay = Math.floor(Math.random() * 2000) + 1000;
      let outcome = Math.random() < 0.5;
      if (outcome) {
        resolve(`Resolved`);
      } else {
        reject(`Rejected`);
      }
    });
  }

