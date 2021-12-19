
function average(numbers) {
  if (numbers.length == 0) return NaN;
  
  numbers = numbers.filter((a) => !isNaN(a));
  
  let total = 0;
  for(let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  let avg = total / numbers.length;
  return avg;
}

module.exports = {average};
