
class ClientesMemDAO {

    constructor () {
        this.clientes = [
            { id: '1', nombre: 'Juan', edad: 23 },
            { id: '2', nombre: 'Ana', edad: 21 },
        ]
    }

    delay = ms => new Promise(resolve => setTimeout(resolve, ms))
        
    findCliente = async id => {
        return this.clientes.find(cliente => cliente.id == id)    
    }
    
    findClientes = async ()  => {
        try {
            //await delay(2000)
            return this.clientes
        }
        catch {
            return []
        }
    }
    
    saveCliente = async cliente => {
        cliente.edad = parseInt(cliente.edad)
        
        const id = parseInt(this.clientes[this.clientes.length-1].id) + 1
        cliente.id = String(id)
    
        this.clientes.push(cliente)
    
        return cliente    
    }
    
    updateCliente = async (cliente,id) => {
        /* Actualización total */    
        cliente.id = id
        const index = this.clientes.findIndex(cliente => cliente.id == id)
        this.clientes.splice(index, 1, cliente)
    
        return cliente    
    }
    
    deleteCliente = async id => {
        const index = this.clientes.findIndex(cliente => cliente.id == id)
        //(1)
        //const cliente = clientes[index]
        //clientes.splice(index, 1)       
    
        //(2)
        const cliente = this.clientes.splice(index, 1)[0]
        
        return cliente    
    }
} 

export default ClientesMemDAO
