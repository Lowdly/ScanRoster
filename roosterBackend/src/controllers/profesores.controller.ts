import {Request, Response} from "express";
import mysql from "../db/conect";
import Profesor from "../models/profesor";

const profesor = new Profesor();

export const getHorarioProfe = async (req : Request, res : Response) => {
    const {matricula} = req.params;    
    try{
        const result = await profesor.ObtenerHorarioProfesor(mysql, matricula);
        res.json(result);
    }catch(ex){
        res.json(ex);
    }

}
export const getClases = async (req : Request, res : Response) => {
    const {matricula} = req.params; 
    try{
        const result = await profesor.ObtenerClasesProfesor(mysql, matricula);
        res.json(result);
    }catch(ex){
        res.json(ex);
    }
}
export const getHorarioHoy = async (req : Request, res : Response) => {
    const {matricula, dia} = req.params;
    
    try{
        const resultado = await profesor.ObtenerHorarioHoy(mysql, matricula, dia);
        res.json(resultado);
    }catch(ex){
        res.json(ex);
    }

}
export const getHorarioIdClass = async (req : Request, res : Response) => {
    const {idClase} = req.params;
    try {
        const result = await profesor.ObtenerHorarioClassId(mysql, idClase);
        res.json(result);
    } catch (ex) {
        res.json(ex);
    }
}
export const getAlumsAsistidos = async (req : Request, res : Response) => {
    const {codigo} = req.params;
    try {
        const result = await profesor.ObtenerAlumnosAsistidos(mysql, codigo);
        res.json(result); 
    } catch (ex) {
        res.json(ex);
    }
}
export const getHistorialListas = async (req : Request, res : Response) => {
    const {grado, grupo, clase} = req.params;
    try {
        const result = await profesor.ObtenerHistorialLista(mysql,grado, grupo, clase);
        res.json(result);
    } catch (ex) {
        res.status(404).json(ex);
    }
}
export const postListaHoy = async (req : Request, res : Response) => {
    const {codigo} = req.body;
    const {horario} = req.params;
    try {
        const result = await profesor.CrearListaHoy(mysql, codigo, horario);
        res.json(result);
    } catch (ex) {
        res.json(ex);
    }
}
export const postHorario = async (req : Request, res : Response) => {
    const {horaInit, horaFin, salon, idDiaSemana} = req.body;
    const {idClase} = req.params;
    try {
        const result = await profesor.CrearHorario(mysql,idClase, horaInit, horaFin, salon, idDiaSemana);
        res.json(result);
    } catch (ex) {
        res.json(ex);
    }
}
export const postPassList = async (req : Request, res : Response) => {
    const {codigo, matricula} = req.params;
    try {
        const alumno: any = await profesor.BuscarAlumno(mysql, matricula);
        const {matriculaAlum} = alumno;        
        const result = await profesor.RegistrarAlumnoListaHoy(mysql, codigo, matriculaAlum);
        res.json(result);
    } catch (ex) {
        res.status(404).json(ex);
    }
}
export const getCodigoClass = async (req : Request, res : Response) => {
    const {idHorario} = req.params;
    try {
        const codigo: any = await profesor.ObtenerCodigoClaseHoy(mysql, idHorario);
        
        res.json(codigo);
    } catch (ex) {
        res.json(ex);
    }
}
export const postClase = async (req : Request, res : Response) => {
    const {matricula} = req.params;
    const {nombre, grado, grupo} = req.body;

    try{
        const result = await profesor.CrearClase(mysql, nombre, grado, grupo, matricula);
        res.json(result);
    }catch(ex){
        res.json(ex);
    }
}
