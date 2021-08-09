let navigation = document.getElementById('navi');
let burgerbar = document.getElementById('bar');
burgerbar.addEventListener('click', function(){
    navigation.classList.toggle('active');
});


// ajax




function users () {
    function render () {
        let response = this.responseText;
        let responseData = JSON.parse(response);
        console.log(responseData);
        let ul = document.createElement('ul');
        responseData.data.forEach(x => {
            let li = document.createElement('li');
            li.textContent = x.first_name + ' ' + x.last_name + ' ' + x.email;
            ul.appendChild(li);
        });
        document.getElementById('ajax').appendChild(ul);
    }


    let request = new XMLHttpRequest();
    request.addEventListener('load', render);
    request.open('GET', 'https://reqres.in/api/users?page=2');
    request.send();
}

users();