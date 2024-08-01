const carnets = `B21019
B21028
B21030
B21031
B21057
B21058
B21078
B21084
B21090
B21098
B21138
B21145
B21148
B21149
B21163
B21171
B21172
B21183`;

const names = [
'BALA  ALVAREZ ERICK  OMAR',
'GÓMEZ  TUYUC YOLANDA  FABIOLA',
'XINICO JUC MARIO  RENÉ',
'CATÚ LÓPEZ ANGEL DANIEL',
'CARDENAS  CASTANEDA ANDERSON ANTONIO',
'AJBAL ATZ MOISES FRANCISCO',
'CALÍ MORALES ALEX JOSUKY',
'BURRIÓN  TEJAXÚN RUDY ADIEL',
'QUINÁ ICHAJ DULCE  ROSÍO',
'LÓPEZ  BOCHE LESLIE  VERONICA',
'JUAREZ OLIVER NATANAEL',
'PANTZAY IXTUC FATIMA  CLIZBETH',
'MORALES CHACAR KIMBERLY DAYAN',
'CHACAR COROY MILDRED IRENE',
'PÉREZ  OBANDO MAYRA  ESTHER',
'TOJ CHITIC MIGUEL ESTUARDO',
'LÓPEZ  JIATZ PABLO  ISRAEL',
'ARRIOLA ORELLANA DANIEL ANDRÉ'
];

const carns = carnets.split('\n');
/*names.forEach((n, i) => {
    const na = n.split(' ').filter(x => x !== '');
    const apellidos = na[0] + ' ' + na[1];
    const nombres = na[2] + ' ' + na[3];
    console.log(`('${carns[i]}', '${nombres}', '${apellidos}', 1),`)
})*/


`
INSERT INTO alumno (carnet, nombres, apellidos, id_grado)
VALUES
	('B21028', 'YOLANDA FABIOLA', 'GÓMEZ TUYUC', 1),
	('B21030', 'MARIO RENÉ', 'XINICO JUC', 1),
	('B21031', 'ANGEL DANIEL', 'CATÚ LÓPEZ', 1),
	('B21057', 'ANDERSON ANTONIO', 'CARDENAS CASTANEDA', 1),
	('B21058', 'MOISES FRANCISCO', 'AJBAL ATZ', 1),
	('B21078', 'ALEX JOSUKY', 'CALÍ MORALES', 1),
	('B21084', 'RUDY ADIEL', 'BURRIÓN TEJAXÚN', 1),
	('B21090', 'DULCE ROSÍO', 'QUINÁ ICHAJ', 1),
	('B21098', 'LESLIE VERONICA', 'LÓPEZ BOCHE', 1),
	('B21138', 'NATANAEL undefined', 'JUAREZ OLIVER', 1),
	('B21145', 'FATIMA CLIZBETH', 'PANTZAY IXTUC', 1),
	('B21148', 'KIMBERLY DAYAN', 'MORALES CHACAR', 1),
	('B21149', 'MILDRED IRENE', 'CHACAR COROY', 1),
	('B21163', 'MAYRA ESTHER', 'PÉREZ OBANDO', 1),
	('B21171', 'MIGUEL ESTUARDO', 'TOJ CHITIC', 1),
	('B21172', 'PABLO ISRAEL', 'LÓPEZ JIATZ', 1),
	('B21183', 'DANIEL ANDRÉ', 'ARRIOLA ORELLANA', 1);
`

const carreras = [
'Bach. En CC.LL con Orient. En Computacion',
'Bach. En CC.LL con Orient. En Computacion',
'Bach. En CC.LL con Orient. En Diseño Grafico',
'Bach. En CC.LL con Orient. En Diseño Grafico',
'Bach. En CC.LL Dip. En FISIOTERAPIA',
'Bach. En CC.LL Dip. En FISIOTERAPIA',
'Bach. En CC.LL Dip. En GASTRONOMIA',
'Bach. En CC.LL Dip. En GASTRONOMIA',
'Bach. En CC.LL Dip. En MEDICINA',
'Bach. En CC.LL Dip. En MEDICINA',
'Bach. En CC.LL Dip. En MEDICINA',
'Bach. En CC.LL Dip. En MEDICINA',
'Bach. En CC.LL Dip. En MEDICINA',
'Bach. En CC.LL por Madurez',
'Bach. En CC.LL. Dip. En GASTRONOMIA',
'Bach. En CC.LL. Dip. En GASTRONOMIA',
'Bach. En CC.LL. Dip. En GASTRONOMIA',
]

const grados = [
    'Cuarto',
    'Quinto',
    'Cuarto',
    'Quinto',
    'Cuarto',
    'Quinto',
    'Cuarto',
    'Quinto',
    'Cuarto',
    'Cuarto',
    'Quinto',
    'Quinto',
    'Quinto',
    'Cuarto',
    'Cuarto',
    'Cuarto',
    'Quinto'
]

const secciones = [
    'A',
    'A',
    'A',
    'A',
    'A',
    'A',
    'A',
    'A',
    'B',
    'A',
    'B',
    'A',
    'A',
    'A',
    'A',
    'B',
    'A'
]

const jornadas = [    
    'Diario',
    'Diario',
    'Diario',
    'Diario',
    'Diario',
    'Diario',
    'Sábado',
    'Sábado',
    'Diario',
    'Diario',
    'Diario',
    'Diario',
    'Sábado',
    'Sábado',
    'Diario',
    'Diario',
    'Diario'    
]

// carreras.forEach((j, i) => {
//     console.log(`('${j}', '${grados[i]}', '${secciones[i]}', '${jornadas[i]}', 'Matutina')`)
// })

console.log(require('crypto').randomBytes(64).toString('hex'))


