/**SUCURSALES*/
INSERT INTO sucursal(id, abreviatura, denominacion, estado, optlk)
VALUES (1, 'Lim.', 'Lima', 'T', CURRENT_TIMESTAMP);

INSERT INTO sucursal(id, abreviatura, denominacion, estado, optlk)
VALUES (2, 'Ayac.', 'Ayacucho', 'T', CURRENT_TIMESTAMP);

/**AGENCIAS*/
INSERT INTO agencia(id, abreviatura, codigo, denominacion, estado, ubigeo, sucursal_id, optlk)
VALUES (1, 'SJL', '01', 'San juan de lurigancho', 'T', '010101', 1, CURRENT_TIMESTAMP);

INSERT INTO agencia(id, abreviatura, codigo, denominacion, estado, ubigeo, sucursal_id, optlk)
VALUES (2, 'Miraf.', '02', 'Miraflores', 'T', '010101', 1, CURRENT_TIMESTAMP);

INSERT INTO agencia(id, abreviatura, codigo, denominacion, estado, ubigeo, sucursal_id, optlk)
VALUES (3, 'Mol.', '03', 'La molina', 'T', '010101', 1, CURRENT_TIMESTAMP);


INSERT INTO agencia(id, abreviatura, codigo, denominacion, estado, ubigeo, sucursal_id, optlk)
VALUES (4, 'Huam.', '11', 'Huamanga', 'T', '010101', 2, CURRENT_TIMESTAMP);

INSERT INTO agencia(id, abreviatura, codigo, denominacion, estado, ubigeo, sucursal_id, optlk)
VALUES (5, 'JN.', '12', 'Jesus nazareno', 'T', '010101', 2, CURRENT_TIMESTAMP);

INSERT INTO agencia(id, abreviatura, codigo, denominacion, estado, ubigeo, sucursal_id, optlk)
VALUES (6, 'Huant.', '13', 'Huanta', 'T', '010101', 2, CURRENT_TIMESTAMP);


/**BOVEDAS*/
INSERT INTO boveda(id, abierto, denominacion, estado, estadomovimiento, moneda, agencia_id, optlk)
VALUES (1, 'F', 'Boveda nuevos soles', 'T', 'F', 'PEN', 1, CURRENT_TIMESTAMP);

INSERT INTO boveda(id, abierto, denominacion, estado, estadomovimiento, moneda, agencia_id, optlk)
VALUES (2, 'F', 'Boveda dolares americanos', 'T', 'F', 'USN', 1, CURRENT_TIMESTAMP);

INSERT INTO boveda(id, abierto, denominacion, estado, estadomovimiento, moneda, agencia_id, optlk)
VALUES (3, 'F', 'Boveda euros', 'T', 'F', 'EUR', 1, CURRENT_TIMESTAMP);


INSERT INTO boveda(id, abierto, denominacion, estado, estadomovimiento, moneda, agencia_id, optlk)
VALUES (4, 'F', 'Boveda nuevos soles', 'T', 'F', 'PEN', 2, CURRENT_TIMESTAMP);

INSERT INTO boveda(id, abierto, denominacion, estado, estadomovimiento, moneda, agencia_id, optlk)
VALUES (5, 'F', 'Boveda dolares americanos', 'T', 'F', 'USN', 2, CURRENT_TIMESTAMP);

INSERT INTO boveda(id, abierto, denominacion, estado, estadomovimiento, moneda, agencia_id, optlk)
VALUES (6, 'F', 'Boveda euros', 'T', 'F', 'EUR', 2, CURRENT_TIMESTAMP);


INSERT INTO boveda(id, abierto, denominacion, estado, estadomovimiento, moneda, agencia_id, optlk)
VALUES (7, 'F', 'Boveda nuevos soles', 'T', 'F', 'PEN', 3, CURRENT_TIMESTAMP);

