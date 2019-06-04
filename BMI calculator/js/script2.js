function calcArea(){
	let w = document.getElementById("weight").value;
    var h = document.getElementById("height").value;
    document.getElementById("answer").value= area;
    var area = w / (h * h);

}
