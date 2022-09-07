const res = document.getElementById('res')

for(let c = 1; c < 899; c++){
    const p = document.createElement('p')
    const div = document.createElement('div')
    div.className = 'card'
    const img = document.createElement('img')
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${c}.png`
    p.innerHTML += `Pokemon ${c}`
    div.appendChild(img)
    div.appendChild(p)
    res.appendChild(div)
}