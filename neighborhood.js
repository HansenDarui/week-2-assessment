let randoRes = document.querySelector('.resRec')

randoRes.addEventListener('click', () => {
    let restr = new Array ('Cafe Rio', 'Papa Johns', 'Kneaders', 'Taco Time', 'Del Taco')
    
    let i = Math.floor(Math.random()* restr.length)

    alert(restr[i])
})
