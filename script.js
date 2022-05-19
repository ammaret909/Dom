
// document.getElementById('ok').addEventListener('click',function(e){
//     alert('ok is clicked')
//     console.log(e)
// })

// document.getElementById('cancel').addEventListener('mousemove',function(e){
//     console.log('x =',e.screenX,'y =',e.screenY)
// })

// let elems = document.getElementsByClassName('flex-item')
// console.log(elems)
// for (let elem of elems){
//     elem.addEventListener('mousemove',function(e){
//         console.log("x =",e.screenX,"y =",e.screenY)
//     })
//     elem.addEventListener('click',function(e){
//         alert(elem.innerText)
//     })
// }

document.getElementById('ok').addEventListener('click',function (e) {
    let noElemement = document.getElementById('no')
    if(noElemement.classList.contains('toggleOn')){
        noElemement.classList.replace('toggleOn','toggelOff')
    }
    else if (noElemement.classList.contains('toggleOff')){
        noElemement.classList.replace('togglrOff','toggleOn')
    }
    else{
        noElemement.classList.add('toggleOn')
    }
})

let bodertick = 20
document.getElementById('ok').addEventListener('click',function (e) {
bodertick += 5
let marginSet = 20
document.getElementById('cancel').style.margin = `${marginSet}px ${bodertick}px`
document.getElementById('no').style.margin = `${marginSet}px ${bodertick}px`
})