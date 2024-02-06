const form = document.querySelector('form')
const ul = document.querySelector('ul')

form.addEventListener('submit', function(event) {
    event.preventDefault() //desabilitar o envio padrão do formulario

    const input = form.querySelector('input')
    const value = input.value
    
    if (value == '') {return} //campo vazio, esgota a function

    if (ul.querySelector('li') == null) { //nenhum li, cria e add na ul
        const firstLi = document.createElement('li')
        const span = document.createElement('span')
        const button = document.createElement('button')
            button.setAttribute('class', 'delete')
            button.innerHTML = 'x'

        firstLi.appendChild(span)
        firstLi.appendChild(button)

        firstLi.querySelector('span').innerText = value
        ul.appendChild(firstLi)
        input.value = ''

    } else { //algum li, clona e add na ul
        const newLi = ul.querySelector('li').cloneNode(true) 
        newLi.querySelector('span').textContent = value
        ul.appendChild(newLi)
        input.value = ''
    }
})

// função 'onclick' sobre a UL, usando o target para buscar o [button class='dele']
ul.onclick = function (event) {
    if (event.target.classList.contains('delete')) {
        if (confirm('Do you want to remove this item?')) {
            event.target.parentElement.remove()
        }
    }
}