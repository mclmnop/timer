const inputArray = process.argv.splice(2);
const sorted = inputArray.sort((a, b) => a - b);


const alarm = (hour) => {
  if (Number.isNaN(hour)) {
    console.log('Not a number');
  } else if (hour < 0) {
    console.log('Negative number');
  } else {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, hour);
  }
};

sorted.forEach(element => {
  alarm(element * 1000);
});