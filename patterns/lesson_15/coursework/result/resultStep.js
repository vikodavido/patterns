let resultStep = function(timeTourist) {
    if (timeTourist > 0) {
        console.log('Тепер ваш залишок часу: ' + timeTourist + ' хвилин. Продовжуй шлях!')
    } else {
       console.log('Нажаль ваш залишок часу: ' + timeTourist + ' хвилин. Вам доведеться залишитись у горах на ніч!') 
    }
}
export default resultStep
