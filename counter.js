
const countEl = document.getElementById('counter')

let counterDiv = document.querySelector('.counter-div')


updateVisitCount()
function updateVisitCount() {
    fetch('https://api.countapi.xyz/update/vato-counter/youtube?amount=1')
    .then(res => res.json())
    .then(res => {
        countEl.innerHTML = res.value
        if(res.value += 1) {
            counterDiv.style.width += '200px'
            counterDiv.style.transitionDuration += '1s'
        }
    })
}


