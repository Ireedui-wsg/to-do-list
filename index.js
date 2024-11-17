//var word = document.getElementsByTagName("ol")[0];
// es5 var-> es6 let,const
const input = document.getElementsByTagName('input')[0];
const ol =  document.getElementsByTagName("ol")[0];
const addBtn = document.getElementsByTagName("button")[0];
const resetBtn = document.getElementsByTagName("button")[1];
var colors = ["green","yellow","blue","red","purple"];
// addEventListener -> click, scroll...
// ()=>() -> arrown function/shugaman func
addBtn.addEventListener('click', ()=>{
	//alert("click");
	if(input.value==""){
		alert("Cannot be empty")
	}else{
			let li = document.createElement("li");
		li.innerText = input.value;
		console.log(li);
		ol.append(li);
		// create delete button
		let editBtn = document.createElement("button");
		editBtn.innerHTML = '<i class="bi bi-pencil-square"></i>';
		li.append(editBtn);
		editBtn.className="edit";
		let delBtn = document.createElement("button");
		delBtn.innerHTML = '<i class="bi bi-trash"></i>';
		li.append(delBtn);
		delBtn.className="delete";
		input.value="";
		saveData();
	}
});
// ol click event
ol.addEventListener("click",(e)=>{
	console.log(e.target);
	let liEl = (e.target).parentElement.parentElement;
	if(e.target.className=="bi bi-trash"){
		//(e.target).parentElement.remove();
		liEl.remove();
	}else if(e.target.className=="bi bi-pencil-square"){
		liEl.classList.toggle("checked");
	}
	saveData();
});
function saveData(){
	localStorage.setItem("word",ol.innerHTML);
}
function getData(){
	let getWord = localStorage.getItem("word");
	ol.innerHTML = getWord;
}
// localStorage -> setItem() -> hadgalah, getItem() -> avah;
localStorage.setItem("name","Erdene-Ochir");
let get = localStorage.getItem("name");
console.log(get);
