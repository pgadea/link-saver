var linkCategory = document.querySelector("#linkCategory");

let linkCategories = [];

linkCategory.addEventListener('keydown', function (event) {

    if (event.keyCode === 188) {
        event.preventDefault();

        linkCategories.push(linkCategories.value);

        linkCategories.value = '';

        //Display the updated categories
        displayLinkCategories();
    }
})

function displayLinkCategories() {
    console.log("Displaying Link Categories");
}

submitButton.addEventListener('click', (event) => {

    //Stop form from submitting
    event.preventDefault();
    
    const title = linkTitle.value;
    const url = linkUrl.value;
    const categories = linkCategories;

    const newLink = {
        title,
        url,
        categories
    }

    //push new link to array
    links.push(newLink);

    linkTitle.value = '';
    linkUrl.value = '';
    linkCategory.value = '';
    linkCategories = [];

    displayLinkCategories();
})