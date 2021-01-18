let parenthesis = (input) => {

  let stack = []
  let result = ""

  if(!input || input == " ") return "ERROR: no input"

  for (let i = 0; i < input.length; i++) {
    let last = ""

    if (input[i]==="(") stack.push(input[i])

    if (input[i]===")") {
      last = stack.pop()
      if (last !== "(") return false
    }
  }

  stack.length === 0 ? result = true : result = false
  return result
}

module.exports = { parenthesis }
