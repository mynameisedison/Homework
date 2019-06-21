let csvFileSearcher = (file) =>{
  let array = file

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
      // console.log(companyArray);
        let doubleBonus = companyArray.concat(bonus)
        eval("company" + index + "= doubleBonus")
    }
  }
  // loop to go through each company's array
  for (let i = 0; i < companies.length; i++) {
    let companyArray = eval("company" + i)
    //loop to get through each user ID and search for duplicates
    let userIds = []
    for (let i = 0; i < companyArray.length; i+=4) {
      // console.log(userIds);
      if(userIds.includes(companyArray[i])){
        // console.log(companyArray[i]);
        let matchIndex = companyArray.indexOf(companyArray[i])
        companyArray[i+2]>companyArray[matchIndex+2] ? companyArray.splice(matchIndex,4):companyArray.splice(i,4)
      }
      else userIds.push(companyArray[i])
    }
  }


  return(company0)
  // return(company1)
  // return(company2)
  // return 0

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
