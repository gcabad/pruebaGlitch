import express from 'express'
import ControladorClientes from '../controller/clientes.js'


export class RouterClientes {
    constructor() {
        this.router = express.Router()
        this.controladorClientes = new ControladorClientes()
    }

    start() {
        /* GET Cliente/s */
        this.router.get('/:id?', this.controladorClientes.getClientes)

        /* POST Cliente */
        this.router.post('/', this.controladorClientes.postCliente)

        /* PUT Cliente */
        this.router.put('/:id', this.controladorClientes.putCliente)

        /* DELETE Cliente */
        this.router.delete('/:id', this.controladorClientes.deleteCliente)
    
        return this.router
    }
}