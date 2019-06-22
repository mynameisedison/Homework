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
      eval("company" + index + "= array.slice(i,i+4)")
    }
    //else place entries into file that contains same insurance
    else {
      let index = companies.indexOf(array[i+3])
      let bonus = array.slice(i,i+4)
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
    //loop to search names
    for (let j = 1; j < companyArray.length; j+=4) {
      //loop searches each character per name, stores full last name
      // for (let k = 0; k < companyArray[j].length; k++) {
        //if space is found, last name follows
        // if(companyArray[j][k]===" "){
          names.push(companyArray[j])
          names.sort()
        // }
      // }
    }
    // loop to search both companyArray names and sorted array of names and find what does not match
    for (let m=0, j = 1; j < companyArray.length; m++, j+=4) {
      if(companyArray[j]!==names[m]){
        let infoPiece = companyArray.splice(j-1,4)
        companyArray.splice(companyArray.indexOf(names[m])-1, 0, infoPiece[0] )
        companyArray.splice(companyArray.indexOf(names[m])-1, 0, infoPiece[1] )
        companyArray.splice(companyArray.indexOf(names[m])-1, 0, infoPiece[2] )
        companyArray.splice(companyArray.indexOf(names[m])-1, 0, infoPiece[3] )
      }
      // for (let k = 0; k < companyArray[j].length; k++) {
        // if(companyArray[j][k]===" "){
          // if(companyArray[j].slice(k+1,) !== names[m]){
            // console.log(companyArray[j].slice(k+1,));
            // companyArray.splice(k-1,4)
          // }
        // }
          // let switchIndex = companyArray.indexOf(names[j])
          // console.log(switchIndex);
          //splice out all data for the person who doesnt match the changed name after names are sorted
          //and splice back in data with matched Index
          // companyArray[i].splice(j+1,) === names[j] ? "":
          // }
      // }
    }
    // console.log(names.sort());
  }



  // return(company0)
  // return(company1)
  // return(company2)
  return([company0,company1,company2])
  return 0

  //separate by insurance company into their own file/array
  //sort by last,first name A-Z
  //if any duplicate ID's are found in the same insurance company, delete and keep higher version
  //file data includes User ID, First and last name, version, and insurance company

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
