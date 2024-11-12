import Router from "express";
import { postAlumno, postProfesor, raiz } from "../controllers/registros";
const router=Router();
router.get('', raiz);
router.post('/profesor', postProfesor);
router.post('/alumno', postAlumno);
export default router;