INSERT INTO boveda(id, abierto, denominacion, estado, estadomovimiento, moneda, agencia_id, optlk)
VALUES (8, 'F', 'Boveda dolares americanos', 'T', 'F', 'USN', 3, CURRENT_TIMESTAMP);

INSERT INTO boveda(id, abierto, denominacion, estado, estadomovimiento, moneda, agencia_id, optlk)
VALUES (9, 'F', 'Boveda euros', 'T', 'F', 'EUR', 3, CURRENT_TIMESTAMP);


INSERT INTO boveda(id, abierto, denominacion, estado, estadomovimiento, moneda, agencia_id, optlk)
VALUES (10, 'F', 'Boveda nuevos soles', 'T', 'F', 'PEN', 4, CURRENT_TIMESTAMP);

INSERT INTO boveda(id, abierto, denominacion, estado, estadomovimiento, moneda, agencia_id, optlk)
VALUES (11, 'F', 'Boveda dolares americanos', 'T', 'F', 'USN', 4, CURRENT_TIMESTAMP);

INSERT INTO boveda(id, abierto, denominacion, estado, estadomovimiento, moneda, agencia_id, optlk)
VALUES (12, 'F', 'Boveda euros', 'T', 'F', 'EUR', 4, CURRENT_TIMESTAMP);


INSERT INTO boveda(id, abierto, denominacion, estado, estadomovimiento, moneda, agencia_id, optlk)
VALUES (13, 'F', 'Boveda nuevos soles', 'T', 'F', 'PEN', 5, CURRENT_TIMESTAMP);

INSERT INTO boveda(id, abierto, denominacion, estado, estadomovimiento, moneda, agencia_id, optlk)
VALUES (14, 'F', 'Boveda dolares americanos', 'T', 'F', 'USN', 5, CURRENT_TIMESTAMP);

INSERT INTO boveda(id, abierto, denominacion, estado, estadomovimiento, moneda, agencia_id, optlk)
VALUES (15, 'F', 'Boveda euros', 'T', 'F', 'EUR', 5, CURRENT_TIMESTAMP);


INSERT INTO boveda(id, abierto, denominacion, estado, estadomovimiento, moneda, agencia_id, optlk)
VALUES (16, 'F', 'Boveda nuevos soles', 'T', 'F', 'PEN', 6, CURRENT_TIMESTAMP);

INSERT INTO boveda(id, abierto, denominacion, estado, estadomovimiento, moneda, agencia_id, optlk)
VALUES (17, 'F', 'Boveda dolares americanos', 'T', 'F', 'USN', 6, CURRENT_TIMESTAMP);

INSERT INTO boveda(id, abierto, denominacion, estado, estadomovimiento, moneda, agencia_id, optlk)
VALUES (18, 'F', 'Boveda euros', 'T', 'F', 'EUR', 6, CURRENT_TIMESTAMP);


/**CAJAS*/
INSERT INTO caja(id, abierto, denominacion, estado, estadomovimiento, optlk, agencia_id)
VALUES (1, 'F', 'Caja01', 'T', 'F', CURRENT_TIMESTAMP, 1);

INSERT INTO caja(id, abierto, denominacion, estado, estadomovimiento, optlk, agencia_id)
VALUES (2, 'F', 'Caja02', 'T', 'F', CURRENT_TIMESTAMP, 1);

INSERT INTO caja(id, abierto, denominacion, estado, estadomovimiento, optlk, agencia_id)
VALUES (3, 'F', 'Caja03', 'T', 'F', CURRENT_TIMESTAMP, 1);

INSERT INTO caja(id, abierto, denominacion, estado, estadomovimiento, optlk, agencia_id)
VALUES (4, 'F', 'Caja04', 'T', 'F', CURRENT_TIMESTAMP, 1);


INSERT INTO caja(id, abierto, denominacion, estado, estadomovimiento, optlk, agencia_id)
VALUES (5, 'F', 'Caja01', 'T', 'F', CURRENT_TIMESTAMP, 2);

