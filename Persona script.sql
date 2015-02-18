
/**TIPO DE DOCUMENTO*/
INSERT INTO tipo_documento(abreviatura, cantidad_caracteres, denominacion, optlk, tipo_persona) 
VALUES ('RUC', 11, 'Registro unico de contribuyente', CURRENT_TIMESTAMP, 'JURIDICA');

INSERT INTO tipo_documento(abreviatura, cantidad_caracteres, denominacion, optlk, tipo_persona) 
VALUES ('DNI', 8, 'Documento nacional de identidad', CURRENT_TIMESTAMP, 'NATURAL');

INSERT INTO tipo_documento(abreviatura, cantidad_caracteres, denominacion, optlk, tipo_persona) 
VALUES ('PASS', 11, 'Pasaporte', CURRENT_TIMESTAMP, 'NATURAL');

/**PERSONAS NATURALES*/
INSERT INTO persona_natural(id,codigo_pais,tipo_documento,numero_documento,apellido_paterno,apellido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (1, 'PE','DNI','28212199','JURADO','ALARCON','Carmen Lucrecia','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO persona_natural(id,codigo_pais,tipo_documento,numero_documento,apellido_paterno,apellido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (2, 'PE','DNI','28213768','PEREZ','MEZA','Petronila Victoria','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO persona_natural(id,codigo_pais,tipo_documento,numero_documento,apellido_paterno,apellido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (3, 'PE','DNI','28200766','DEL POZO','CHACON','Yrene','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO persona_natural(id,codigo_pais,tipo_documento,numero_documento,apellido_paterno,apellido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (4, 'PE','DNI','28214821','QUISPE','PALOMINO','Andres','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO persona_natural(id,codigo_pais,tipo_documento,numero_documento,apellido_paterno,apellido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (5, 'PE','DNI','28237806','VALDIVIA','PILLACA','Walter Hermenegildo','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO persona_natural(id,codigo_pais,tipo_documento,numero_documento,apellido_paterno,apellido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (6, 'PE','DNI','28269111','PALOMINO','TORRES','Filomeno','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO persona_natural(id,codigo_pais,tipo_documento,numero_documento,apellido_paterno,apellido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (7, 'PE','DNI','28213753','HUARANCCAY','GUILLEN','Feliciano','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO persona_natural(id,codigo_pais,tipo_documento,numero_documento,apellido_paterno,apellido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (8, 'PE','DNI','28202338','ALBITES','OCHOA','Benito','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO persona_natural(id,codigo_pais,tipo_documento,numero_documento,apellido_paterno,apellido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (9, 'PE','DNI','28205601','TINEO','MORALES','Enma Maria Jesus','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO persona_natural(id,codigo_pais,tipo_documento,numero_documento,apellido_paterno,apellido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (10, 'PE','DNI','28235769','FERNANDEZ','FLORES','Octavio','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO persona_natural(id,codigo_pais,tipo_documento,numero_documento,apellido_paterno,apellido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (11, 'PE','DNI','28289835','QUISPE','LLACCTAHUAMAN','Carlos','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO persona_natural(id,codigo_pais,tipo_documento,numero_documento,apellido_paterno,apellido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (12, 'PE','DNI','28262098','BRINGAS','CALDERON','Victor Raul','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO persona_natural(id,codigo_pais,tipo_documento,numero_documento,apellido_paterno,apellido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (13, 'PE','DNI','28207191','PILLACA','VARGAS','Marciana Julia','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO persona_natural(id,codigo_pais,tipo_documento,numero_documento,apellido_paterno,apellido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (14, 'PE','DNI','21092365','VALENZUELA','AMARO','Teofila Victoria','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);
	
INSERT INTO persona_natural(id,codigo_pais,tipo_documento,numero_documento,apellido_paterno,apellido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (15, 'PE','DNI','09181356','AGUILAR','ROJAS','Isaac','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO persona_natural(id,codigo_pais,tipo_documento,numero_documento,apellido_paterno,apellido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (16, 'PE','DNI','28215545','JANAMPA','AUQUI','Francisco','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);
	
INSERT INTO persona_natural(id,codigo_pais,tipo_documento,numero_documento,apellido_paterno,apellido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (17, 'PE','DNI','28223351','CARDENAS','MENDOZA','Rosa M. A','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO persona_natural(id,codigo_pais,tipo_documento,numero_documento,apellido_paterno,apellido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (18, 'PE','DNI','23697235','ORTIZ','RODRIGUEZ','Marcelino','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);
	
INSERT INTO persona_natural(id,codigo_pais,tipo_documento,numero_documento,apellido_paterno,apellido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (19, 'PE','DNI','28237294','CONGA','SOTO','Socorro Luz','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);
	
INSERT INTO persona_natural(id,codigo_pais,tipo_documento,numero_documento,apellido_paterno,apellido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (20, 'PE','DNI','28201392','CARDENAS','ORE','Julio','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO persona_natural(id,codigo_pais,tipo_documento,numero_documento,apellido_paterno,apellido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (21, 'PE','DNI','28236387','ALLCCA','LEON','Nemesio','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO persona_natural(id,codigo_pais,tipo_documento,numero_documento,apellido_paterno,apellido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (22, 'PE','DNI','28291967','HUARI','ALFARO','Francisco','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO persona_natural(id,codigo_pais,tipo_documento,numero_documento,apellido_paterno,apellido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (23, 'PE','DNI','28220014','LAVIO','CONDE','Francisco','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO persona_natural(id,codigo_pais,tipo_documento,numero_documento,apellido_paterno,apellido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (24, 'PE','DNI','28206070','BERROCAL','CANALES','Gregorio','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO persona_natural(id,codigo_pais,tipo_documento,numero_documento,apellido_paterno,apellido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (25, 'PE','DNI','28218966','YARANGA','ZAGA','Bertha Celina','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO persona_natural(id,codigo_pais,tipo_documento,numero_documento,apellido_paterno,apellido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (26, 'PE','DNI','28216370','ESPINO','LANDA','Juan Domingo','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO persona_natural(id,codigo_pais,tipo_documento,numero_documento,apellido_paterno,apellido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (27, 'PE','DNI','00123520','MITMA','CHUMBILE','Mamerto','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO persona_natural(id,codigo_pais,tipo_documento,numero_documento,apellido_paterno,apellido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (28, 'PE','DNI','28268159','ACEVEDO','AVILES','Fausto','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);							
