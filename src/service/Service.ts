import axios from "axios";

export const api = axios.create({
    baseURL: "https://blogpessoal-ax12.onrender.com"
})

export const cadastroUsuario = async(url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

/* => Cria uma função sem nome (arrow function)*/ 
export const login = async(url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data.token)
}
/*Como o back demora para enviar essa informação, temos que criar a função assíncrona para o front esperar*/

export const busca = async(url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data.token)
    /*vai ser usado pro lista tema e lista postagem*/
}