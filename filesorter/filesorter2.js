//  read the content of the file and separate enrollees by insurance company in its own file.
//  sort the contents of each file by last and first name (ascending). 
//  Lastly, if there are duplicate User Ids for the same Insurance Company, then only the record with
//  the highest version should be included. The following data points are included in the file:
// •	User Id (string)
// •	First and Last Name (string)
// •	Version (integer)
// •	Insurance Company (string)


const csvtojson = require("csvtojson");
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
  const jsonArray = await csvtojson().fromFile(csvFilePath)
  jsonArray.sort(compare)
  createCompanyFile(jsonArray)
  // console.log(jsonArray)
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
  const fields = ["Userid","Name","Version","Insurance_Company"]
  const json2csvParser = new Parser({ fields })
  const csv = json2csvParser.parse(obj)
  for (let i = 0; i < obj.length; i++) {
    // console.log(obj[i])
    let filePath=dir + "/" + obj[i]["Insurance_Company"]
    try {
      if (!fs.existsSync(filePath)) {
        console.log("we are exist");
        companies.push(obj["Insurance_Company"])
        fs.appendFileSync(filepath,obj["Name"],(err)=>{
          if(err) throw err
          console.log("file has been saved")
        })
      }
    } catch(err) {
      console.error(err)
    }

  }
}

let deleteDuplicates = () => {

}


convert()
