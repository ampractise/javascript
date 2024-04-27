/*
* Open the google sheet and add data 
* in Settings, set access to View (only read data)
* ID present between /d/ and /edit
* gid is sheet index number or you can use name of the sheet
* Range is give data between mentioned row and col ID 
*/
const SHEET_ID = "15X1J4F24DfayzZfgiYd2_hJv2GHOOD1JIgZCxoLHPa4";
const SHEET_NAME = "Sheet1";
const SHEET_RANGE = "A2:B11";
let sheet_URL =
  "https://docs.google.com/spreadsheets/d/15X1J4F24DfayzZfgiYd2_hJv2GHOOD1JIgZCxoLHPa4/edit#gid=0";
let URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?sheet=${SHEET_NAME}&range=${SHEET_RANGE}`;

fetch(URL)
  .then((res) => res.text())
  .then((rep) => {
    let data = JSON.parse(rep.substring(47).slice(0,-2));
    console.log(data.table.rows);
  })
  .catch((e) => {
    console.log(e);
  });
