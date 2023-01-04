
function addlist(){
  
    document.getElementById('dis').style.display='block';
}
 var count=1;
function content_Add(){

    var span=document.createElement("header")
    var para=document.createElement("p");
    var div=document.createElement("div");

     //adding multiple class 
     div.classList.add('mt-5','change3','todo');
     div.setAttribute("draggable", true);
     
     var Title=document.getElementById('Title').value;
     var Discription=document.getElementById('discription').value;

     if(Title == ""){
        alert("Hey dear your task is empty!");
        return;
     }
     if(Discription == ""){
        alert("Hey dear task discription is empty!");
        return;
     }
    span.textContent=`${count++}. ${Title}`;
    para.textContent=`${Discription}`

    div.append(span,para);
    var div_Element=document.getElementById("appened_Child");
    div_Element.append(div);
    document.getElementById('dis').style.display='none';




const todos= document.querySelectorAll(".todo");


const all_status= document.querySelectorAll(".status");
let draggableTodo = null;

todos.forEach((todo) => {
    //todo.setAttribute("draggable",true);
    todo.addEventListener("dragstart",dragStart);
    todo.addEventListener("dragend",dragEnd);
});
 
console.log("anuj");
function dragStart(){
    draggableTodo=this;
    console.log("dragStart");
}

function dragEnd(){
    draggableTodo="";
    console.log("dragEnd");
}

all_status.forEach((stus)=>{
    stus.addEventListener("dragover",dragOver);
    stus.addEventListener("dragenter",dragEnter);
    stus.addEventListener("dragleave",dragLeave);
    stus.addEventListener("drop",dragDrop);
});

function dragOver(e){
    e.preventDefault();
   console.log("dragOver");
}

function dragEnter(){
    console.log("dragEnter");
}

function dragLeave(){
    console.log("dragLeave");
}

function dragDrop(){
    this.append(draggableTodo);
    console.log("dropped");
}

}











