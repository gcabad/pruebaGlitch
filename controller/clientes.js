import ApiClientes from '../api/clientes.js'

class ControladorClientes {

    constructor() {
        this.apiClientes = new ApiClientes()
    }

    getClientes = async (req,res) => {
        const { id } = req.params
        res.json( await this.apiClientes.obtenerClientes(id) )
    }
    
    postCliente = async (req,res) => {
        const cliente = req.body
        res.json(await this.apiClientes.guardarCliente(cliente))
        //res.redirect('/')
    }
    
    putCliente = async (req,res) => {
        const { id } = req.params
        const cliente = req.body
       
        res.json(await this.apiClientes.actualizarCliente(cliente,id))
    }
    
    deleteCliente = async (req,res) => {
        const { id } = req.params
       
        res.json(await this.apiClientes.eliminarCliente(id))
    }
}

export default ControladorClientes