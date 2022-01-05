function makeList(listData) {
    // Make a container element for the list
    let listContainer = document.createElement('div'),
    // Make the list
    listElement = document.createElement('ul'),
    // Set up a loop that goes through the items in listItems one at a time
    numberOfListItems = listData.length,
    listItem,
    i;

    // Add it to the page
    document.getElementsByTagName('body')[0].appendChild(listContainer);
    listContainer.appendChild(listElement);

    for (i = 0; i < numberOfListItems; ++i) {
        // create an item for each one
        listItem = document.createElement('li');

        // Add the item text
        listItem.innerHTML = listData[i].name;

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
