function loadData2(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then (data => displayUser2(data) )
}

function displayUser2(data){
  console.log(data);
}

//

