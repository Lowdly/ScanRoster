import { Connection } from "mysql";

class Profesor {
    constructor() { }

    ObtenerHorarioProfesor(db: Connection, matricula: string) {
        return new Promise((resolve, reject) => {
            const consulta = `SELECT c.idClase , p.matricula, p.nombre, c.nombre as 'clase', c.grado, c.grupo, h.horaInit, h.horaFin, h.salon,d.nombre as 'diasemana'
            FROM clases as c, profesor as p , horario as h, diasSemana as d 
            WHERE p.matricula=? and p.matricula=c.matriculaProfe and c.idClase=h.idClase and h.idDiaSemana=d.idDiaSemana`;

            db.query(consulta, [matricula], (err, results) => {
                if (err) {
                    reject({ msj: 'Error al obtener la consulta' });
                } else {
                    if (results.length > 0)
                        resolve({ clases: results });
                    else
                        reject({ msj: 'No hay clases registradas' });
                }
            });
        });
    }
    ObtenerHorarioHoy(db: Connection, matricula: string, dia: string) {
        return new Promise((resolve, reject) => {
            const consulta = `SELECT  c.idClase, p.matricula, p.nombre, c.nombre as 'clase', c.grado, c.grupo, h.horaInit, h.horaFin, h.salon,d.nombre as 'diassemana' ,h.idHorario
            FROM clases as c, profesor as p , horario as h, diasSemana as d 
            WHERE p.matricula=? and d.nombre=? and p.matricula=c.matriculaProfe and c.idClase=h.idClase and h.idDiaSemana=d.idDiaSemana`;

            db.query(consulta, [matricula, dia], (err, clases) => {
                if (err) {
                    reject({ msj: 'Error al obtener la consulta' });
                } else {
                    if (clases.length > 0)
                        resolve({ clases });
                    else
                        reject({ msj: 'No hay clases para el dia de hoy' });
                }
            });
        });
    }
    ObtenerHorarioClassId(db: Connection, idClase: string) {
        return new Promise((resolve, reject) => {
            const consulta = `SELECT c.idClase, h.idHorario,c.nombre as 'clase',  h.horaInit, h.horaFin, h.salon, d.nombre as 'diasemana', c.grado, c.grupo 
            FROM horario as h, clases as c, diasSemana as d 
            WHERE h.idClase=c.idClase and h.idDiaSemana=d.idDiaSemana and c.idClase=?;`;
            db.query(consulta, [idClase], (err, horario) => {
                if (err) {
                    reject({ msj: 'Error al obtener el horario de la clase' });
                } else {
                    if (horario.length > 0) {
                        resolve({horario ,status:true});
                    } else {
                        reject({ msj: `La clase no tiene ningun horario registrado` , status:false});
                    }
                }
            });
        });
    }

    ObtenerAlumnosAsistidos(db: Connection, codigo: string) {
        return new Promise((resolve, reject) => {
            const consulta = `
            SELECT  la.matriculaAlum, a.nombre, apellidoPa, apellidoMa, dia, la.hora as 'hora registrado'
            FROM listaAlums as la, alumnos as a, lista as li, horario as h, clases as c 
            WHERE la.matriculaAlum=a.matriculaAlum and la.codigo=li.codigo and li.idHorario=h.idHorario and h.idClase=c.idClase and li.codigo=?;`;
            db.query(consulta, [codigo], (err, results) => {
                if (err) {
                    reject({ msj: 'Error al obtener la consulta', err });
                } else {
                    if (results.length > 0)
                        resolve({ alumsAsist: results, status:true });
                    else
                        reject({ msj: 'No hay alumnos asistidos', status:false });
                }
            });
        });

    }

    ObtenerClasesProfesor(db: Connection, matricula: string) {
        return new Promise((resolve, reject) => {
            const consulta = `SELECT c.idClase, c.nombre as 'clase' , c.grado, c.grupo FROM clases as c, profesor as p 
                            WHERE c.matriculaProfe=p.matricula and p.matricula=?;`;

            db.query(consulta, [matricula], (err, results) => {
                if (err) {
                    reject({ msj: 'Error al obtener la consulta' });
                } else {
                    if (results.length > 0)
                        resolve({ clases: results });
                    else
                        reject({ msj: 'No hay clases registradas' });
                }
            });
        });
    }

