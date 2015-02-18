
/**TIPO DE DOCUMENTO*/
INSERT INTO tipo_documento(abreviatura, cantidad_caracteres, denominacion, optlk, tipo_PERrsona) 
VALUES ('RUC', 11, 'Registro unico de contribuyente', CURRENT_TIMESTAMP, 'JURIDICA');

INSERT INTO tipo_documento(abreviatura, cantidad_caracteres, denominacion, optlk, tipo_PERrsona) 
VALUES ('DNI', 8, 'Documento nacional de identidad', CURRENT_TIMESTAMP, 'NATURAL');

INSERT INTO tipo_documento(abreviatura, cantidad_caracteres, denominacion, optlk, tipo_PERrsona) 
VALUES ('PASS', 11, 'Pasaporte', CURRENT_TIMESTAMP, 'NATURAL');

/**PERRSONAS NATURALES*/
INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (1, 'PER','DNI','28212199','JURADO','ALARCON','Carmen Lucrecia','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (2, 'PER','DNI','28213768','PERREZ','MEZA','PERtronila Victoria','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (3, 'PER','DNI','28200766','DEL POZO','CHACON','Yrene','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (4, 'PER','DNI','28214821','QUISPER','PALOMINO','Andres','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (5, 'PER','DNI','28237806','VALDIVIA','PILLACA','Walter Hermenegildo','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (6, 'PER','DNI','28269111','PALOMINO','TORRES','Filomeno','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (7, 'PER','DNI','28213753','HUARANCCAY','GUILLEN','Feliciano','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (8, 'PER','DNI','28202338','ALBITES','OCHOA','Benito','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (9, 'PER','DNI','28205601','TINEO','MORALES','Enma Maria Jesus','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (10, 'PER','DNI','28235769','FERNANDEZ','FLORES','Octavio','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (11, 'PER','DNI','28289835','QUISPER','LLACCTAHUAMAN','Carlos','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (12, 'PER','DNI','28262098','BRINGAS','CALDERON','Victor Raul','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (13, 'PER','DNI','28207191','PILLACA','VARGAS','Marciana Julia','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (14, 'PER','DNI','21092365','VALENZUELA','AMARO','Teofila Victoria','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);
	
INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (15, 'PER','DNI','09181356','AGUILAR','ROJAS','Isaac','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (16, 'PER','DNI','28215545','JANAMPA','AUQUI','Francisco','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);
	
INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (17, 'PER','DNI','28223351','CARDENAS','MENDOZA','Rosa M. A','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (18, 'PER','DNI','23697235','ORTIZ','RODRIGUEZ','Marcelino','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);
	
INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (19, 'PER','DNI','28237294','CONGA','SOTO','Socorro Luz','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);
	
INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (20, 'PER','DNI','28201392','CARDENAS','ORE','Julio','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (21, 'PER','DNI','28236387','ALLCCA','LEON','Nemesio','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (22, 'PER','DNI','28291967','HUARI','ALFARO','Francisco','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (23, 'PER','DNI','28220014','LAVIO','CONDE','Francisco','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (24, 'PER','DNI','28206070','BERROCAL','CANALES','Gregorio','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (25, 'PER','DNI','28218966','YARANGA','ZAGA','Bertha Celina','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (26, 'PER','DNI','28216370','ESPINO','LANDA','Juan Domingo','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (27, 'PER','DNI','00123520','MITMA','CHUMBILE','Mamerto','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (28, 'PER','DNI','28268159','ACEVEDO','AVILES','Fausto','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);							

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (29, 'PER','DNI','80499976','ANAYA','VASQUEZ','THARWIN HUBERT','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);							

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (30, 'PER','DNI','28312414','CURIHUAMAN','FLORES','TEOFILO','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);							

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (31, 'PER','DNI','41293587','DE LA CRUZ','CERDA','EDGAR','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);							

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (32, 'PER','DNI','80365056','HUAMANI','ROMERO','GERARDO','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);							

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (33, 'PER','DNI','28288536','MENESES','QUISPER','HECTOR','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);							

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (34, 'PER','DNI','10468407','MORALES','ATAUPILLCO','WILBER','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);							

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (35, 'PER','DNI','28302819','NAJARRO','GALVEZ','ARTEMIO','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);							

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (36, 'PER','DNI','40839257','ORIUNDO','QUISPER','FREDY','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);							

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (37, 'PER','DNI','40208005','PRADO','GOMEZ','ARTURO','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);							

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (38, 'PER','DNI','28315991','RODRIGUEZ','QUISPER','DAVID','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);							

INSERT INTO PERrsona_natural(id,codigo_pais,tipo_documento,numero_documento,aPERllido_paterno,aPERllido_materno,nombres,fecha_nacimiento,estado_civil,sexo,optlk)
VALUES (39, 'PER','DNI','28317407','ROSADO','GARCIA','JORGE LUIS','1985-02-16','SOLTERO','MASCULINO', CURRENT_TIMESTAMP);							

	
 