//This program searches a CSV file (an array in this case) filled with customer values
//The values get sorted into a separate file/array according to what company they belong to
//then, the arrays are checked for duplicate names/user IDs and only the higher version is kept
//then, the arrays sort their valus by alphabetic name order and keeps all adjacent data correct.
//could not get to sort by last name, so I left the full name and has it sort by that


let csvFileSearcher = (array) =>{
  //array to count how many companies exist
  let companies = []

  //for loop searches through each user ID in file
  for (let i = 0; i < array.length; i+=4) {
    //if the list of companies does not include the company name, add it to the list
    //and create array to hold CSV for that company
    if(!companies.includes(array[i+3])){
      companies.push(array[i+3])
      //if new company is found, place in new array
      let index = companies.indexOf(array[i+3])
      //creating new arrays dynamically when new insurance companies are found, and adding that data entry to it
      eval("company" + index + "= array.slice(i,i+4)")
    }
    //else place entries into file that contains same insurance
    else {
      //index stores companyArray value so we can access each new array
      let index = companies.indexOf(array[i+3])
      //bonus takes the slice of data we want for an entire person's entry
      let bonus = array.slice(i,i+4)
      //sets companyArray to the current dynamic new array
      let companyArray = eval("company" + index)
      //this was the best way I found to concat these dynamic arrays
      let doubleBonus = companyArray.concat(bonus)
      eval("company" + index + "= doubleBonus")
    }
  }
  // loop to go through each company's array
  for (let i = 0; i < companies.length; i++) {
    //since my arrays are dynamically named, I must do this to manipulate them
    let companyArray = eval("company" + i)
    //array to store userIDs so we can search through them to find a match
    let userIds = []
    let names = []
    //loop to get through each user ID and search for duplicates
    for (let j = 0; j < companyArray.length; j+=4) {
      //if current userID matches one already in the array, we have a match
      if(userIds.includes(companyArray[j])){
        let matchIndex = companyArray.indexOf(companyArray[j])
        //ternary deciding which set of items to get rid of by higher version number
        companyArray[j+2]>companyArray[matchIndex+2] ? companyArray.splice(matchIndex,4):companyArray.splice(j,4)
      }
      else userIds.push(companyArray[j])
    }
    //loop to search and sort full names
    for (let j = 1; j < companyArray.length; j+=4) {
      names.push(companyArray[j])
      names.sort()

    }
    // loop to search both companyArray names and sorted array of names and find what does not match
    for (let m=0, j = 1; j < companyArray.length; m++, j+=4) {
      //if name in companyArray does not match alphabetized name in names, reorder companyArray to match names array
      if(companyArray[j]!==names[m]){
        //infoPiece holds the spliced out data from unmatched alphabetic order
        let infoPiece = companyArray.splice(j-1,4)
        //must splice info back in one by one because if it's done in one go, it puts an array inside the companyArray
        companyArray.splice(companyArray.indexOf(names[m])-1, 0, infoPiece[0] )
        companyArray.splice(companyArray.indexOf(names[m])-1, 0, infoPiece[1] )
        companyArray.splice(companyArray.indexOf(names[m])-1, 0, infoPiece[2] )
        companyArray.splice(companyArray.indexOf(names[m])-1, 0, infoPiece[3] )
      }
    }
  }
  //same amount of arrays as companies, so we can return however many there are in reality
  return([company0,company1,company2])
}

console.log(csvFileSearcher([
'1234','Edison Toole',2,'Farosh',
'2378','Peter Senn',5,'Naydra',
'1243','Amanda Wells',3,'Dinraal',
'2557','Alicia Canada',2,'Farosh',
'2249','James Spader',6,'Naydra',
'1243','Amanda Downey',4,'Dinraal',
'1234','Edison Boole',17,'Farosh',
'2378','Peter Senn',5,'Farosh']));
