let resultStep = function(mystep) {
    console.log('У твоєму рюкзаку: ', mystep.backpack)

    if (mystep.time > 0) {
        console.log('Тепер ваш залишок часу: ' + mystep.time + ' хвилин. Продовжуй шлях!')
    } else {
       console.log('Нажаль ваш залишок часу: ' + mystep.time + ' хвилин. Вам доведеться залишитись у горах на ніч!') 
    }
   
}
export default resultStep
