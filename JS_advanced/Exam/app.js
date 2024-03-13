window.addEventListener("load", solve);

function solve() {
  // Function to create a list item with snowman information
  function createSnowmanListItem(snowmanName, height, location, creator, specialAttribute) {
    // Create list item
    var listItem = document.createElement("li");
    listItem.classList.add("snowman-info");

    // Create article element for snowman details
    var article = document.createElement("article");

    // Create paragraph elements for each snowman detail
    var nameParagraph = document.createElement("p");
    nameParagraph.textContent = "Name: " + snowmanName;
    var heightParagraph = document.createElement("p");
    heightParagraph.textContent = "Height: " + height;
    var locationParagraph = document.createElement("p");
    locationParagraph.textContent = "Location: " + location;
    var creatorParagraph = document.createElement("p");
    creatorParagraph.textContent = "Creator: " + creator;
    var attributeParagraph = document.createElement("p");
    attributeParagraph.textContent = "Attribute: " + specialAttribute;

    // Append paragraph elements to the article
    article.appendChild(nameParagraph);
    article.appendChild(heightParagraph);
    article.appendChild(locationParagraph);
    article.appendChild(creatorParagraph);
    article.appendChild(attributeParagraph);

    // Create button container
    var btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-container");

    // Create Edit button
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");

    // Create Next button
    var nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.classList.add("next-btn");

    // Append buttons to the button container
    btnContainer.appendChild(editButton);
    btnContainer.appendChild(nextButton);

    // Append article and button container to the list item
    listItem.appendChild(article);
    listItem.appendChild(btnContainer);

    return listItem;
  }

  // Add event listener to the form submission
  document.querySelector(".snowman").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var snowmanName = document.getElementById("snowman-name").value.trim();
    var height = document.getElementById("snowman-height").value.trim();
    var location = document.getElementById("location").value.trim();
    var creator = document.getElementById("creator-name").value.trim();
    var specialAttribute = document.getElementById("special-attribute").value.trim();

    // Check if any field is empty
    if (snowmanName === '' || height === '' || location === '' || creator === '' || specialAttribute === '') {
      // If any field is empty, display an error message
      alert("Please fill in all fields.");
      return; // Exit the function
    }

    // If all fields are filled, continue with the program
    // Create list item with snowman information
    var listItem = createSnowmanListItem(snowmanName, height, location, creator, specialAttribute);

    // Append the list item to the snowman preview list
    document.querySelector(".snowman-preview").appendChild(listItem);

    // Clear the form after submission
    document.querySelector(".snowman").reset();

    // Disable the "Add" button
    document.querySelector(".add-btn").disabled = true;

    // Show the "Edit" and "Next" buttons
    document.querySelector(".edit-btn").style.display = "inline-block";
    document.querySelector(".next-btn").style.display = "inline-block";
  });
}

