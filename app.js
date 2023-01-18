// const cont = document.querySelector('.container');
// const child = document.createElement('ul');
// cont.appendChild(child)

const clickMe = document.getElementById('btn')
const inp = document.querySelector('#txt')
const textUl = document.querySelector('#text-container')


clickMe.addEventListener('click', function(){
   if(inp.value){     
    let createLi = document.createElement('li');
    let createCheck = document.createElement('input');
    createCheck.type = 'checkbox';
    textUl.appendChild(createLi);
    createLi.innerHTML = inp.value;
    inp.value = '';

    createLi.appendChild(createCheck);

    createCheck.addEventListener('change', ()=> {
      if(createCheck.checked){
         createLi.style.color = 'red';
         createLi.style.textDecoration = "line-through"
      }else{
         createLi.style.color = 'black';
         createLi.style.textDecoration = "none"
      }})
   }
   else{
      alert('something wrong...')
     }
     
    })
