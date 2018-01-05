function Task() {
}

Task.prototype.init = function (textNode) {
    // main frame
    var container = document.createElement("div")
    container.setAttribute('class', 'frame')
    var placeToPutIntoHTML = document.querySelector(".main");
    document.body.appendChild(container, placeToPutIntoHTML);

    // small frame inside main frame with text inside
    var taskViewer = document.createElement("div")
    taskViewer.setAttribute('class', 'small-frame')
    taskViewer.appendChild(textNode)
    container.appendChild(taskViewer);

    // button to remove main frame
    var remover = document.createElement("input")
    remover.setAttribute('type', 'button')
    remover.setAttribute('value', 'delete')
    remover.setAttribute('id', 'removebutton')
    container.appendChild(remover);
    remover.addEventListener("click", function (el) {
        container.parentNode.removeChild(container)

        var qtyOfNewContainersAfterClick = document.getElementsByClassName('frame')
                localStorage.removeItem('frame')
        var result = function() {
            var empty = []
            for (var i = 0; i < qtyOfNewContainersAfterClick.length; i++)
                empty.push(qtyOfNewContainersAfterClick[i].innerText.slice(0, -1))
            return empty
        }
        localStorage.removeItem("input")
        localStorage.setItem('input', JSON.stringify(result()))
   })
}

function addTask() {
    var currentInput = document.getElementById('item').value
    var textNode = document.createTextNode(currentInput)
    var newInput = new Task
    newInput.init(textNode)
    var taskHistory = JSON.parse(localStorage.getItem("input")) || []
    taskHistory.push(currentInput)
    localStorage.setItem('input', JSON.stringify(taskHistory))
    document.getElementById('item').value = ""
}

document.getElementById("addbutton").addEventListener("click", addTask);

function removeAll(){
    localStorage.removeItem("input")
    var qtyOfNewContainersAfterClick = document.getElementsByClassName('frame');
    while(qtyOfNewContainersAfterClick[0])
        qtyOfNewContainersAfterClick[0].parentNode.removeChild(qtyOfNewContainersAfterClick[0]);
  }

document.getElementById("removeAllTasks").addEventListener("click", removeAll);
