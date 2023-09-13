const XLSX = require('xlsx');

const readFromExcelFile = (fileName) => {
    const workbook = XLSX.readFile(fileName);
    const sheet_name_list = workbook.SheetNames;
    const xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
    return xlData;
};

const fileName = './NodeJs_course_1.xlsx';
const data = readFromExcelFile(fileName);
console.log(data);
