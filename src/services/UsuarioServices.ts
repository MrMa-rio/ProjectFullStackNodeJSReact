import { UsuarioRepository } from "../repositories/UsuarioRepository"

export class UsuarioServices {

    private usuarioRepository: UsuarioRepository

    constructor(){
        this.usuarioRepository = new UsuarioRepository()
    }

    async CheckUsuario(email:string, senha:string){
        const response = await this.usuarioRepository.CheckUsuario(email, senha)
        if(!response) return null
        return response
    }

    async getUsuario(nome:string, senha:string){
        return await this.usuarioRepository.getUsuario(nome, senha)
    }

}