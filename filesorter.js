let csvFileSearcher = (file) =>{
  let array = file

  let companies = []

  function Company(user) {
  this.user = user;
}

  for (let i = 0; i < array.length; i++) {
    if(!companies.includes(array[3])){
      companies.push(array[3])
      //if new company is found, place in new array
      eval("company" + i +"= array.splice(0,4)")
      console.log(array);
    }
    //else place object in same array as rest of company
    //if company is already found, push onto that array
    else{
      // let bonus = array.slice(0,4)
      // console.log(bonus);
      // console.log(array);
      let index = companies.indexOf(array[3])
      eval("company" + index+".concat(array.splice(0,4))")
    }
  }


  return 

  //separate by insurance company into their own file
  //sort by last,first name A-Z
  //if any duplicate ID's are found in the same insurance company, delete
  //file data includes User ID, First and last name, version, and insurance company

}

console.log(csvFileSearcher(['1234','Edison Toole',2,'Farosh','2378','Peter Senn',5,'Naydra','1243','Amanda Wells',3,'Dinraal','2557','Alicia Canada',2,'Farosh','2249','James Spader',6,'Naydra']));
