var fs = require('fs');
var path = require('path');

//var filteredFileList = []

fs.readdir(process.argv[2], function (err, fileList) {

	if (err) 
		throw err;
	
	if (fileList != null)
	{
		for(var i in fileList)
		{
			if (path.extname(fileList[i]) == '.' + process.argv[3])
			{
				console.log(fileList[i]);
				//filteredFileList.push(fileList[i]);
				//console.log(filteredFileList);
			}
		}
	}
 });

//console.log(filteredFileList);


//Official solution
/*
var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
	list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
			console.log(file)
	})
})
*/