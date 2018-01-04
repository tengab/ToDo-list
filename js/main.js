function Frame() {

}

Frame.prototype.init = function () {
    // main frame
    var newDiv = document.createElement("div")
    newDiv.setAttribute('class', 'frame')
    var currentDiv = document.querySelector(".main");
    document.body.appendChild(newDiv, currentDiv);
    // small frame inside main frame with text inside
    var newDiv2 = document.createElement("div")
    var newContent2 = document.getElementById('item').value
    var textNode = document.createTextNode(newContent2)
    newDiv2.setAttribute('class', 'small-frame')
    newDiv2.appendChild(textNode)
    newDiv.appendChild(newDiv2);
    // button to remove main frame
    var newDiv1 = document.createElement("input")
    newDiv1.setAttribute('type', 'button')
    newDiv1.setAttribute('id', 'removeBtn')
    newDiv1.setAttribute('value', 'delete')
    newDiv.appendChild(newDiv1);
    newDiv1.addEventListener("click", function (el) {
        newDiv.parentNode.removeChild(newDiv)
    })
}

function newElement(cf) {
    var newObj = {}
    cf.call(newObj)
    Object.setPrototypeOf(newObj, cf.prototype)
    return newObj
}

function addToHTML() {
    var newInput = newElement(Frame)
    newInput.init()
}

document.getElementById("addbutton").addEventListener("click", addToHTML);



