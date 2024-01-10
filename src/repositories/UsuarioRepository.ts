import DB from "../data/db";

export class UsuarioRepository {

    private DB: DB

    constructor(){
        this.DB = new DB()
    }

    async CheckUsuario(email:string, senha:string){
        const response = await this.DB.CheckUsuario(email, senha)
        if(!response) return null
        return response
    }

    async getUsuario(email:string, senha:string){
        return await this.DB.getUsuarioLogin(email, senha)
    }
}