import { Connection } from "mysql";

class Alumno {
    constructor() { }

    

    CrearListaHoy(db: Connection, codigo: string, matricula: string) {
        return new Promise((resolve, reject) => {
            const consulta = `INSERT INTO listaAlums VALUES (?,?,NOW())`;
            db.query(consulta, [
                codigo, matricula //, limite, duracion
            ], (err, result) => {
                if (err)
                    reject({ msj: 'Error al registrar la lista de hoy'});
                else
                    resolve({ msj: 'Se ha asociado el codigo correctamente' });
            });
        });
    }
    
    BuscarClase(db: Connection, codigo: string):Promise<any>{
        return new Promise((resolve, reject) => {
            const consulta = `SELECT * FROM clases AS c, lista AS l, horario AS h WHERE c.idClase=h.idClase AND h.idHorario=l.idHorario AND l.codigo=?`;
            
            db.query(consulta, [ codigo ], (err, result) => {
                
                if (err)
                    reject({ msj: 'Error al obtener la informacion', status:false });
                else
                    resolve(result);
            });
        });
    }


    VerificarregistroUnico(db: Connection, codigo: string, matricula: string){
        return new Promise((resolve, reject) => {
            const consulta = 'SELECT * FROM listaAlums AS l WHERE l.codigo=? AND l.matriculaAlum=?';
            
            db.query(consulta, [ codigo, matricula ], (err, result) => {
                
                if (err)
                    reject({ msj: 'Error al obtener la informacion', status:false });
                else
                    resolve(result);
            });
        });
    }

    ObtenerDatosAlumno(db: Connection, matricula: string){
        return new Promise((resolve, reject) => {
            const consulta = `SELECT * FROM alumnos AS a WHERE a.matriculaAlum=?`;
            
            db.query(consulta, [ matricula ], (err, result) => {
                
                if (err)
                    reject({ msj: 'Error al obtener la informacion del alumno', status:false });
                else
                    resolve(result);
            });
        });
    }

    


}//FIN CLASS

export default Alumno;