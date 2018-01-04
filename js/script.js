function SnowFlake(){
    //this.img = 'https://clipartion.com/wp-content/uploads/2015/11/ms-gilberts-crew-january-2.png'
    this.element = null
    this.fallInterval = null
}

SnowFlake.prototype.init = function (x, y) {
    var newDiv = document.createElement("div")
    var newContent = document.createTextNode('lorem ipsum')
    newDiv.setAttribute('class', 'frame')
    newDiv.appendChild(newContent); //wkladamy text w nowy element
    var currentDiv = document.querySelector(".main"); //szukamy odniesienia gdzie bedziemy wstawiac nowy stworzony elelement
    document.body.insertBefore(newDiv, currentDiv); //wstawia element

    var newDiv1 = document.createElement("button")
    var newContent1 = document.createTextNode('DELETE')
    newDiv1.setAttribute('type', 'button')
    newDiv1.setAttribute('id', 'removeBtn')
    newDiv1.appendChild(newContent1)
    newDiv.appendChild(newDiv1); //wkladamy text w nowy element
    var currentDiv1 = document.querySelector(".frame"); //szukamy odniesienia gdzie bedziemy wstawiac nowy stworzony elelement
    document.body.insert(newDiv1, currentDiv1); //wstawia element
    this.element = newDiv
}

function ourOunNew(constructorFunction){
    var newObj = {}
    constructorFunction.call(newObj)
    Object.setPrototypeOf(newObj, constructorFunction.prototype)
    return newObj
}
var addBtn = document.querySelector('#addButton');
addBtn.addEventListener(
    'click',
    function(event){
        ourOunNew(SnowFlake).init(0, 0)
    }
)
SnowFlake.prototype.destroy = function () {
        this.element.remove()
    this.element = null
    this.fallInterval = null
}

function destroy(constructorFunction){
    var deleteFrame = document.querySelector('.frame')
    constructorFunction.remove(deleteFrame)
    return deleteFrame
}
var removeButton = document.querySelector('#removeBtn');
removeButton.addEventListener(
    'click',
    function(event){
        destroy(SnowFlake).destroy()
    }
)
var removeButton = document.querySelector('#removeButton');
removeButton.addEventListener(
    'click',
    function(event){

    }
)






// function addElement(){
//     var newDiv = document.createElement("div"); // tworzymy element
//     var newContent = document.createTextNode("Hi there!"); // tworzymy text ktory ma wypelniac nowy element
//     newDiv.appendChild(newContent); //wkladamy text w nowy element
//     var currentDiv = document.querySelector(".main"); //szukamy odniesienia gdzie bedziemy wstawiac nowy stworzony elelement
//     document.body.insertBefore(newDiv, currentDiv); //wstawia element
// }
// addElement();