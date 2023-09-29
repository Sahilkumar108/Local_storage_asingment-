const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    let User = document.getElementById('user').value;
    let Age = document.getElementById('Age').value;

    localStorage.setItem('User Name',User);
    localStorage.setItem('Age',Age);

    let tbody = document.querySelector('tbody');
    let row = document.createElement('tr');

    let data = [localStorage.getItem('User Name'),localStorage.getItem('Age')];

    data.forEach((ele)=>{
        let td = document.createElement('td')
        td.innerText = ele;
        row.appendChild(td);

    })

    tbody.appendChild(row);

})