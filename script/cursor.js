const cursor = document.getElementById('cursor')
const imageCard = document.querySelector('.imageCard')

imageCard.addEventListener('mousemove', e =>{
    cursor.setAttribute('style', 'top: '+(e.pageY - 10)+'px; left: '+(e.pageX - 10)+'px')
})