import ClientesMemDAO from "./clientesMem.js";
import ClientesMongoDAO from "./clientesMongoDB.js";

class ClientesFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'MEM':
                console.log('******* Persistiendo en Memoria *******')
                return new ClientesMemDAO()
            case 'MONGO':
                console.log('******* Persistiendo en MongoDB *******')
                return new ClientesMongoDAO()
            default:
                console.log('******* Persistiendo en default (Memoria) *******')
                return new ClientesMemDAO()
        }
    }
}

export default ClientesFactoryDAO