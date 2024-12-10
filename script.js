// Task 1

function randomPromise() { 
  return new Promise((resolve, reject) => {
  let delay = Math.floor(Math.random() * 2000) + 1000;
  let outcome = Math.random() < 0.5;
  let seconds = Math.floor(delay / 1000);
  setTimeout(() => {
  if (outcome) {
    resolve(`Resolved (Time took: ${seconds} second)`);
  } else {
    reject(`Rejected (Time took: ${seconds} second)`);
  }
 }, delay);
  
});
}
randomPromise()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

function RandomDelayPromise(taskname) {
  return new Promise((resolve) => {
    let delay = Math.floor(Math.random() * 2000) + 1000;
    let seconds = Math.floor(delay / 1000);
    setTimeout(() => {
      resolve(`${taskname} Resolved after ${seconds} seconds`);
    }, delay);
  });
}

// Task 2

Promise.all([
  RandomDelayPromise(`Task 2, 1st Promise:`),
  RandomDelayPromise(`Task 2, 2nd Promise:`),
  RandomDelayPromise(`Task 2, 3rd Promise:`),
])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => console.log(error));

// Task 3

Promise.race([
  RandomDelayPromise(`Task 3, 1st Promise is faster:`),
  RandomDelayPromise(`Task 3, 2nd Promise is faster:`),
])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error));

// Task 4

function task4(taskname) {
  return new Promise((resolve, reject) => {
    let delay = Math.floor(Math.random() * 3000) + 1000;
    let outcome = Math.random() < 0.5;
    let seconds = Math.floor(delay / 1000);
    setTimeout(() => {
      if (outcome) {
        resolve(`${taskname}: Resolved, after ${seconds} seconds`);
      } else {
        reject(`${taskname}: Rejected, after ${seconds} seconds`);
      }
    }, delay);
  });
}

Promise.allSettled([
  task4(`Task 4, 1st Promise`),
  task4(`Task 4, 2nd Promise`),
  task4(`Task 4, 3rd Promise`),
  task4(`Task 4, 4th Promise`),
]).then((results) => {
  const output = [];

  results.forEach((result) => {
    if (result.status === "fulfilled") {
      output.push(result.value);
    } else {
      output.push(result.reason);
    }
  });

  console.log(output);
});