INSERT INTO caja(id, abierto, denominacion, estado, estadomovimiento, optlk, agencia_id)
VALUES (6, 'F', 'Caja02', 'T', 'F', CURRENT_TIMESTAMP, 2);

INSERT INTO caja(id, abierto, denominacion, estado, estadomovimiento, optlk, agencia_id)
VALUES (7, 'F', 'Caja03', 'T', 'F', CURRENT_TIMESTAMP, 2);

INSERT INTO caja(id, abierto, denominacion, estado, estadomovimiento, optlk, agencia_id)
VALUES (8, 'F', 'Caja04', 'T', 'F', CURRENT_TIMESTAMP, 2);


INSERT INTO caja(id, abierto, denominacion, estado, estadomovimiento, optlk, agencia_id)
VALUES (9, 'F', 'Caja01', 'T', 'F', CURRENT_TIMESTAMP, 3);

INSERT INTO caja(id, abierto, denominacion, estado, estadomovimiento, optlk, agencia_id)
VALUES (10, 'F', 'Caja02', 'T', 'F', CURRENT_TIMESTAMP, 3);

INSERT INTO caja(id, abierto, denominacion, estado, estadomovimiento, optlk, agencia_id)
VALUES (11, 'F', 'Caja03', 'T', 'F', CURRENT_TIMESTAMP, 3);

INSERT INTO caja(id, abierto, denominacion, estado, estadomovimiento, optlk, agencia_id)
VALUES (12, 'F', 'Caja04', 'T', 'F', CURRENT_TIMESTAMP, 3);


INSERT INTO caja(id, abierto, denominacion, estado, estadomovimiento, optlk, agencia_id)
VALUES (13, 'F', 'Caja01', 'T', 'F', CURRENT_TIMESTAMP, 4);

INSERT INTO caja(id, abierto, denominacion, estado, estadomovimiento, optlk, agencia_id)
VALUES (14, 'F', 'Caja02', 'T', 'F', CURRENT_TIMESTAMP, 4);

INSERT INTO caja(id, abierto, denominacion, estado, estadomovimiento, optlk, agencia_id)
VALUES (15, 'F', 'Caja03', 'T', 'F', CURRENT_TIMESTAMP, 4);

INSERT INTO caja(id, abierto, denominacion, estado, estadomovimiento, optlk, agencia_id)
VALUES (16, 'F', 'Caja04', 'T', 'F', CURRENT_TIMESTAMP, 4);


INSERT INTO caja(id, abierto, denominacion, estado, estadomovimiento, optlk, agencia_id)
VALUES (17, 'F', 'Caja01', 'T', 'F', CURRENT_TIMESTAMP, 5);

INSERT INTO caja(id, abierto, denominacion, estado, estadomovimiento, optlk, agencia_id)
VALUES (18, 'F', 'Caja02', 'T', 'F', CURRENT_TIMESTAMP, 5);

INSERT INTO caja(id, abierto, denominacion, estado, estadomovimiento, optlk, agencia_id)
VALUES (19, 'F', 'Caja03', 'T', 'F', CURRENT_TIMESTAMP, 5);

INSERT INTO caja(id, abierto, denominacion, estado, estadomovimiento, optlk, agencia_id)
VALUES (20, 'F', 'Caja04', 'T', 'F', CURRENT_TIMESTAMP, 5);


INSERT INTO caja(id, abierto, denominacion, estado, estadomovimiento, optlk, agencia_id)
VALUES (21, 'F', 'Caja01', 'T', 'F', CURRENT_TIMESTAMP, 6);

INSERT INTO caja(id, abierto, denominacion, estado, estadomovimiento, optlk, agencia_id)
VALUES (22, 'F', 'Caja02', 'T', 'F', CURRENT_TIMESTAMP, 6);

INSERT INTO caja(id, abierto, denominacion, estado, estadomovimiento, optlk, agencia_id)
VALUES (23, 'F', 'Caja03', 'T', 'F', CURRENT_TIMESTAMP, 6);

