let parenthesis = (string) =>{

  let stack = [] //initializing stack for parenths
  let result = ""

  if(string === "" || string === " ") return "error no input"
  //for loop to search through input string
  for (let i = 0; i < string.length; i++) {
    let last = ""
    //if statement deciding to push onto stack if left parenth is detected
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

console.log(parenthesis("(((()((((000)))))))"));

// let string = ")))((("
// let string = "((())"
// let string =  "(())"
// let string =  "()()()"
// let string =  "(()())()()"
// (((()((((000))))))
