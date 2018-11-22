//requiring path and fs modules
const path = require('path');
const fs = require('fs');

 var folderModule = {
     folderReaderAsync : function (folderPath) {
         var listOfFiles = [];
        //joining path of directory 
        const directoryPath = folderPath;//path.join(__dirname, 'Documents');
        //passsing directoryPath and callback function
        fs.readdir(directoryPath, function (err, files) {
            //handling error
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            } 
            //listing all files using forEach
            files.forEach(function (file) {
                // Do whatever you want to do with the file
                listOfFiles.push(files);
            });
        });
        console.log('Success files.' + listOfFiles);
        return listOfFiles;
         },
         folderReaderSync : function (folderPath) {
            var listOfFiles = [];
            console.log(folderPath);
           //joining path of directory
           const directoryPath = folderPath == "" ?"/home/siddharthdwivedi/Documents":folderPath;//path.join(__dirname, 'Documents');
           //passsing directoryPath and callback function
           var filesList=fs.readdirSync(directoryPath);
           //listing all files using forEach
           filesList.forEach(function (file) {
            // Do whatever you want to do with the file
            listOfFiles.push(file);
            //console.log(file); 
            });
           console.log('Success files.' + listOfFiles +" --- " + listOfFiles.length);
           return listOfFiles;
            }
};

 module.exports = folderModule