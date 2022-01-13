function makeList(listData) {
    // Get a container element for the list
    let listContainer = document.getElementById("github-projects"),
    // Get the list
    listElement = document.getElementById("proj-list"),
    // Set up a loop that goes through the items in listItems one at a time
    numberOfListItems = listData.length,
    listItem,
    urlItem,
    link,
    i;

    for (i = 0; i < numberOfListItems; ++i) {
        // create an item for each one
        listItem = document.createElement('li');
        urlItem = document.createElement('a');
        link = document.createTextNode(listData[i].name);

        urlItem.appendChild(link);

        // Set the title.
        urlItem.title = listData[i].name;

        // Set the href property.
        urlItem.href = listData[i].html_url;

        // Add the item text
        listItem.appendChild(urlItem);

        // Add listItem to the listElement
        listElement.appendChild(listItem);
    }
}

function dumpResponse() {
    makeList(JSON.parse(this.responseText))
}
function getProject() {
    var request = new XMLHttpRequest();
    request.onload = dumpResponse;
    request.open('get', 'https://api.github.com/users/HamishJChild/repos', true)
    request.send()
}
