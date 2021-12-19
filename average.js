
function average(numbers) {
  if (numbers.length == 0) return NaN;
  
  numbers = numbers.filter((a) => !isNaN(a));
  
  let total = 0;
  for(let i = 0; i < grades.length; i++) {
    total += grades[i];
  }
  let avg = total / grades.length;
  return avg;
}

module.exports = {average};
