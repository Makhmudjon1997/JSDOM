let form = document.getElementById('addForm');
let itemList = document.getElementById('items')
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

// Delete event
itemList.addEventListener('click', removeItem);

//Filter event
filter.addEventListener('keyup', filterItems)


//Add item
function addItem(e){
    e.preventDefault();
     
    //get input value
    let newItem = document.getElementById('item').value;

    //Create new li element
    let li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    //Create delete button
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    deleteBtn.appendChild(document.createTextNode('X'))
    li.appendChild(deleteBtn)

    //Append li to list
    itemList.appendChild(li)
    
} 

//Remove Item

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}


//Filter items

function filterItems(e){
    // convert text to lowercase

    let text = e.target.value.toLowerCase();
    //Get lis
    let items = itemList.getElementsByTagName('li');
    //Convert to an Array
     Array.from(items).forEach(item => {
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block'
        } else{
            item.style.display = 'none';
        }
    })
}