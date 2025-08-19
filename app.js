'use strict'

import funcionarios from "./funcionarios.json" with {type: "json"}

console.log (funcionarios.cargo)

function criarPerfil (funcionario) {
    const body = document.querySelector('body')

    const container = document.createElement('div')
    container.className = 'container'

    const imagem = document.createElement('img')
    const nome = document.createElement('span')
    const cargo = document.createElement('p')

    imagem.src = `./img/${funcionario.imagem}`
    nome.textContent = funcionario.nome
    cargo.textContent = funcionario.cargo

    body.appendChild(container)
    container.appendChild(imagem)
    container.appendChild(nome)
    container.appendChild(cargo)
}

funcionarios.forEach(criarPerfil)