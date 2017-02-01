

function createToDoItem(toDoList, toDoValue) {
	var toDoItem = document.createElement("li");
	var textContainer = document.createElement("span"); 

	
	toDoItem.classList.add("todo-item");

	toDoList.appendChild(toDoItem);

	var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.value = 1;
            checkbox.name = "todo[]";
        
        toDoItem.appendChild(checkbox);
        textContainer.innerHTML = toDoValue;
        toDoItem.appendChild(textContainer);

    var deleteButton = document.createElement("button");
    	toDoItem.appendChild(deleteButton);
    	deleteButton.innerHTML = " X ";
    	

	checkbox.addEventListener("click", done);
	deleteButton.addEventListener("click", deleteItem);
	updateCounter();

}

// Give the list a Done class
function done() {
	var listItem = this.parentElement;
	listItem.classList.toggle("done");

	updateCounter();
}

function createThreeButtons() {
	var markAll = document.createElement("button");
	var mAll = document.querySelector(".mark-all");
    	mAll.appendChild(markAll);
    	markAll.innerHTML = " Mark all ";

    var showAll = document.createElement("button");
	var sAll = document.querySelector(".mark-all");
    	sAll.appendChild(showAll);
    	showAll.innerHTML = " Show all ";

    var deleteAll = document.createElement("button");
	var dAll = document.querySelector(".mark-all");
    	dAll.appendChild(deleteAll);
    	deleteAll.innerHTML = " Delete all ";

    	markAll.addEventListener("click", markAllDone);
    	showAll.addEventListener("click", showHide);
		deleteAll.addEventListener("click", deleteAllButtton);

    	
    	function markAllDone() {
			  var allItems = document.getElementsByTagName('input');
			  for( i=0; i < allItems.length; i++) {
			    	allItems[i].checked == 'checkbox'; 
			      	console.log(" hey ");
    			}
  			}

  		function showHide() {
	        var doneItems = document.getElementsByClassName("done");
	        console.log(doneItems);	

	        for(var i=0;i< doneItems.length;i++) {
	            doneItems[i].classList.toggle("hidden");
	        }
        };
		

		function deleteAllButtton() {
		    var doneItems = document.getElementsByClassName("done");
		    console.log(doneItems);
			
			for(var i=0;i< doneItems.length; ++i) {
	        	doneItems[i].parentNode.removeChild(doneItems[i]);
	       		 }
	    }
     
}




function updateCounter() {
	var numberDone = document.querySelectorAll(".done").length;
	var totalItems = document.querySelectorAll(".todo-item").length;
	var counterComplete = document.querySelector(".counter p");

	counterComplete.innerHTML = numberDone + "/" + totalItems + " Completed";

}


function deleteItem(){
	var listItem = this.parentElement;
	listItem.parentNode.removeChild(listItem);

	updateCounter();

}


function toggleListVisibility(toDoList) {
	var listArea = document.querySelector(".list-area");

	if(toDoList.children.length >= 1) {
		listArea.classList.remove("hidden");
	} else{
		listArea.classList.add("hidden");
	}
}




window.onload = function () {
	var form = document.querySelector("form");
	form.addEventListener("submit", function(e) {
		e.preventDefault();

		var toDoList = document.querySelector(".todo-list");
		var formInput = document.querySelector("#item-input");
		var inputValue = formInput.value;

		createToDoItem(toDoList, inputValue);
		toggleListVisibility(toDoList);

		formInput.value = "";

	});

	createThreeButtons();
}



