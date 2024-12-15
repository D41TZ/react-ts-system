import { max_index, usuarios } from '../database/usuarios.json';

type tUsuario = {
    cod_usuario : number,
    senha : string,
    nome : string,
};

const addUser = ({ cod_usuario, nome, senha } : tUsuario) : void => {
    if(usuarios.find((usuario : tUsuario) => usuario.cod_usuario === cod_usuario)){
        console.log('Código de usuário repetido!')
    }
    else {
        try {
            usuarios.push({ cod_usuario, nome, senha })             // Ta dando pau pq tem o import normal só importa uma cópia imutável. Precisa usat fs e path. Ver chatGPT
            console.log('Inserção realizada!')
        }
        catch {
            console.log('Algum erro inesperado ocorreu!')
        }
    }
};

addUser({ cod_usuario: 1, nome: 'Lucas Carnevalli Cunha', senha: 'masterkey' })