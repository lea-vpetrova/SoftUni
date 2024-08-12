window.addEventListener("load", solve);

function solve() {

  const testRideButton = document.getElementById("test-ride-btn");
  const previewList = document.getElementById("preview-list");
  const completeList = document.getElementById("complete-list");
  const colorSelect = document.getElementById("colors");
  const modelSelect = document.getElementById("motorcycles");
  const dateTimeInput = document.getElementById("datetime");
  const fullNameInput = document.getElementById("full-name");
  const emailInput = document.getElementById("email");
  const dataView = document.querySelector(".data-view");

  
  testRideButton.addEventListener("click", function () {
    
    const color = colorSelect.value.trim();
    const model = modelSelect.value.trim();
    const fullName = fullNameInput.value.trim();
    const email = emailInput.value.trim();
    const dateTime = dateTimeInput.value.trim();

    
    if (!color || !model || !fullName || !email || !dateTime) {
      return; 
    }

    
    const listItem = document.createElement("li");
    const article = document.createElement("article");
    const colorPara = document.createElement("p");
    const modelPara = document.createElement("p");
    const fullNamePara = document.createElement("p");
    const emailPara = document.createElement("p");
    const dateTimePara = document.createElement("p");
    const editButton = document.createElement("button");
    const nextButton = document.createElement("button");

    colorPara.textContent = `Color: ${color}`;
    modelPara.textContent = `Model: ${model}`;
    fullNamePara.textContent = `For: ${fullName}`;
    emailPara.textContent = `Contact: ${email}`;
    dateTimePara.textContent = `Test Ride On: ${dateTime}`;

    editButton.classList.add("edit-btn");
    editButton.textContent = "Edit";
    nextButton.classList.add("next-btn");
    nextButton.textContent = "Next";

    article.appendChild(colorPara);
    article.appendChild(modelPara);
    article.appendChild(fullNamePara);
    article.appendChild(emailPara);
    article.appendChild(dateTimePara);
    article.appendChild(editButton);
    article.appendChild(nextButton);

    listItem.appendChild(article);
    previewList.appendChild(listItem);

    
    colorSelect.value = "";
    modelSelect.value = "";
    fullNameInput.value = "";
    emailInput.value = "";
    dateTimeInput.value = "";
    testRideButton.disabled = true;

    
    editButton.addEventListener("click", function () {
      
      colorSelect.value = color;
      modelSelect.value = model;
      fullNameInput.value = fullName;
      emailInput.value = email;
      dateTimeInput.value = dateTime;

      
      testRideButton.disabled = false;

      
      previewList.removeChild(listItem);
    });

    
    nextButton.addEventListener("click", function () {
      
      const completeListItem = document.createElement("li");
      const completeArticle = document.createElement("article");
      const completeColorPara = document.createElement("p");
      const completeModelPara = document.createElement("p");
      const completeFullNamePara = document.createElement("p");
      const completeEmailPara = document.createElement("p");
      const completeDateTimePara = document.createElement("p");
      const completeButton = document.createElement("button");

      completeColorPara.textContent = colorPara.textContent;
      completeModelPara.textContent = modelPara.textContent;
      completeFullNamePara.textContent = fullNamePara.textContent;
      completeEmailPara.textContent = emailPara.textContent;
      completeDateTimePara.textContent = dateTimePara.textContent;

      completeButton.classList.add("complete-btn");
      completeButton.textContent = "Complete";

      completeArticle.appendChild(completeColorPara);
      completeArticle.appendChild(completeModelPara);
      completeArticle.appendChild(completeFullNamePara);
      completeArticle.appendChild(completeEmailPara);
      completeArticle.appendChild(completeDateTimePara);
      completeArticle.appendChild(completeButton);

      completeListItem.appendChild(completeArticle);
      completeList.appendChild(completeListItem);

      
      previewList.removeChild(listItem);
    });
  });

  
  document.addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("complete-btn")) {
      
      const listItem = event.target.closest("li");
      completeList.removeChild(listItem);

      
      addConfirmButton();
    }
  });

  
  function addConfirmButton() {
    
    if (!dataView.querySelector(".confirm-btn")) {
      const confirmButton = document.createElement("button");
      confirmButton.classList.add("confirm-btn");
      confirmButton.textContent = "Your Test Ride is Confirmed";

      
      confirmButton.addEventListener("click", function () {
        location.reload();
      });

      
      dataView.appendChild(confirmButton);
    }
  }
}