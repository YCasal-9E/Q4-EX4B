function displayProductCategory(){
	var categoryEntry = document.getElementById('categoryEntry').value;
	switch (categoryEntry) {
	case "C":
		document.getElementById('displayCategory').innerHTML="Category: Clothing";
		break;

	case "E":
		document.getElementById('displayCategory').innerHTML="Category: Electronics";
		break;

	case "B":
		document.getElementById('displayCategory').innerHTML="Category: Books";
		break;

	default: 
		alert("Invalid Input");
	}
}