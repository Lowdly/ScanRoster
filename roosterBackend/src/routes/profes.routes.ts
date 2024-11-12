import { Router } from "express";
import { getAlumsAsistidos, getHorarioProfe, getHorarioHoy, getClases, getHistorialListas, postClase, postListaHoy, postPassList, getHorarioIdClass, postHorario, getCodigoClass } from '../controllers/profesores.controller';


const router=Router();

//Rutas de clases 
router.get('/clases/:matricula',  getClases);
router.post('/clase/:matricula',  postClase);

//Rutas de horario
router.get('/horario/:matricula',  getHorarioProfe);
router.get('/horario/:matricula/:dia',  getHorarioHoy);
router.get('/horario-id/:idClase',  getHorarioIdClass);
router.post('/horario-c/:idClase',  postHorario);


//Rutas de listas
router.post('/lista/:horario',  postListaHoy);
router.get('/lista/:grado/:grupo/:clase',  getHistorialListas);
router.get('/lista/alums/:codigo',  getAlumsAsistidos);
router.post('/lista/passList/:codigo/:matricula',  postPassList);
router.get('/lista/passList-c/:idHorario',  getCodigoClass);



export default router ;