// ELEMENTS
let iframeData = document.querySelector(".content")
let postBtns = document.querySelector(".postBtns");
let post = document.querySelector(".post");
let titleOfArticle = document.querySelector('.titleOfArticle')
let colors = document.querySelector("#colorBtn");
let newBtn = document.querySelector("#new-btn");
let txtBtn = document.querySelector("#txt-btn");
let pdfBtn = document.querySelector("#pdf-btn");
let contents = richTextField.document.getElementsByTagName('body')[0];
let fileNameInput = document.querySelector("#fileNameInput");
let ediTingIcon = document.querySelector(".fa-toggle-on");
let postBtnsInFile = document.querySelector(".postBtnsInFile");
let editorContent = document.querySelector("#editorContent");
let postContenHere = document.querySelector(".postContenHere");
// EVENTS
function enableEditMode() {
  richTextField.document.designMode = 'On';
}

function execCmd(command) {
  richTextField.document.execCommand(command, false, null);
}

//COMAMANDS RECEINVING USER INPUT
function execCommandWithArg(command, arg) {
  richTextField.document.execCommand(command, false, arg);
}

//TURN EDITOR ON AND OFF
let isInEditMode = true;
ediTingIcon.style.color = "green";

function toggleEdit() {
  if (isInEditMode) {
    richTextField.document.designMode = 'Off';
    ediTingIcon.classList.remove("fa-toggle-on")
    ediTingIcon.classList.add('fa-toggle-off')
    ediTingIcon.style.color = "red"
    contents.style.background = "rgba(0, 0, 0, 0.50)"
    isInEditMode = false;
  } else {
    richTextField.document.designMode = 'On';
    ediTingIcon.classList.remove("fa-toggle-off")
    ediTingIcon.classList.add('fa-toggle-on')
    ediTingIcon.style.color = "green"
    contents.style.background = "transparent"

    isInEditMode = true;
  }

}

//POST ARTCILCE EVENT
postBtns.addEventListener("click", () => {
  post.innerHTML = richTextField.document.getElementsByTagName('body')[0].innerHTML;
  postContenHere.innerHTML = richTextField.document.getElementsByTagName('body')[0].innerHTML;
  articlesArray.articleInnerHtml = richTextField.document.getElementsByTagName('body')[0].innerHTML;
  articlesArray.articleTexTContenT = richTextField.document.getElementsByTagName('body')[0].textContent;

})
postBtnsInFile.addEventListener("click", () => {
  post.innerHTML = richTextField.document.getElementsByTagName('body')[0].innerHTML;
  articlesArray.articleInnerHtml = richTextField.document.getElementsByTagName('body')[0].innerHTML;
  articlesArray.articleTexTContenT = richTextField.document.getElementsByTagName('body')[0].textContent;
})


// DROP DOWN menu
function dropMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
//NEW FILE
newBtn.addEventListener("click", () => {
  let newContents = richTextField.document.getElementsByTagName('body')[0];
  newContents.textContent = "";
})

// TXT FILE
txtBtn.addEventListener("click", () => {
  const a = document.createElement('a');
  const blob = new Blob([contents.textContent]);
  const dataUrl = URL.createObjectURL(blob);
  a.href = dataUrl;
  a.download = fileNameInput.value + ".txt"
  a.click()

})

fileNameInput.addEventListener("change", () => {
  titleOfArticle.innerHTML = fileNameInput.value;
  articlesArray.title = innerHTML = fileNameInput.value;
})
