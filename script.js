const inp = document.querySelectorAll('input')
const btn = document.querySelectorAll('button')
const tasks = document.querySelector('.tasks')

btn[0].addEventListener('click', addtask)

function addtask() {
    let ob = document.createElement('div')
    let ta = inp[0].value
    tasks.append(ob)
    ob.setAttribute('class', 'task')

    let input = document.createElement('input')
    let inputdiv = document.createElement('div')
    let btnedit = document.createElement('button')
    let btndelet = document.createElement('button')
    let btndone = document.createElement('button')

    btnedit.innerHTML = 'Edit'
    btndelet.innerHTML = 'Delete'
    btndone.innerHTML = 'Done'
    ob.append(inputdiv, input, btnedit, btndelet, btndone)

    inputdiv.innerHTML = ta
    input.value = ta

    ta = ''
    btnedit.addEventListener('click', edit)
    btndone.addEventListener('click', done)
    btndelet.addEventListener('click', dele)

    let j = 0

    function edit() {
        if (j === 0) {
            console.log(j)
            input.style = 'top:42px'
            j++
            btndone.style = 'position: absolute;right: 55px;z-index:2'
            ob.style = 'height:82px'
            console.log(j)
            btndone.addEventListener('click', done)
        }
    }

    function done() {
        if (j === 1) {
            input.style = ''
            btndone.style = 'z-index:-1'
            ob.style = ''
            inputdiv.innerHTML = input.value
            j--
            console.log(j)
        }
    }

    function dele() {
        ob.remove()
    }

    inp[0].value = ''
}