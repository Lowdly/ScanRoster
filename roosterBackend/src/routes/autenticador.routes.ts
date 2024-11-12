import { Router } from 'express';
import { authAlums, authProfes, exAlums, exProf, raiz } from '../controllers/autenticador';
const router= Router();
router.get('',raiz);
router.post('/profesor/:matricula',authProfes);
router.post('/alumno/:matricula',authAlums);
router.get('/alumno-E/:matricula',exAlums);
router.get('/profesor-E/:matricula',exProf);

export default router;