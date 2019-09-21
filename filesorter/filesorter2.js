const csv=require("csvtojson");
const csvFilePath='sampledata.csv'

let convert = async()=>{
  const jsonArray=await csv().fromFile(csvFilePath);
  console.log(jsonArray);
}

// csv()
// .fromFile(csvFilePath)
// .then((jsonObj)=>{
//     console.log(jsonObj);
// })

convert()
