import { Request, Response } from "express";
import mysql from "../db/conect";

export const raiz=(req: Request, res: Response)=>{
    res.json({msj:'Ruta para realizar registros'});
}

export const postProfesor = async (req: Request, res: Response) => {
    const {matricula, nombre, apellidoPa, apellidoMa, password} = req.body;
    mysql.query("INSERT INTO profesor VALUES (?,?,?,?,?);",
    [matricula.trim(), nombre.trim(), apellidoPa.trim(), apellidoMa.trim(), password.trim()],(err, result)=>{
        if(err){
            res.json({msj:'Error al registrar al profesor',"status":false});
        }else{
            res.json({ msj: 'Se ha registrado correctamente el Profesor ' + nombre , "status":true});
        }
    });
}
export const postAlumno = async (req: Request, res: Response) => {
    const {matricula, nombre, apellidoPa, apellidoMa, grado, grupo, password} = req.body;
    mysql.query("INSERT INTO alumnos VALUES (?,?,?,?,?,?,?);",
    [matricula.trim(), nombre.trim(), apellidoPa.trim(), apellidoMa.trim(), grado, grupo.trim(), password.trim()],(err, result)=>{
        if(err){
            res.json({msj:'Error al registrar al alumno',"status":false});
        }else{
            res.json({ msj: 'Se ha registrado correctamente el Alumno ' + nombre , "status":true});
        }
    });
}