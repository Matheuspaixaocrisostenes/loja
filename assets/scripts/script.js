const res = document.getElementById('res')

for(let c = 1; c < 150; c++){
    const p = document.createElement('p')
    const span = document.createElement('span')
    const div = document.createElement('div')
    const btn = document.createElement('button')
    div.className = 'card'
    const img = document.createElement('img')
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${c}.png`
    img.id = c
    p.innerHTML += `Pokemon ${c}`
    span.innerHTML += `R$ 100,00`
    btn.innerHTML += 'Comprar'
    btn.id = c
    btn.onclick = function(){
        alert(btn.id)
    }
    div.appendChild(img)
    div.appendChild(p)
    div.appendChild(span)
    div.appendChild(btn)
    res.appendChild(div)
}