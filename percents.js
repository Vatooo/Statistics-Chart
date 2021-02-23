
let statLine1 = document.querySelector('.stat-line-1')
let inner1 = document.querySelector('.inner-1')

let statLine2 = document.querySelector('.stat-line-2')
let inner2 = document.querySelector('.inner-2')

let statLine3 = document.querySelector('.stat-line-3')
let inner3 = document.querySelector('.inner-3')

let statLine4 = document.querySelector('.stat-line-4')
let inner4 = document.querySelector('.inner-4')



const button = document.querySelector('#btn')

let c = 0;

button.addEventListener('click', line1Function)
button.addEventListener('click', line2Function)
button.addEventListener('click', line3Function)
button.addEventListener('click', line4Function)


function line1Function() {
    let countUp = setInterval(() => {

        inner1.innerHTML = `${c}%`
        c++
    
        if(c == 98) {
            clearInterval(countUp)
        }
    },30);
}

function line2Function() {
    let countUp = setInterval(() => {

        inner2.innerHTML = `${c}%`
        c++
    
        if(c == 78) {
            clearInterval(countUp)
        }
    },30);
}

function line3Function() {
   let countUp = setInterval(() => {
        
        inner3.innerHTML = `${c}%`
        c++

        if(c == 42) {
            clearInterval(countUp)
        }

    }, 30);
}

let d = 0

function line4Function() {
    let countUp = setInterval(() => {
        
        inner4.innerHTML = `${d}%`
        d++

        if(d == 22) {
            clearInterval(countUp)
        }

    }, 30);
}
