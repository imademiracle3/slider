const left = document.querySelector('.left')
const right = document.querySelector('.right')
const container = document.querySelector('.container')


// left.addEventListener('mouseenter', () => container.classList.add('hover-left'))

left.addEventListener('mouseenter', function(){
    container.classList.add('hover-left')
})
left.addEventListener('mouseleave', function(){
    container.classList.remove('hover-left')
})

left.addEventListener('mouseenter', function(){
    container.classList.add('hover-right')
})
left.addEventListener('mouseleave', function(){
    container.classList.remove('hover-right')
})
