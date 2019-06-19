let parenthesis = (string) =>{

  let stack = [] //initializing stack for parenths
  let result = ""
  if(!string.length) return "error no input"
  //for loop to search through input string
  for (let i = 0; i < string.length; i++) {
    string[i]==="("?stack.push(string[i]):"" //ternary deciding to push onto stack if left parenth is detected
    string[i]===")"?stack.pop():"" //ternary popping off last stacked element if right parenth is detected
  }

  //ternary deciding if stack length is 0 to return true because they all popped off, and false if anything is left inside
  stack.length === 0 ? result = true : result = false
  return result
}

console.log(parenthesis("((()))"));

// let string = ")))((("
// let string = "((())"
// let string =  "(())"
// let string =  "()()()"
// let string =  "(()())()()"
// (((()((((000))))))
