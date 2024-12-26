let ul = document.getElementById("main");
let btnAdd = document.getElementById("add");

// To add items
btnAdd.addEventListener("click", function () {
  var inputData = document.getElementById("input").value.trim();

  if (inputData) {
    // To create List
    let li = document.createElement("li");
    li.textContent = inputData;
    ul.appendChild(li);
    document.getElementById("input").value = " ";

    // To create remove button
    let btnRemove = document.createElement("button");
    btnRemove.textContent = "Remove";
    li.appendChild(btnRemove);

    // To create remove button
    let btnDone = document.createElement("button");
    btnDone.textContent = "Done";
    li.appendChild(btnDone);

    // To create update button
    let btnUpdate = document.createElement("button");
    btnUpdate.textContent = "Update";
    li.appendChild(btnUpdate);

    // To remove items
    btnRemove.addEventListener("click", function () {
      // li.remove();
      // OR
      ul.removeChild(li);
    });

    // To done items
    btnDone.addEventListener("click", function () {
      if (btnDone.style.backgroundColor === "green") {
        btnDone.style.backgroundColor = "";
        btnDone.style.Color = "black";
      } else {
        btnDone.style.backgroundColor = "green";
        btnDone.style.Color = "white";
      }
    });

    // To update items
    btnUpdate.addEventListener("click", function () {
      let newInput = document.getElementById("input").value.trim();

      if (newInput) {
        // li.innerHTML = newInput;
        // OR
        li.textContent = newInput;
        li.appendChild(btnRemove);
        li.appendChild(btnDone);
        li.appendChild(btnUpdate);

        document.getElementById("input").value = " ";
      }
    });
  } else {
    alert("Please enter a valid task!");
  }
});
