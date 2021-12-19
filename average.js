
function average(numbers) {
  if(numbers.lenggth!=Nan){
    return numbers.reduce((p, c)=> p + c, 0) / numbers.length;
  }else return Nan;
}

module.exports = {average};