INSERT INTO caja(id, abierto, denominacion, estado, estadomovimiento, optlk, agencia_id)
VALUES (24, 'F', 'Caja04', 'T', 'F', CURRENT_TIMESTAMP, 6);


/**BOVEDA_CAJA*/
INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (1, 'T', CURRENT_TIMESTAMP, 0, 1, 1);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (2, 'T', CURRENT_TIMESTAMP, 0, 2, 1);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (3, 'T', CURRENT_TIMESTAMP, 0, 3, 1);


INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (4, 'T', CURRENT_TIMESTAMP, 0, 1, 2);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (5, 'T', CURRENT_TIMESTAMP, 0, 2, 2);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (6, 'T', CURRENT_TIMESTAMP, 0, 3, 2);


INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (7, 'T', CURRENT_TIMESTAMP, 0, 1, 3);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (8, 'T', CURRENT_TIMESTAMP, 0, 2, 3);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (9, 'T', CURRENT_TIMESTAMP, 0, 3, 3);


INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (10, 'T', CURRENT_TIMESTAMP, 0, 1, 4);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (11, 'T', CURRENT_TIMESTAMP, 0, 2, 4);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (12, 'T', CURRENT_TIMESTAMP, 0, 3, 4);





INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (13, 'T', CURRENT_TIMESTAMP, 0, 4, 5);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (14, 'T', CURRENT_TIMESTAMP, 0, 5, 5);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (15, 'T', CURRENT_TIMESTAMP, 0, 6, 5);


INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (16, 'T', CURRENT_TIMESTAMP, 0, 4, 6);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (17, 'T', CURRENT_TIMESTAMP, 0, 5, 6);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (18, 'T', CURRENT_TIMESTAMP, 0, 6, 6);


INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (19, 'T', CURRENT_TIMESTAMP, 0, 4, 7);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (20, 'T', CURRENT_TIMESTAMP, 0, 5, 7);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (21, 'T', CURRENT_TIMESTAMP, 0, 6, 7);


INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (22, 'T', CURRENT_TIMESTAMP, 0, 4, 8);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (23, 'T', CURRENT_TIMESTAMP, 0, 5, 8);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (24, 'T', CURRENT_TIMESTAMP, 0, 6, 8);





INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (25, 'T', CURRENT_TIMESTAMP, 0, 7, 9);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (26, 'T', CURRENT_TIMESTAMP, 0, 8, 9);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (27, 'T', CURRENT_TIMESTAMP, 0, 9, 9);


INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (28, 'T', CURRENT_TIMESTAMP, 0, 7, 10);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (29, 'T', CURRENT_TIMESTAMP, 0, 8, 10);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (30, 'T', CURRENT_TIMESTAMP, 0, 9, 10);


INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (31, 'T', CURRENT_TIMESTAMP, 0, 7, 11);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (32, 'T', CURRENT_TIMESTAMP, 0, 8, 11);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (33, 'T', CURRENT_TIMESTAMP, 0, 9, 11);


INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (34, 'T', CURRENT_TIMESTAMP, 0, 7, 12);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (35, 'T', CURRENT_TIMESTAMP, 0, 8, 12);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (36, 'T', CURRENT_TIMESTAMP, 0, 9, 12);





INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (37, 'T', CURRENT_TIMESTAMP, 0, 10, 13);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (38, 'T', CURRENT_TIMESTAMP, 0, 11, 13);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (39, 'T', CURRENT_TIMESTAMP, 0, 12, 13);


INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (40, 'T', CURRENT_TIMESTAMP, 0, 10, 14);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (41, 'T', CURRENT_TIMESTAMP, 0, 11, 14);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (42, 'T', CURRENT_TIMESTAMP, 0, 12, 14);


INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (43, 'T', CURRENT_TIMESTAMP, 0, 10, 15);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (44, 'T', CURRENT_TIMESTAMP, 0, 11, 15);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (45, 'T', CURRENT_TIMESTAMP, 0, 12, 15);


INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (46, 'T', CURRENT_TIMESTAMP, 0, 10, 16);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (47, 'T', CURRENT_TIMESTAMP, 0, 11, 16);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (48, 'T', CURRENT_TIMESTAMP, 0, 12, 16);





INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (49, 'T', CURRENT_TIMESTAMP, 0, 13, 17);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (50, 'T', CURRENT_TIMESTAMP, 0, 14, 17);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (51, 'T', CURRENT_TIMESTAMP, 0, 15, 17);


INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (52, 'T', CURRENT_TIMESTAMP, 0, 13, 18);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (53, 'T', CURRENT_TIMESTAMP, 0, 14, 18);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (54, 'T', CURRENT_TIMESTAMP, 0, 15, 18);


INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (55, 'T', CURRENT_TIMESTAMP, 0, 13, 19);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (56, 'T', CURRENT_TIMESTAMP, 0, 14, 19);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (57, 'T', CURRENT_TIMESTAMP, 0, 15, 19);


INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (58, 'T', CURRENT_TIMESTAMP, 0, 13, 20);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (59, 'T', CURRENT_TIMESTAMP, 0, 14, 20);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (60, 'T', CURRENT_TIMESTAMP, 0, 15, 20);





INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (61, 'T', CURRENT_TIMESTAMP, 0, 16, 21);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (62, 'T', CURRENT_TIMESTAMP, 0, 17, 21);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (63, 'T', CURRENT_TIMESTAMP, 0, 18, 21);


INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (64, 'T', CURRENT_TIMESTAMP, 0, 16, 22);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (65, 'T', CURRENT_TIMESTAMP, 0, 17, 22);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (66, 'T', CURRENT_TIMESTAMP, 0, 18, 22);


INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (67, 'T', CURRENT_TIMESTAMP, 0, 16, 23);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (68, 'T', CURRENT_TIMESTAMP, 0, 17, 23);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (69, 'T', CURRENT_TIMESTAMP, 0, 18, 23);


INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (70, 'T', CURRENT_TIMESTAMP, 0, 16, 24);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (71, 'T', CURRENT_TIMESTAMP, 0, 17, 24);

INSERT INTO boveda_caja(id, estado, optlk, saldo, boveda_id, caja_id)
VALUES (72, 'T', CURRENT_TIMESTAMP, 0, 18, 24);



/**CREAR TRABAJADORES*/

INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (1, 'T', 'DNI', '28212199', CURRENT_TIMESTAMP, 'jacarmen_caja', 1);

INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (2, 'T', 'DNI', '28213768', CURRENT_TIMESTAMP, 'pmpetronila_caja', 1);

INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (3, 'T', 'DNI', '28200766', CURRENT_TIMESTAMP, 'dcyrene_caja', 1);

INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (4, 'T', 'DNI', '28214821', CURRENT_TIMESTAMP, 'qpandres_caja', 1);



INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (5, 'T', 'DNI', '28237806', CURRENT_TIMESTAMP, 'vpwalter_caja', 2);

INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (6, 'T', 'DNI', '28269111', CURRENT_TIMESTAMP, 'ptfilomeno_caja', 2);

INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (7, 'T', 'DNI', '28213753', CURRENT_TIMESTAMP, 'hgfeliciano_caja', 2);

INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (8, 'T', 'DNI', '28202338', CURRENT_TIMESTAMP, 'aobenito_caja', 2);



INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (9, 'T', 'DNI', '28205601', CURRENT_TIMESTAMP, 'tmenma_caja', 3);

INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (10, 'T', 'DNI', '28235769', CURRENT_TIMESTAMP, 'ffoctavio_caja', 3);

INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (11, 'T', 'DNI', '28289835', CURRENT_TIMESTAMP, 'qlcarlos_caja', 3);

INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (12, 'T', 'DNI', '28262098', CURRENT_TIMESTAMP, 'bcvictor_caja', 3);



INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (13, 'T', 'DNI', '28207191', CURRENT_TIMESTAMP, 'pvmarciana_caja', 4);

INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (14, 'T', 'DNI', '21092365', CURRENT_TIMESTAMP, 'vateofila_caja', 4);

INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (15, 'T', 'DNI', '09181356', CURRENT_TIMESTAMP, 'arisaac_caja', 4);

INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (16, 'T', 'DNI', '28215545', CURRENT_TIMESTAMP, 'jafrancisco_caja', 4);



INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (17, 'T', 'DNI', '28223351', CURRENT_TIMESTAMP, 'cmrosa_caja', 5);

INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (18, 'T', 'DNI', '23697235', CURRENT_TIMESTAMP, 'ormacelino_caja', 5);

INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (19, 'T', 'DNI', '28237294', CURRENT_TIMESTAMP, 'cssocorro_caja', 5);

INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (20, 'T', 'DNI', '28201392', CURRENT_TIMESTAMP, 'cojulio_caja', 5);


	
INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (21, 'T', 'DNI', '28236387', CURRENT_TIMESTAMP, 'alnemesio_caja', 6);

INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (22, 'T', 'DNI', '28291967', CURRENT_TIMESTAMP, 'hafrancisco_caja', 6);	
	
INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (23, 'T', 'DNI', '28220014', CURRENT_TIMESTAMP, 'lcfrancisco_caja', 6);	
	
INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (24, 'T', 'DNI', '28206070', CURRENT_TIMESTAMP, 'bcgregorio_caja', 6);	


/**TRABAJADORES PLATAFORMA**/
INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (25, 'T', 'DNI', '28218966', CURRENT_TIMESTAMP, 'yzbertha_plataforma', 1);	

INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (26, 'T', 'DNI', '28216370', CURRENT_TIMESTAMP, 'eljuan_plataforma', 2);

INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (27, 'T', 'DNI', '00123520', CURRENT_TIMESTAMP, 'mcmamerto_plataforma', 3);

INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (28, 'T', 'DNI', '28268159', CURRENT_TIMESTAMP, 'aafausto_plataforma', 4);	

INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (29, 'T', 'DNI', '80499976', CURRENT_TIMESTAMP, 'avtharwin_plataforma', 5);

INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (30, 'T', 'DNI', '28312414', CURRENT_TIMESTAMP, 'cfteofilo_plataforma', 6);


/**TRABAJADORES ADMINISTRADOR**/
INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (31, 'T', 'DNI', '41293587', CURRENT_TIMESTAMP, 'dcedgar_administrador', 1);

INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (32, 'T', 'DNI', '80365056', CURRENT_TIMESTAMP, 'hrgerardo_administrador', 2);

INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (33, 'T', 'DNI', '28288536', CURRENT_TIMESTAMP, 'mqhector_administrador', 3);

INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (34, 'T', 'DNI', '10468407', CURRENT_TIMESTAMP, 'mawilber_administrador', 4);

INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (35, 'T', 'DNI', '28302819', CURRENT_TIMESTAMP, 'ngartemio_administrador', 5);

INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (36, 'T', 'DNI', '40839257', CURRENT_TIMESTAMP, 'oqfredy_administrador', 6);


/**TRABAJADORES ADMINISTRADOR GENERAL*/
INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (37, 'T', 'DNI', '40208005', CURRENT_TIMESTAMP, 'pgarturo_administradorgeneral', 1);

INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (38, 'T', 'DNI', '28315991', CURRENT_TIMESTAMP, 'rqdavid_administradorgeneral', 4);


/**TRABAJADORES GERENTE GENERAL*/
INSERT INTO trabajador(id, estado, tipodocumento, numerodocumento, optlk , usuario, agencia_id)
VALUES (39, 'T', 'DNI', '28317407', CURRENT_TIMESTAMP, 'rgjorge_gerentegeneral', 1);





