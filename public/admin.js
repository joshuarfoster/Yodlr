const userList = document.querySelector('#user-list'); 


function addUserRow({firstName, lastName, email, state}){
    const tr = document.createElement('tr'); 
    const fNameTd = document.createElement('td');
    fNameTd.innerText = firstName;
    const lNameTd = document.createElement('td');
    lNameTd.innerText = lastName;
    const emailTd = document.createElement('td');
    emailTd.innerText = email;
    const stateTd = document.createElement('td');
    stateTd.innerText = state; 
    tr.append(emailTd, fNameTd, lNameTd, stateTd);
    userList.append(tr);
}


async function runAdmin(){
    const results = await fetch('/users', {headers: {Accept: 'application/json'}})
        .then(resp => {
            if(!resp.ok){
                throw new Error('Error! Status:', resp.status); 
            }
            return resp.json();
        })
        .then(data => data)
        .catch(err => console.error(err));
    
    for(let user of results){
        addUserRow(user);
    }
}

runAdmin(); 
