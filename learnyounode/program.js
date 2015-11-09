var fs = require('fs');

//read file into buffer
var fileContentsBuffer = fs.readFileSync(process.argv[2]);

//convert to a string
var str = fileContentsBuffer.toString();

//count newlines using a regex
var matches = str.match(/\n/g);
if (matches != null)
{
	console.log(matches.length);
}