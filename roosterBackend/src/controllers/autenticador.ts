import { Request, Response } from "express";
import mysql from "../db/conect";
import Auth from "../models/auth";
const auth = new Auth();

export const raiz=(req: Request, res: Response)=>{
    res.json({msj:'Ruta para autenticar usuarios de la app'});
}



export const authProfes = async (req: Request, res: Response) => {
    const {matricula} = req.params;
    const {password}=req.body;  

    try {
        const resutl = await auth.AutenticarProfesor(mysql,matricula, password);
        res.json(resutl);
    } catch (ex) {
        res.json(ex);
        
    } 
   
}





export const authAlums = async (req: Request, res: Response) => {
    const {matricula} = req.params;
    const {password}=req.body;  

    try {
        const result = await auth.AutenticarAlumno(mysql,matricula, password);
        res.json(result);
    } catch (ex) {
        res.json(ex);
    }
   
}
export const exAlums = async (req: Request, res: Response) => {
    const {matricula} = req.params;
    try {
        const result = await auth.AlumExiste(mysql,matricula);
        res.json(result);
    } catch (ex) {
        res.status(404).json(ex);
    }   
}
export const exProf = async (req: Request, res: Response) => {
    const {matricula} = req.params;
    try {
        const result = await auth.ProfExiste(mysql,matricula);
        res.json(result);
    } catch (ex) {
        res.status(404).json(ex);
    }   
}

