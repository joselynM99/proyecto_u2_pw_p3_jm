const obtenerPokemons = async () => {
    console.log('calculo de aleatorio')
    console.log(obtenerAleatorio(1, 5))
    const vec = obtenerVectorNumerico()
    const vecNombres = await obtenerVectorNombres(vec)
    console.log(vecNombres)
    console.table(vecNombres) //impresión de arreglos en tabla

    return vecNombres
}

const obtenerVectorNumerico = () => {
    const arreglo = [obtenerAleatorio(1, 600), obtenerAleatorio(1, 600), obtenerAleatorio(1, 600), obtenerAleatorio(1, 600)]
    console.log(arreglo)
    return arreglo
}

//desestructurar un atributo
const obtenerVectorNombres = async ([p1, p2, p3, p4] = []) => {
    console.log('transformando a nombres')
    console.log(p1)
    console.log(p2)
    console.log(p3)
    console.log(p4)

    const nombrep1 = await obtenerNombreAPI(p1)
    const nombrep2 = await obtenerNombreAPI(p2)
    const nombrep3 = await obtenerNombreAPI(p3)
    const nombrep4 = await obtenerNombreAPI(p4)

    const vecNombres = [{
        nombre: nombrep1,
        id: p1
    }, {
        nombre: nombrep2,
        id: p2
    }, {
        nombre: nombrep3,
        id: p3
    }, {
        nombre: nombrep4,
        id: p4
    }]
    return vecNombres

}

const obtenerNombreAPI = async (id) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json())

    console.log(data.name)
    return data.name
}

function obtenerAleatorio(min, max) {
    max++
    return Math.floor(Math.random() * (max - min) + min)
}

const obtenerPokemonsFachada = async () => {
    return await obtenerPokemons()
}

export default obtenerPokemonsFachada