function loadTodos(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then( res => res.json())
    .then( users => todousers(users) )
}


function todousers(users){

    for( const user of users){
        const todoContainer = document.getElementById("todo-container");
        const todoDiv = document.createElement("div");
        todoDiv.innerHTML = `
        <h4>todo id : ${user.id} </h4>
        <h4>todo userid : ${user.userId} </h4>
        <h4>todo title : ${user.title} </h4>
        
        `

        todoContainer.appendChild(todoDiv)
    }

}