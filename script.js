const couters = document.querySelectorAll('.counter')

couters.forEach(couter =>{
    couter.innerText = '0'

    const updateCounter = () => {
        const target = +couter.getAttribute('data-target')
        const c = +couter.innerText
        const increment = target / 200
        if (c < target) {
            couter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter,1)            
        }else{
            couter.innerText = target
        }
    }

    updateCounter()
})