/**CREAR TRABAJADOR_CAJA*/
INSERT INTO trabajador_caja(id, optlk, caja_id, trabajador_id)
VALUES (1, CURRENT_TIMESTAMP, 1, 1);

INSERT INTO trabajador_caja(id, optlk, caja_id, trabajador_id)
VALUES (2, CURRENT_TIMESTAMP, 2, 2);

INSERT INTO trabajador_caja(id, optlk, caja_id, trabajador_id)
VALUES (3, CURRENT_TIMESTAMP, 3, 3);

INSERT INTO trabajador_caja(id, optlk, caja_id, trabajador_id)
VALUES (4, CURRENT_TIMESTAMP, 4, 4);


INSERT INTO trabajador_caja(id, optlk, caja_id, trabajador_id)
VALUES (5, CURRENT_TIMESTAMP, 5, 5);

INSERT INTO trabajador_caja(id, optlk, caja_id, trabajador_id)
VALUES (6, CURRENT_TIMESTAMP, 6, 6);

INSERT INTO trabajador_caja(id, optlk, caja_id, trabajador_id)
VALUES (7, CURRENT_TIMESTAMP, 7, 7);

INSERT INTO trabajador_caja(id, optlk, caja_id, trabajador_id)
VALUES (8, CURRENT_TIMESTAMP, 8, 8);


INSERT INTO trabajador_caja(id, optlk, caja_id, trabajador_id)
VALUES (9, CURRENT_TIMESTAMP, 9, 9);

INSERT INTO trabajador_caja(id, optlk, caja_id, trabajador_id)
VALUES (10, CURRENT_TIMESTAMP, 10, 10);

INSERT INTO trabajador_caja(id, optlk, caja_id, trabajador_id)
VALUES (11, CURRENT_TIMESTAMP, 11, 11);

INSERT INTO trabajador_caja(id, optlk, caja_id, trabajador_id)
VALUES (12, CURRENT_TIMESTAMP, 12, 12);


INSERT INTO trabajador_caja(id, optlk, caja_id, trabajador_id)
VALUES (13, CURRENT_TIMESTAMP, 13, 13);

INSERT INTO trabajador_caja(id, optlk, caja_id, trabajador_id)
VALUES (14, CURRENT_TIMESTAMP, 14, 14);

INSERT INTO trabajador_caja(id, optlk, caja_id, trabajador_id)
VALUES (15, CURRENT_TIMESTAMP, 15, 15);

INSERT INTO trabajador_caja(id, optlk, caja_id, trabajador_id)
VALUES (16, CURRENT_TIMESTAMP, 16, 16);


INSERT INTO trabajador_caja(id, optlk, caja_id, trabajador_id)
VALUES (17, CURRENT_TIMESTAMP, 17, 17);

INSERT INTO trabajador_caja(id, optlk, caja_id, trabajador_id)
VALUES (18, CURRENT_TIMESTAMP, 18, 18);

INSERT INTO trabajador_caja(id, optlk, caja_id, trabajador_id)
VALUES (19, CURRENT_TIMESTAMP, 19, 19);

INSERT INTO trabajador_caja(id, optlk, caja_id, trabajador_id)
VALUES (20, CURRENT_TIMESTAMP, 20, 20);


INSERT INTO trabajador_caja(id, optlk, caja_id, trabajador_id)
VALUES (21, CURRENT_TIMESTAMP, 21, 21);

INSERT INTO trabajador_caja(id, optlk, caja_id, trabajador_id)
VALUES (22, CURRENT_TIMESTAMP, 22, 22);

INSERT INTO trabajador_caja(id, optlk, caja_id, trabajador_id)
VALUES (23, CURRENT_TIMESTAMP, 23, 23);

INSERT INTO trabajador_caja(id, optlk, caja_id, trabajador_id)
VALUES (24, CURRENT_TIMESTAMP, 24, 24);
