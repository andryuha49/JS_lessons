var users = [
    {name : 'user1', age: 16},
    {name: 'user2', age:20},
    {name: 'user3', age:30}	
];

var table = document.createElement('table');
// add style
table.style.border = '1px solid blue';
// create header
var header = table.createTHead();
var headerRow = header.insertRow(0);    
// add Name cell
var hederCellName = headerRow.insertCell(0);
hederCellName.innerText = 'Name'
// add Age cell
var hederCellName = headerRow.insertCell(1);
hederCellName.innerText = 'Age'

if(users.length > 0){
	// create body
	var body = table.createTBody();
	
	for(var i = 0; i < users.length; i++){
		var row = body.insertRow(i); 
		var cellName = row.insertCell(0);
		cellName.style.border = '1px solid blue'
		cellName.innerText = users[i].name;	
		
		var cellAge = row.insertCell(1);
		if (users[i].age >= 18) {
			cellAge.style.backgroundColor = 'green'			
		} else {
			cellAge.style.backgroundColor = 'red'		
		}

		cellAge.innerText = users[i].age;				
	}
}
document.write(table.outerHTML);