    ObtenerCodigoClaseHoy(db: Connection, idHorario:string){
        return new Promise((resolve, reject) => {
            const consulta = `SELECT l.codigo ,c.nombre FROM lista AS l, horario AS h, clases AS c 
            WHERE l.idHorario=h.idHorario AND c.idClase=h.idClase AND l.dia=CURDATE() AND h.idHorario=? ;`;

            db.query(consulta, [idHorario], (err, results) => {
                if (err) {
                    reject({ msj: 'Error al obtener la consulta' });
                } else {
                    if (results.length > 0)
                        resolve({ results });
                    else
                        reject({ msj: 'La clase no tiene codigo asociado el da de hoy', status:false});

                }
            });
        });
    }

    ObtenerHistorialLista(db: Connection, grado: string, grupo: string, clase: string) {
        return new Promise((resolve, reject) => {
            const consulta = `SELECT li.dia as 'fecha' , li.codigo, di.nombre as 'diasemana', c.nombre as 'clase' , c.grado, c.grupo
            FROM clases as c, horario as h, lista as li, diasSemana as di
            WHERE c.grado=?and c.grupo=? and c.diasSemanare=? and  c.idClase=h.idClase and di.idDiaSemana=h.idDiaSemana and h.idHorario=li.idHorario;`;

            db.query(consulta, [grado, grupo, clase], (err, results) => {
                if (err) {
                    reject({ msj: 'Error al obtener la consulta' });
                } else {
                    if (results.length > 0)
                        resolve({ historyList: results });
                    else
                        reject({ msj: 'No hay pases de listas registrados en esta clase' });

                }
            });
        });
    }

    CrearListaHoy(db: Connection, codigo: string, horario: string) {
        return new Promise((resolve, reject) => {
            const consulta = `INSERT INTO lista(codigo, dia, idHorario) VALUES (?,NOW(),?)`;
            db.query(consulta, [
                codigo, horario //, limite, duracion
            ], (err, result) => {
                if (err)
                    reject({ msj: 'Error al registrar la lista de hoy' , err});
                else
                    resolve({ msj: 'Se ha asociado el codigo correctamente' });
            });
        });
    }
    CrearHorario(db: Connection, idClase: string, horaInit: string, horaFin: string, salon: string, idDiaSemana: string) {
        return new Promise((resolve, reject) => {
            const consulta = `INSERT INTO horario( horaInit, horaFin, salon, idDiaSemana, idClase) VALUES (?, ?, ?, ?, ?)`;
            db.query(consulta, [
                horaInit, horaFin, salon, idDiaSemana, idClase //, limite, duracion
            ], (err, result) => {
                if (err)
                    reject({ msj: 'Error al registrar el horario' , status:false});
                else
                    resolve({ msj: 'Se ha registrado correctamente el horario' ,status:true});
            });
        });
    }

    RegistrarAlumnoListaHoy(db: Connection, codigo: string, matriculaAlum: string) {
        return new Promise((resolve, reject) => {
            const consulta = 'INSERT INTO listaalums VALUES (?,?,NOW())';
            db.query(consulta, [
                codigo, matriculaAlum
            ], (error) => {
                if (error)
                    reject({ msj: 'Error al registrar el alumno a la lista de hoy' });
                else
                    resolve({ msj: `El alumno ${matriculaAlum} se ha agregado a la lista de hoy` });

            });
        });
    }


    CrearClase(db: Connection, nombre: string, grado: string, grupo: string, matricula: string) {
        return new Promise((resolve, reject) => {
            let consulta = `INSERT INTO clases(nombre, grado, grupo, matriculaProfe) VALUES (?, ?, ?, ?);`;
            db.query(consulta, [nombre, grado, grupo, matricula], (err, result) => {
                if (err)
                    reject({ msj: 'Error al realizar el registro de la clase' , status:false});
                else
                    resolve({ msj: 'La clase a sido agregada con exito',  status:true });
            });
        });
    }

    BuscarAlumno(db: Connection, matriculaAlum: string): Promise<any> {
        return new Promise(
            (resolve, reject) => {
                let consulta = `SELECT * FROM alumnos as a WHERE a.matriculaAlum=? `;
                db.query(consulta, [matriculaAlum], (err, result) => {
                    if (err)
                        reject({msj:'Error al verificar si el alumno esta registrado'});
                    else {
                        if (result.length > 0)
                            resolve(result[0]);
                        else
                            reject({msj:`No existe el alumno con matricula ${matriculaAlum}`});
                    }
                });
            }
        );
    }


}//FIN CLASS

export default Profesor;