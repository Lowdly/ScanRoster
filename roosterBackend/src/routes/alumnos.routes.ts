import { Router } from "express";
import { postPasarLista } from "../controllers/alumnos.controller";


const router=Router();

//Rutas de clases 
router.get('/clases/:matricula',  );
router.post('/lista',  postPasarLista);



export default router ;