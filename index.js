var lodash = require('lodash');


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
iterationsCount = 20;
randomSum(iterationsCount);
function randomSum(iterationsCount)
{
	sum = 0;
	for(var i=0;i<iterationsCount;i++)
		sum += getRandomInt(10,50);
	console.log("Sum of random numbers: " + sum);
}