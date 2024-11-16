function getElementWidth(content, padding, border) {
    return Number.parseFloat(content) + Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200



const rps = (p1, p2) => {
 
  if (p1 === p2) {
    return 'Draw!';
  }
  if (p1 === 'scissors' && p2 === 'paper') {
    return  'Player 1 won!'
  } else if (p1 === 'rock' && p2 === 'scissors') {
    return  'Player 1 won!'
  } else if (p1 === 'paper' && p2 === 'rock'){
    return  'Player 1 won!'
  }
  return 'Player 2 won!'

}


console.log(rps('scissors', 'paper'));
console.log(rps('rock', 'paper'));
console.log(rps('scissors', 'rock'));
console.log(rps('paper', 'paper'))
