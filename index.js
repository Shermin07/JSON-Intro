function loadUsers2(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => displayUser2(data)  )
}

function displayUser2(data){
    console.log(data)
    for ( let user of data){
        
        console.log(user.username)
    }
}



//  2::.


function loadUsers3(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then( res => res.json())
    .then(users => displayUser3(users) )
}

function displayUser3(users){
    console.log(users);
    for( const user of users){

        //console.log(user.address.suite)
        console.log(user.company.catchPhrase)
        //console.log(user.email)
    }

}