const res = document.getElementById('res')
let cont = 1

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
    if(c > 20){
        span.innerHTML = `R$ 150,00`
    }
    btn.innerHTML += 'Comprar'
    btn.id = c
    btn.onclick = function(){
        const carrinho = document.getElementById('cart')
        carrinho.innerHTML = `${cont++}`
        carrinho.style.display = 'inline'
        alert('Produto adicionado no carrinho!')
    }
    div.appendChild(img)
    div.appendChild(p)
    div.appendChild(span)
    div.appendChild(btn)
    res.appendChild(div)
}