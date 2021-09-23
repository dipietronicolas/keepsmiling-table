import React, { useState, useEffect } from 'react';
import {
  Table as ChakraTable, Thead, Tbody,
  Tr, Th, TableCaption, Box, Alert, AlertIcon
} from "@chakra-ui/react";
import TableRow from '../TableRow/TableRow';
import dataService from '../../services/dataService';
import Spinner from '../Spinner/Spinner';

const Table = () => {

  const [patientList, setPatientList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const getPatientList = async () => {
    try {
      const result = await dataService();
      setPatientList(result);
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getPatientList();
  }, []);

  return (
    <Box borderWidth="1px" borderRadius="lg" p={3} m={6}>
      <ChakraTable variant="striped" colorScheme="blue">
        <TableCaption>KeepSmiling =)</TableCaption>
        <Thead>
          <Tr>
            <Th w="20%">Paciente</Th>
            <Th w="20%">Odontologo</Th>
            <Th w="5%">Cantidad de placas</Th>
            <Th px={3} w="10%">Inicio de Tratam.</Th>
            <Th px={3} w="10%">Fin de Tratam.</Th>
            <Th w="5%">Editar</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            patientList.length > 0 && patientList.slice(0,20).map((patient, idx) => {
              return <TableRow key={idx} {...patient} />
            })
          }
        </Tbody>
        {
          isLoading && (
            <TableCaption>
              <Spinner />
            </TableCaption>
          )
        }
        {
          error && (
            <TableCaption>
              <Alert status="error">
                <AlertIcon />
                Error al traer los datos.
              </Alert>
            </TableCaption>
          )
        }
        {
          (patientList.length === 0 && !error && !isLoading) && (
            <TableCaption>
              <Alert status="success">
                <AlertIcon />
                No hay pacientes en lista.
              </Alert>
            </TableCaption>
          )
        }
      </ChakraTable>
    </Box>
  )
}

export default Table
