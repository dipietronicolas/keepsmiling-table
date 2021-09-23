const patientsList = [
  {
    name: "Roberto Gilera",
    dentist: "Nicolas Ramirez",
    plates: 4,
    fec_inicio: '2021-08-29',
    fec_fin: '2021-10-06'
  },
  {
    name: "Ricardo Gonzalez",
    dentist: "Nicolas Ramirez",
    plates: 1,
    fec_inicio: '2021-08-17',
    fec_fin: '2021-09-25'
  },
  {
    name: "Micaela Sapia",
    dentist: "Nicolas Ramirez",
    plates: 7,
    fec_inicio: '2021-07-21',
    fec_fin: '2021-10-05'
  },
  {
    name: "Roman Plaza",
    dentist: "Nicolas Ramirez",
    plates: 4,
    fec_inicio: '2021-08-29',
    fec_fin: '2021-10-06'
  },
  {
    name: "Angel Manuel Montenegro",
    dentist: "Nicolas Ramirez",
    plates: 1,
    fec_inicio: '2021-08-17',
    fec_fin: '2021-09-25'
  },
  {
    name: "Maria Francisca Barbera",
    dentist: "Nicolas Ramirez",
    plates: 7,
    fec_inicio: '2021-07-21',
    fec_fin: '2021-10-05'
  },
  {
    name: "Maria Elena Villar",
    dentist: "Nicolas Ramirez",
    plates: 4,
    fec_inicio: '2021-08-29',
    fec_fin: '2021-10-06'
  },
  {
    name: "Jimena Orellana",
    dentist: "Nicolas Ramirez",
    plates: 1,
    fec_inicio: '2021-08-17',
    fec_fin: '2021-09-25'
  },
  {
    name: "Naima Echevarria",
    dentist: "Nicolas Ramirez",
    plates: 7,
    fec_inicio: '2021-07-21',
    fec_fin: '2021-10-05'
  },
  {
    name: "Camilo Merino",
    dentist: "Nicolas Ramirez",
    plates: 4,
    fec_inicio: '2021-08-29',
    fec_fin: '2021-10-06'
  },
  {
    name: "Veronica Paredes",
    dentist: "Nicolas Ramirez",
    plates: 1,
    fec_inicio: '2021-08-17',
    fec_fin: '2021-09-25'
  },
  {
    name: "Coral Contreras",
    dentist: "Nicolas Ramirez",
    plates: 7,
    fec_inicio: '2021-07-21',
    fec_fin: '2021-10-05'
  },
  {
    name: "Josefa Castellanos",
    dentist: "Nicolas Ramirez",
    plates: 4,
    fec_inicio: '2021-08-29',
    fec_fin: '2021-10-06'
  },
  {
    name: "Cesar Quintero",
    dentist: "Nicolas Ramirez",
    plates: 1,
    fec_inicio: '2021-08-17',
    fec_fin: '2021-09-25'
  },
  {
    name: "Claudio Mayo",
    dentist: "Nicolas Ramirez",
    plates: 7,
    fec_inicio: '2021-07-21',
    fec_fin: '2021-10-05'
  },
  {
    name: "Valeriano Lara",
    dentist: "Nicolas Ramirez",
    plates: 4,
    fec_inicio: '2021-08-29',
    fec_fin: '2021-10-06'
  },
  {
    name: "Mauricio Feijoo",
    dentist: "Nicolas Ramirez",
    plates: 1,
    fec_inicio: '2021-08-17',
    fec_fin: '2021-09-25'
  },
  {
    name: "Micaela Sapia",
    dentist: "Nicolas Ramirez",
    plates: 7,
    fec_inicio: '2021-07-21',
    fec_fin: '2021-10-05'
  },
  {
    name: "Maria Elena Ruiz",
    dentist: "Nicolas Ramirez",
    plates: 4,
    fec_inicio: '2021-08-29',
    fec_fin: '2021-10-06'
  },
  {
    name: "Roman Cano",
    dentist: "Nicolas Ramirez",
    plates: 1,
    fec_inicio: '2021-08-17',
    fec_fin: '2021-09-25'
  },
  {
    name: "Ignasio Brito",
    dentist: "Nicolas Ramirez",
    plates: 7,
    fec_inicio: '2021-07-21',
    fec_fin: '2021-10-05'
  },
  {
    name: "Vicente Jose Prado",
    dentist: "Nicolas Ramirez",
    plates: 4,
    fec_inicio: '2021-08-29',
    fec_fin: '2021-10-06'
  },
  {
    name: "Marta Benavides",
    dentist: "Nicolas Ramirez",
    plates: 1,
    fec_inicio: '2021-08-17',
    fec_fin: '2021-09-25'
  },
  {
    name: "Anibal Valencia",
    dentist: "Nicolas Ramirez",
    plates: 7,
    fec_inicio: '2021-07-21',
    fec_fin: '2021-10-05'
  },
];

// Creo una funcion que devuelve una promise con la lista de pacientes 
// y dentro un setTimeout para emular una consulta real a una base de datos. 
const dataService = (pageOne, pageTwo) => {
  return (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([patientsList.slice(pageOne, pageTwo), patientsList.length]);
      }, 1500);
      setTimeout(() => {
        reject({
          msg: 'Error',
          statusCode: 500
        });
      }, 2000)
    })
  )
}

export default dataService;