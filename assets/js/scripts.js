var radiologia = [
  {
    hora: '11:00',
    especialista: 'Ignacio Schulz',
    paciente: 'Francisca Rojas',
    rut: '9878782-2',
    prevision: 'Fonasa',
  },
  {
    hora: '11:30',
    especialista: 'Federico Subercaseaux',
    paciente: 'Pamela Estrada',
    rut: '15345241-3',
    prevision: 'Isapre',
  },
  {
    hora: '15:00',
    especialista: 'Fernando Wurthz',
    paciente: 'Armando Luna',
    rut: '16445345-9',
    prevision: 'Isapre',
  },
  {
    hora: '15:30',
    especialista: 'Ana Maria Godoy',
    paciente: 'Manuel Godoy',
    rut: '17666419-0',
    prevision: 'Fonasa',
  },
  {
    hora: '16:00',
    especialista: 'Patricia Suazo',
    paciente: 'Ramon Ulloa',
    rut: '14989389-K',
    prevision: 'Fonasa',
  },
];

var traumatologia = [
  {
    hora: '8:00',
    especialista: 'Maria Paz Altuzarra',
    paciente: 'Paula Sanchez',
    rut: '15554774-5',
    prevision: 'Fonasa',
  },
  {
    hora: '10:00',
    especialista: 'Raul Araya',
    paciente: 'Angelica Navas',
    rut: '15444147-9',
    prevision: 'Isapre',
  },
  {
    hora: '10:30',
    especialista: 'Maria Arriagada',
    paciente: 'Ana Klapp',
    rut: '17879423-9',
    prevision: 'Isapre',
  },
  {
    hora: '11:00',
    especialista: 'Alejandro Badilla',
    paciente: 'Felipe Mardones',
    rut: '1547423-6',
    prevision: 'Isapre',
  },
  {
    hora: '11:30',
    especialista: 'Cecilia Budnik',
    paciente: 'Diego Marre',
    rut: '16554741-K',
    prevision: 'Fonasa',
  },
  {
    hora: '12:00',
    especialista: 'Arturo Cavagnaro',
    paciente: 'Cecilia Mendez',
    rut: '9747535-8',
    prevision: 'Isapre',
  },
  {
    hora: '12:30',
    especialista: 'Andres Kanacri',
    paciente: 'Marcial Suazo',
    rut: '11254785-5',
    prevision: 'Isapre',
  },
];

var dental = [
  {
    hora: '8:30',
    especialista: 'Andrea Zuñiga',
    paciente: 'Marcela Retamal',
    rut: '11123425-6',
    prevision: 'Isapre',
  },
  {
    hora: '11:00',
    especialista: 'Maria Pia Zañartu',
    paciente: 'Angel Muñoz',
    rut: '9878789-2',
    prevision: 'Isapre',
  },
  {
    hora: '11:30',
    especialista: 'Scarlett Witting',
    paciente: 'Mario Kast',
    rut: '7998789-5',
    prevision: 'Fonasa',
  },
  {
    hora: '13:00',
    especialista: 'Francisco Von Teuber',
    paciente: 'Karin Fernandez',
    rut: '18887662-K',
    prevision: 'Fonasa',
  },
  {
    hora: '13:30',
    especialista: 'Eduardo Viñuela',
    paciente: 'Hugo Sanchez',
    rut: '17665461-4',
    prevision: 'Fonasa',
  },
  {
    hora: '14:00',
    especialista: 'Raquel Villaseca',
    paciente: 'Ana Sepulveda',
    rut: '14441281-0',
    prevision: 'Isapre',
  },
];

// Función para llamar al total de pacientes de Radiología

document.getElementById('pacientesRadiologia').innerHTML = radiologia.length;
// Función para llamar al total de pacientes de Traumatología

document.getElementById('pacientesTraumatologia').innerHTML = traumatologia.length;
// Función para llamar al total de pacientes de dental

document.getElementById('pacientesDental').innerHTML = dental.length;



// Función para llamar pacientes, rut, y previsión de Radiología

var longitudUno = radiologia.length;

var radPri = radiologia[0];
var radUlt = radiologia[radiologia.length-1];

document.getElementById('firstRadiology').innerHTML = (radPri.paciente + ' - ' + radPri.rut + ' - ' + radPri.prevision);

document.getElementById('latestRadiology').innerHTML = (radUlt.paciente + ' - ' + radUlt.rut +' - ' + radUlt.prevision);


// Función para llamar pacientes, rut, y previsión de Traumatología

var longitudDos = traumatologia.length;

var traPri = traumatologia[0];
var traUlt = traumatologia[traumatologia.length-1];

document.getElementById('firstTraumatology').innerHTML = (traPri.paciente + ' - ' + traPri.rut + ' - ' + traPri.prevision);

document.getElementById('latestTraumatology').innerHTML = (traUlt.paciente + ' - ' + traUlt.rut + ' - ' + traUlt.prevision);


// Función para llamar pacientes, rut, y previsión de Traumatología

var longitudDos = dental.length;

var denPri = dental[0];
var denUlt = dental[dental.length-1];

document.getElementById('firstDental').innerHTML = (denPri.paciente + ' - ' + denPri.rut + ' - ' + denPri.prevision);

document.getElementById('latestDental').innerHTML = (denUlt.paciente + ' - ' + denUlt.rut + ' - ' + denUlt.prevision + ' <br> ' + ' <br> ');




// // Función para llamar al total de pacientes de Radiología
//
// document.write('Total de Pacientes de Radiología' + ' <br> ' + radiologia.length + ' <br> ' + ' <br> ');
//
// // Función para llamar al total de pacientes de Traumatología
//
// document.write('Total de Pacientes de Traumatología' + ' <br> '+ traumatologia.length + ' <br> ' + ' <br> ');
//
// // Función para llamar al total de pacientes de dental
//
// document.write('Total de Pacientes de Dental' + ' <br> '+ dental.length + ' <br> ' + ' <br> ' + ' <br> ');
//
//
// // Función para llamar pacientes, rut, y previsión de Radiología
//
// var longitudUno = radiologia.length;
//
// var radPri = radiologia[0];
// var radUlt = radiologia[radiologia.length-1];
//
// document.write('Primer y Último Paciente de Radiología' + ' <br> ' + ' <br> ' + radPri.paciente + ' - ' +
// radPri.rut + ' - ' + radPri.prevision + ' <br> ' + radUlt.paciente + ' - ' + radUlt.rut +' - ' + radUlt.prevision +
// ' <br> ' + ' <br> ' + ' <br> ');
//
//
// // Función para llamar pacientes, rut, y previsión de Traumatología
//
// var longitudDos = traumatologia.length;
//
// var traPri = traumatologia[0];
// var traUlt = traumatologia[traumatologia.length-1];
//
// document.write('Primer y Último Paciente de Traumatología' + ' <br> ' + ' <br> ' + traPri.paciente + ' - ' +
// traPri.rut + ' - ' + traPri.prevision + ' <br> ' + traUlt.paciente + ' - ' + traUlt.rut + ' - ' + traUlt.prevision +
// ' <br> ' + ' <br> ' + ' <br> ');
//
//
// // Función para llamar pacientes, rut, y previsión de Traumatología
//
// var longitudDos = dental.length;
//
// var denPri = dental[0];
// var denUlt = dental[dental.length-1];
//
// document.write('Primer y Último Paciente de Dental' + ' <br> ' + ' <br> ' + denPri.paciente + ' - ' +
// denPri.rut + ' - ' + denPri.prevision + ' <br> ' + denUlt.paciente + ' - ' + denUlt.rut + ' - ' + denUlt.prevision + ' <br> ');
