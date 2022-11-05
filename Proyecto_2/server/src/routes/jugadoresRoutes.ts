import { Router } from "express";

const todosJugadores = [

    {
        id: 1,
        nombre: 'Lionel',
        apellido: 'Messi',
        seleccion: 'Argentina',
        region: 'CONMEBOL',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/640px-Lionel_Messi_20180626.jpg'
    },
    {
        id: 2,
        nombre: 'Lautaro',
        apellido: 'Martinez',
        seleccion: 'Argentina',
        region: 'CONMEBOL',
        imagen: 'https://tntsports.com.ar/__export/1666210898975/sites/tntsports/img/2022/05/27/lautaro-martinez-seleccion-argentina.png_410945991.png'
    },
    {
        id: 3,
        nombre: 'Emiliano',
        apellido: 'Martinez',
        seleccion: 'Argentina',
        region: 'CONMEBOL',
        imagen: 'https://mirror0.cdn.net.ar/mirror0/mirror0/images/02/32/23275_9e0f2e7ff43224fe232728e02336b27a237bff633d1171278d7eea4a87dfd491/lg.webp'
    },
    {
        id: 4,
        nombre: 'Cristian',
        apellido: 'Romero',
        seleccion: 'Argentina',
        region: 'CONMEBOL',
        imagen: 'https://i.pinimg.com/736x/0c/f6/9d/0cf69df73b50d137e2815387e9513aee.jpg'
    },
    {
        id: 5,
        nombre: 'Matias',
        apellido: 'Rotondi',
        seleccion: 'Argentina',
        region: 'CONMEBOL',
        imagen: 'https://www.publinews.gt/gt/wp-content/uploads/2022/04/matias-Rotondi-goleo-jornada-16-1-.jpg'
    },
    {
        id: 6,
        nombre: 'Ansu',
        apellido: 'Fati',
        seleccion: 'España',
        region: 'UEFA',
        imagen: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/10/14/15710776109534.jpg'
    },
    {
        id: 7,
        nombre: 'Pedri',
        apellido: 'Gonzalez',
        seleccion: 'España',
        region: 'UEFA',
        imagen: 'https://static2.elcorreo.com/www/multimedia/202106/06/media/cortadas/pedri-k3b-U140595985032RuC-624x649@RC.jpg'
    },
    {
        id: 8,
        nombre: 'Pablo',
        apellido: 'Gaviria',
        seleccion: 'España',
        region: 'UEFA',
        imagen: 'https://retodiario.com/wp-content/uploads/2021/10/FBC_eZlWUAUFwhm.jpg'
    },
    {
        id: 9,
        nombre: 'Ferran',
        apellido: 'Torres',
        seleccion: 'España',
        region: 'UEFA',
        imagen: 'https://www.hortanoticias.com/wp-content/uploads/2020/09/Ferran-Torres-gol-Espana.jpeg'
    },
    {
        id: 10,
        nombre: 'Eric',
        apellido: 'Garcia',
        seleccion: 'España',
        region: 'UEFA',
        imagen: 'https://pbs.twimg.com/media/EhUW-qvXsAAAH_x.jpg'
    },
    {
        id: 11,
        nombre: 'Neymar',
        apellido: 'Da Silva',
        seleccion: 'Brasil',
        region: 'CONMEBOL',
        imagen: 'https://www.prensalibre.com/wp-content/uploads/2022/09/AFP_32K97C4.jpg?quality=52'
    },
    {
        id: 12,
        nombre: 'Janderson',
        apellido: 'Pereira',
        seleccion: 'Brasil',
        region: 'CONMEBOL',
        imagen: 'https://www.soy502.com/sites/default/files/styles/full_node/public/rojos_7.jpg'
    },
    {
        id: 13,
        nombre: 'Thales',
        apellido: 'Moreira',
        seleccion: 'Brasil',
        region: 'CONMEBOL',
        imagen: 'https://guatefutbol.com/wp-content/uploads/2022/03/Thales-moreira-santa-lucia-cotzumalguapa.jpg.webp'
    },
    {
        id: 14,
        nombre: 'Lucas',
        apellido: 'Paqueta',
        seleccion: 'Brasil',
        region: 'CONMEBOL',
        imagen: 'https://i0.wp.com/lamediatitular.com/wp-content/uploads/2022/08/brazil-v-colombia-fifa-world-cup-qatar-2022-qualifier.jpg?fit=640%2C427&ssl=1'
    },
    {
        id: 15,
        nombre: 'Raphael',
        apellido: 'Dias',
        seleccion: 'Brasil',
        region: 'CONMEBOL',
        imagen: 'https://media.rpctv.com/p/4b2c9cd936fa79aac99bc3b516395546/adjuntos/314/imagenes/017/929/0017929536/rapinha-1jpg.jpg'
    },
    {
        id: 16,
        nombre: 'Jose',
        apellido: 'Martinez',
        seleccion: 'Guatemala',
        region: 'CONCACAF',
        imagen: 'https://a.espncdn.com/photo/2021/0106/r798718_960x540_16-9.jpg'
    },
    {
        id: 17,
        nombre: 'Jose',
        apellido: 'Rosales',
        seleccion: 'Guatemala',
        region: 'CONCACAF',
        imagen: 'https://a.espncdn.com/photo/2020/1120/r778572_1296x729_16-9.jpg'
    },
    {
        id: 18,
        nombre: 'Antonio',
        apellido: 'Lopez',
        seleccion: 'Guatemala',
        region: 'CONCACAF',
        imagen: 'https://futbolcentroamerica.com/__export/1656278791113/sites/futbolcentroamerica/img/2022/06/26/antonio_chucho_lopez_municipal.jpg_1546398727.jpg'
    },
    {
        id: 19,
        nombre: 'Ricardo',
        apellido: 'Jerez',
        seleccion: 'Guatemala',
        region: 'CONCACAF',
        imagen: 'https://www.chapintv.com/wp-content/uploads/2021/11/Screenshot_20-1-1.jpg'
    },
    {
        id: 20,
        nombre: 'Marlon',
        apellido: 'Sequen',
        seleccion: 'Guatemala',
        region: 'CONCACAF',
        imagen: 'https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0113%2Fr961378_1296x729_16%2D9.jpg'
    }

];

class JugadoresRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{

        this.router.get('/todos', (req,res) => {
            res.send(todosJugadores)
        });

        this.router.get('/nombre/:nombre', (req,res) => {
            //console.log(req.params.nombre);
            const jugador = this.ObtenerJugadorNombre(req.params.nombre);
            res.send(jugador);
        });

        this.router.get('/seleccion/:nombre', (req,res) => {
            //console.log(req.params.nombre);
            const jugador = this.ObtenerJugadorSeleccion(req.params.nombre);
            res.send(jugador);
        });

        this.router.get('/apellido/:nombre', (req,res) => {
            //console.log(req.params.nombre);
            const jugador = this.ObtenerJugadorApellido(req.params.nombre);
            res.send(jugador);
        });

        this.router.get('/region/:nombre', (req,res) => {
            //console.log(req.params.nombre);
            const jugador = this.ObtenerJugadorRegion(req.params.nombre);
            res.send(jugador);
        });


    }

        ObtenerJugadorNombre(nombreJugador: any): any{
            return todosJugadores.find(dato => dato.nombre == nombreJugador);
        }

        ObtenerJugadorSeleccion(nombreSeleccion: any): any{
            let temp = [];
                    for (const jugador of todosJugadores) {
                        if(jugador.seleccion == nombreSeleccion){
                            temp.push(jugador);
                        }
                    }
                    return temp;
        }
        
        ObtenerJugadorApellido(nombreApellido: any): any{
            let temp = [];
                    for (const jugador of todosJugadores) {
                        if(jugador.apellido == nombreApellido){
                            temp.push(jugador);
                        }
                    }
                    return temp;
        }

        ObtenerJugadorRegion(nombreRegion: any): any{
            let temp = [];
                    for (const jugador of todosJugadores) {
                        if(jugador.region == nombreRegion){
                            temp.push(jugador);
                        }
                    }
                    return temp;
        }

    }


const jugadoresRouter = new JugadoresRoutes();
export default jugadoresRouter.router;