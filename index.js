var addButton = document.querySelector("#add-task");
var doneButton = document.querySelector("#add-task");
var errorDialouge = document.querySelector(".error");
var errorButton = document.querySelector("#errorChecked");
var closeButton = document.querySelector("#close");
var containerItem = document.querySelector(".container-items");
closeButton.addEventListener("click", function () {
    window.close();
})
addButton.addEventListener("click", function () {
    var input = document.querySelector("input");
    if (input.style.visibility == "visible") {
        input.style.visibility = "hidden";
        containerItem.style.filter = "blur(0px)";
        if (document.querySelector("input").value.length == 0) {
            errorDialouge.style.visibility = "visible";
            errorButton.addEventListener("click", function () {
                errorDialouge.style.visibility = "hidden";
                doneButton.innerHTML = "+";
            })
        }
        else {
            doneButton.innerHTML = "+";
            var paragraph = document.createElement("p");
            paragraph.classList.add("paragraph");
            containerItem.append(paragraph);
            var list = document.querySelector(".work");
            paragraph.innerHTML = list.value;
            list.value = "";
            paragraph.addEventListener("click", function () {
                if (paragraph.style.textDecoration == "line-through") {
                    paragraph.style.textDecoration = "none";
                    paragraph.style.color = "black";

                }
                else {
                    paragraph.style.textDecoration = "line-through";
                    paragraph.style.color = "red";
                }

            })
            paragraph.addEventListener("dblclick", function () {
                paragraph.style.cursor = 'pointer';
                paragraph.remove();
            })
        }

    }
    else {
        doneButton.innerHTML = "✓";
        input.style.visibility = "visible";
        containerItem.style.filter = "blur(5px)";
    }
    // window.close();

})