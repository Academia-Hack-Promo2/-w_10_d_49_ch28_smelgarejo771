
function familia() {
	var table = document.getElementsByTagName('table')[1];
	table.innerHTML = "<tr><th>Firstname</th><th>Lastname</th><th>Edad</th></tr>";

	setTimeout(function(){
		var table = document.getElementsByTagName('table')[1];
		console.log(table)
		table.innerHTML += "<tr><td>Samantha</td><td>Melgarejo</td> <td>1 años</td></tr>"
	},2000)
	setTimeout(function(){
		var table = document.getElementsByTagName('table')[1];
		table.innerHTML += "<tr><td>Willian</td><td>Melgarejo</td><td>52 años</td></tr>"
	},2300)
	setTimeout(function(){
		var table = document.getElementsByTagName('table')[1];
		table.innerHTML += "<td>Elizabeth</td><td>Sanchez</td><td>40 años</td>"
	},2350)
}

function amigos(){

	var table = document.getElementsByTagName('table')[0];
	table.innerHTML = "<tr><th>Firstname</th><th>Lastname</th><th>Edad años</th></tr>";

	setTimeout(function(){
		var table = document.getElementsByTagName('table')[0];
		console.log(table)
		table.innerHTML += "<tr><td>Hector</td><td>Carreño</td> <td>21 años</td></tr>"
	},1000)
	setTimeout(function(){
		var table = document.getElementsByTagName('table')[0];
		table.innerHTML += "<tr><td>Anderson</td><td>Sanchez</td> <td>21 años</td></tr>"
	},1500)
	setTimeout(function(){
		var table = document.getElementsByTagName('table')[0];
		table.innerHTML += "<td>Angelica</td><td>Herrera</td> <td>23 años</td>"
	},2000)
}