
const countEl = document.getElementById('counter')

let counterDiv = document.querySelector('.counter-div')

let j
updateVisitCount()
function updateVisitCount() {
    
    fetch('https://api.countapi.xyz/update/vato-counter/vato123?amount=1')
    .then(res => res.json())
    .then(res => {
        countEl.innerHTML = res.value
        if(res.value += 1) {
            j = res.value
            counterDiv.style.width += `${j}px`
            counterDiv.style.transitionDuration += '1s'
        }
    })
}


lindeDiv = document.querySelector('.line-div')
