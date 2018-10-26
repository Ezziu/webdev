var database = [
	{
		username: "Bill",
		password: "2big2bell"
	}
];

var newsfeed = [
	{
		username: null,
		timeline: null
	},
	{
		username: null, 
		timeline: null
	},
	{
		username: null,
		timeline: null
	}
];

function logger(){


var usernameP = prompt("User:");
var passwordP = prompt("password:");


function isValid(username, password){
	for (i=0; i < database.length; i++){
		if (database[i].username === username &&
           database[i].password === password){
           	alert("correct");
			return true;
        	};
    	};
};

function logIn (username, password){
	if (isValid(username, password) === true){
		console.log(newsfeed);
		}
	else 
		alert("Wrong username or password!")
    	
	};

logIn(usernameP, passwordP);

};

logger();