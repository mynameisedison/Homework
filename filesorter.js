let csvFileSearcher = (file) =>{
  let array = file

  let companies = []

  //for loop searches through each user ID in file
  for (let i = 0; i < array.length; i+=4) {

    if(!companies.includes(array[i+3])){
      companies.push(array[i+3])
      // console.log(array.slice(i,i+4));
      //if new company is found, place in new array
      let index = companies.indexOf(array[i+3])
      eval("company" + index + "= array.slice(i,i+4)")
      // console.log(company1);
    }
    //else place entries into file that contains same insurance
    else {
      let index = companies.indexOf(array[i+3])
      let bonus = array.slice(i,i+4)
      let doubleBonus = eval("company" + index).concat(bonus)

      eval("company" + index + "= doubleBonus")
    }
  }


  return company1

  //separate by insurance company into their own file/array
  //sort by last,first name A-Z
  //if any duplicate ID's are found in the same insurance company, delete
  //file data includes User ID, First and last name, version, and insurance company

}

console.log(csvFileSearcher([
'1234','Edison Toole',2,'Farosh',
'2378','Peter Senn',5,'Naydra',
'1243','Amanda Wells',3,'Dinraal',
'2557','Alicia Canada',2,'Farosh',
'2249','James Spader',6,'Naydra']));
