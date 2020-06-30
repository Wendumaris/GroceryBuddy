const form = document.getElementById('add-form');
const itemList = document.getElementById('items');
const submit = document.getElementById('submit');

form.addEventListener('submit', addNewItem);

itemList.addEventListener('click', removeItem);

itemList.addEventListener('click', markItem);

function addNewItem(e) {
    e.preventDefault();

    //Get input value
    let newItem = document.getElementById('item').value;

    //create new li
    let li = document.createElement('Li');
    //create text node
    let txtNode = document.createTextNode(newItem);
    li.classList.add('list-item');
    //append textnode to li
    li.appendChild(txtNode);

    //create delete button
    let deletebtn = document.createElement('button');
    //add class name to button
    deletebtn.className = "delete";
    //append text node to delete button
    deletebtn.appendChild(document.createTextNode('X'));
    //append delete button to li
    li.appendChild(deletebtn);

    //add new li to the ul
    itemList.appendChild(li);
    newItem.value= null;
}

function removeItem(e) {
    e.preventDefault()
    if (e.target.classList.contains('delete')) {
        if (confirm('Do you want to delete this item?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }

    }

}

function markItem(e) {
    e.preventDefault();

    if (e.target.classList.contains('list-item')) {
        e.target.classList.toggle('completed');
    }

}
