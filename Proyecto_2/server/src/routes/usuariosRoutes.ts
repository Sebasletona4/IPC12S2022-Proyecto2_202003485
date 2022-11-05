import { Router } from "express";

const todosUsuarios = [
    {
        Usuario: "IPCF",
        Password: "123"
    },

    {
        Usuario: "SEBAS",
        Password: "2412"
    },

    {
        Usuario: "ROJOS",
        Password: "1705"
    }
];

class UsuariosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {

        this.router.get('/todos', (req, res) => {
            res.send(todosUsuarios);
        });
    }

}

const usuariosRouter = new UsuariosRoutes();
export default usuariosRouter.router;