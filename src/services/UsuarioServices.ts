import { UsuarioRepository } from "../repositories/UsuarioRepository"

export default class UsuarioServices {

    private usuarioRepository: UsuarioRepository

    constructor(){
        this.usuarioRepository = new UsuarioRepository()
    }

    async CheckUsuario(nome:string, senha:string){
        const response = await this.usuarioRepository.CheckUsuario(nome, senha)
        if(!response) return null
        return response
    }

    async getUsuario(nome:string, senha:string){
        return await this.usuarioRepository.getUsuario(nome, senha)
    }

}