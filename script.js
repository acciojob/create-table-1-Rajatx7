function insert_Row() {
    //Write your code here
	let tab = document.getElementById("sampleTable");
	tab.innerHTML += `<tr><td>Row${c} cell1</td> 
					<td>Row${c} cell2</td></tr> ` 
	c++;
  
}
let c=3;
