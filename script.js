
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

let showText = ['ok','ง่าย','จริงๆ','นะจ๊ะ']
let showIndex = 0;
document.getElementById('no').addEventListener('dblclick',function (e) {
    showIndex++
    if(showIndex >= showText.length){
        showIndex = 0
    }
    console.log(`show index = ${showIndex}`)
    const okButton = document.getElementById('ok')
    okButton.innerText = showText[showIndex]


    // const okButton = document.getElementById('ok')
    // if(okButton.innerText === 'ok'){
    //     okButton.innerText = 'วิชานี้'
    // }
    // else if(okButton.innerText === 'วิชานี้'){
    //     okButton.innerText = 'ง่าย'
    // }
    // else if(okButton.innerText === 'ง่าย'){
    //     okButton.innerText = 'จริงๆนะจ๊ะ'
    // }
    // else{
    //     okButton.innerText = 'ok'
    // }
})