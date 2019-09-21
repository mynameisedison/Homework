const csv = require("csvtojson");
const { Parser } = require('json2csv');
var file = require('file-system');
var fs = require('fs');
const csvFilePath='sampledata.csv'
const dir = './companies'

let names = []
let companies = []

if (!fs.existsSync(dir)){
  fs.mkdirSync(dir)
}

let convert = async() => {
  const jsonArray=await csv().fromFile(csvFilePath)
  jsonArray.forEach(e=>createCompanyFile(e))
  jsonArray.sort(compare)
  // console.log(jsonArray);
}

let compare = (nameOne, nameTwo) => {
  var splitOne = nameOne["Name"].split(" ")
  var splitTwo = nameTwo["Name"].split(" ")
  var lastOne = splitOne[splitOne.length - 1]
  var lastTwo = splitTwo[splitTwo.length - 1]

  if (lastOne < lastTwo) return -1
  if (lastOne > lastTwo) return 1
  return 0
}

let createCompanyFile = (obj) => {
  let filepath=dir + "/" + obj["Insurance_Company"]
  if(!companies.includes(obj["Insurance_Company"])){
    companies.push(obj["Insurance_Company"])
    fs.appendFileSync(filepath,obj["Name"],(err)=>{
      if(err) throw err
      console.log("file has been saved");
    })
    // console.log(companies);
  }
  // else fs.appendFile(filepath,obj["Name"],(err) => {
  // if (err) throw err;
  // console.log('appended to file!');
// });
}


convert()
