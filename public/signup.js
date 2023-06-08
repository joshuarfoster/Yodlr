const form = document.querySelector('form'); 
const successDiv = document.querySelector('#success-div');
form.addEventListener('submit', async (evt)=>{
    evt.preventDefault(); 

    const firstName = form.querySelector('input[name="firstName"]').value; 
    const lastName = form.querySelector('input[name="lastName"]').value; 
    const email = form.querySelector('input[name="email"]').value; 
    const body = JSON.stringify({firstName, lastName, email});
    const data = await fetch('/users', {headers: {'Content-Type': 'application/json'}, body, method: 'POST'})
        .then(resp => {
            if(!resp.ok){
                throw new Error("Error: Status", resp.status);
            }
            return resp.json(); 
        })
        .then(data => {
            return data; 
        })
        .catch(err => console.error(err));

    form.querySelector('input[name="firstName"]').value = ''
    form.querySelector('input[name="lastName"]').value = ''; 
    form.querySelector('input[name="email"]').value  = ''; 

    if(data.state){
        successDiv.innerText = 'Account Successfully Created!';
    }
    else{
        successDiv.innerText = '';
    }
});