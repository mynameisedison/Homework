let parenthesis = (string) =>{

  //initialize stack and result vars
  let stack = []
  let result = ""
  //cases for if there is no input or a space
  if(string === "" || string === " ") return "error no input"
  //for loop to search through input string
  for (let i = 0; i < string.length; i++) {
    //initialize 'last' here because it needs to reset after each iteration
    let last = ""
    //if left parenth is detected, push onto stack
    if (string[i]==="(") stack.push(string[i])
     //if right parenth is detected pop last element off stack and check if it matches
    if (string[i]===")") {
      last = stack.pop()
      if (last !== "(") return false
    }
  }
  //ternary deciding if stack length is 0 to return true because they all popped off, and false if anything is left inside
  stack.length === 0 ? result = true : result = false
  return result
}

module.exports = { parenthesis }
