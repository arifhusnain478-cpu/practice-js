let boxes= document.getElementsByClassName("box")
console.log(boxes)
for(let i=0; i<boxes.length;i++){
    if(i===1){
        boxes[i].style.color="red"
        boxes[i].style.backgroundColor="green"
    }
}


// let boxesn=document.querySelectorAll(".box")
// console.log(boxesn)
// boxesn.forEach(
//     function(value ,index){
//         if(index%2===0){
//         value.style.color="green"
//         }else{
//         value.style.color="red"
//     }
// }
// )
let boxesn=document.querySelectorAll(".box")
console.log(boxesn)
boxesn.forEach(
    function(value ,index){
        if(index%2===0){
        value.style.backgroundColor="yellow"
        }else{
        value.style.backgroundColor="black"
        value.style.color="white"
    }
}
)

//   nodes 
 
let first=boxes[0].children      
// childern only gives you tag inside
let firstx=boxes[0].childNodes
// childnodes gives you even sapce  , text , comment  ,and text 
console.log(first)
console.log(firstx)

// 
let num =document.getElementsByClassName("box")
console.log(num.length)
 let num_text= num[0].textContent
 console.log(num_text)

//  
num[1].textContent="hello world"
num[2].style.backgroundColor="blue"
//  
num[0].style.color="red"
num[0].style.fontSize="40px"
num[0].innerHTML="<h2>hello there sir </h2>"


// DOM creation and removal methods 🔧


// Create a new <p> element with the text "New paragraph added!"
// Then append it inside the #container at the end.
let store =document.createElement("p")
store.innerText="New paragraph added!"
 let container= document.getElementById("container")
 container.appendChild(store)



//  Create a new <h2> element with the text "Dynamic Heading" and add it before the element with the ID "container".
let storeH =document.createElement("h2")
storeH.innerText="Dynamic Heading"
container.before(storeH)


// 🧩 Goal:
// Create a new <div> with the text "Inserted Between!" and place it between two existing elements — for example, between your <h2> (the dynamic heading) and #container.


let storeDiv= document.createElement("div")
storeDiv.innerHTML="<h3>Inserted Between!</h3>."
storeH.after(storeDiv)


// 🎯 Goal 5:
// Replace the <div> you just created (storeDiv) with a new paragraph element that says:

// "I have replaced the inserted div!"


let storeNewP=document.createElement("p")
storeNewP.innerText="I have replaced the inserted div!"

document.body.replaceChild(storeNewP,storeDiv)