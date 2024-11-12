

-- Obtener los horarios de un grupo determinado
SELECT c.idClase, h.idHorario,c.nombre,  h.horaInit, h.horaFin, h.salon, d.nombre, c.grado, c.grupo 
FROM horario as h, clases as c, diassemana as d 
WHERE h.idClase=c.idClase and h.idDiaSemana=d.idDiaSemana and c.grado=5 and grupo='E';

-- Obtener el horario de una clase determinada usando el id
SELECT c.idClase, h.idHorario,c.nombre,  h.horaInit, h.horaFin, h.salon, d.nombre, c.grado, c.grupo 
FROM horario as h, clases as c, diassemana as d 
WHERE h.idClase=c.idClase and h.idDiaSemana=d.idDiaSemana and c.idClase=1;