
let add = document.getElementById('add');
let cleared = document.getElementById('cleared');

// localStorage.setItem('added', JSON.stringify([]));

function update() {
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    // console.log(title, description);
    // let adding = [];
    if (localStorage.getItem('added') == null) {
        adding = [];
        adding.push([title, description]);
        if (title.length > 0) {
            localStorage.setItem('added', JSON.stringify(adding));
        }
    }
    else {
        todoList = JSON.parse(localStorage.getItem('added'));
        todoList.push([title, description]);
        if (title.length > 0) {
            localStorage.setItem('added', JSON.stringify(todoList));
        }
    };
    

     if(localStorage.getItem('added') == null){
         // localStorage.setItem('added', JSON.stringify([]));
         todoList = [];
     }
     else{
        todoList = JSON.parse(localStorage.getItem('added'));
     }
    let tableBody = document.getElementById('tableBody');
    let str = '';
    todoList.forEach((element, index) => {
        str += `
                <tr>
                <th scope="row">${index + 1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><button onclick="deleted(${index})" class="btn btn-primary">Delete</button></td>
                </tr>
               `
    });
    tableBody.innerHTML = str;
}
update();
add.addEventListener('click', update);

function deleted(item) {
    let todoList = JSON.parse(localStorage.getItem('added'));
    todoList.splice(item, 1);
    localStorage.setItem('added', JSON.stringify(todoList));
    update();
}

cleared.addEventListener('click', ()=>{
    if(confirm('Are you sure do you want to clear the list')){
        localStorage.clear();
    }
    update();
});