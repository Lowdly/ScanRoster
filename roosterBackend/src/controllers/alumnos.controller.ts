import { Request, Response } from "express";
import mysql from "../db/conect";
import Alumno from "../models/alumno";
import moment from 'moment';

const alumno = new Alumno;

export const getHorario = async (req: Request, res: Response) => {
    
}
export const getClasesHoy = async (req: Request, res: Response) => {
    
}
export const postPasarLista = async (req: Request, res: Response) => {
    const { codigo, matricula } = req.body;
    
    try{
        let claseEncontrada = await alumno.BuscarClase(mysql, codigo);
        if(claseEncontrada.length>0){
            const nombreMateria=claseEncontrada[0].nombre;
            const { grado, grupo }=claseEncontrada[0];
            const alumnoEncontrado:any = await alumno.ObtenerDatosAlumno(mysql, matricula);
            if(alumnoEncontrado.length>0){
                let registroUnico:any=await alumno.VerificarregistroUnico(mysql, codigo, matricula);

                if(registroUnico.length==0){
                    const nomAlumn = alumnoEncontrado[0].nombre;
                    const {apellidoPa, apellidoMa} = alumnoEncontrado[0];
                    const gradoAlum = alumnoEncontrado[0].grado;
                    const grupoAlum = alumnoEncontrado[0].grupo;
                    if(gradoAlum==grado && grupoAlum==grupo ){
                        await alumno.CrearListaHoy(mysql, codigo, matricula);
                        res.json({
                            msj:`El alumno ${nomAlumn} ha regitrado su asistencia en la materia ${nombreMateria}`,
                            nomAlumn:`${nomAlumn} ${apellidoPa} ${apellidoMa}`, 
                            matricula,
                            fecha:new Date(),
                            status:true
                        });
                    }else{
                        res.json({msj:'El Alumno no pertenece a la clase asociada del codigo QR', status:false});
                    }
                }else{
                    const {hora}=registroUnico[0];
                    res.json({msj:`El Alumno ya ha sido resgitrado en esta lista anteriorente a las ${hora}`, status:false});
                }
                
            }else{
                res.json({msj:'no se encuentra la informacion del alumno', status:false});
            }

        }else{
            res.json({msj:'El codigo no esta asociado con ningun horario de alguna clase', status:false});
        }
    }catch(ex){
        res.json(ex);
    }
    
}
export const putActualizarPerfil = async (req: Request, res: Response) => {
    
}
export const postClase = async (req: Request, res: Response) => {
    
}

