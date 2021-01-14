let parenthesis = (input) => {

  let stack = []
  let result = ""

  if(!input || input == " ") return "ERROR: no input"

  for (let i = 0; i < input.length; i++) {
    let last = ""
    //if left parenth is detected, push onto stack
    if (input[i]==="(") stack.push(input[i])
     //if right parenth is detected pop last element off stack and check if it matches
    if (input[i]===")") {
      last = stack.pop()
      if (last !== "(") return false
    }
  }

  stack.length === 0 ? result = true : result = false
  return result
}

module.exports = { parenthesis }
