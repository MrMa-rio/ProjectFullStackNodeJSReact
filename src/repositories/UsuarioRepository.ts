import DB from "../data/db";

export class UsuarioRepository {

    private DB: DB

    constructor(){
        this.DB = new DB()
    }

    async CheckUsuario(nome:string, senha:string){
        const response = await this.DB.CheckUsuario(nome, senha)
        if(!response) return null
        return response
    }

    async getUsuario(nome:string, senha:string){
        return await this.DB.getUsuario(nome, senha)
    }
}