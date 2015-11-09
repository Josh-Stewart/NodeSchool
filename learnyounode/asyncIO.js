var fs = require('fs');

var bytesRead = fs.readFile(process.argv[2], 'utf8', function (err, data) {
	if (err) 
		throw err;
	
  	//count newlines using a regex
	var matches = data.match(/\n/g);
	if (matches != null)
	{
		console.log(matches.length);
	}
  
});