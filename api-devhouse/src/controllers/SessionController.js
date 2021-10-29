/* 
    metodos: index, show, update, store, destroy
    index: listagem de sessoes
    store: criar uma sessao
    show: quando queremos listar uma unica sessao
    update: quando queremos alterar alguma sessao
    destroy: quando queremos deletar uma sessao 
*/
import User from '../models/User'

class SessionController{
    async store(req, res){
        const {email} = req.body
        //verificando se esse usuario ja existe
        let user = await User.findOne({email})
        if(!user){
            user = await User.create({email})
        }
         /* let  */
        return res.json(user)
    }
}

export default new SessionController()