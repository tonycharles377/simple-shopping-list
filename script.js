const input = document.querySelector('input');
const button = document.querySelector('button');
const unorderedList = document.querySelector('ul');

//onclick function
button.addEventListener('click', () =>{
    let item = input.value;
    input.value = '';
    
    const list = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = item;
    list.appendChild(span);

    const btn = document.createElement('button');
    btn.textContent = 'Delete';
    list.appendChild(btn);

    unorderedList.appendChild(list);

    btn.addEventListener('click', () =>{
        list.remove();
    });

    input.focus();
});



