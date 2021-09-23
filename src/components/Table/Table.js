import React, { useState, useEffect } from 'react';
import {
  Table as ChakraTable, Thead, Tbody,
  Tr, Th, TableCaption, Box, Alert, AlertIcon
} from "@chakra-ui/react";
import {
  Paginator, Container, Previous,
  Next, PageGroup, usePaginator
} from "chakra-paginator";
import TableRow from '../TableRow/TableRow';
import Spinner from '../Spinner/Spinner';
// Servicio de pacientes 
import dataService from '../../services/dataService';

const Table = () => {

  // Estado para guardar la lista de pacientes
  const [patientList, setPatientList] = useState([]);
  // Estado para manejar el Spinner
  const [isLoading, setIsLoading] = useState(true);
  // Estado para manejar los errores
  const [error, setError] = useState(false);
  // Estado para el paginador: cantidad de paginas
  const [pagesQuantity, setPagesQuantity] = useState(1);

  // Function que trae la lista de pacientes
  const getPatientList = async (pageFloor, pageRoof) => {
    setPatientList([])
    try {
      const result = await dataService(pageFloor, pageRoof);
      console.log(result);
      setPatientList(result[0]);
      setPagesQuantity(Math.trunc((result[1] - 1) / 20) + 1);
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  // useEffect de montaje para traer la lista de pacientes
  useEffect(() => {
    getPatientList(0, 20);
  }, []);

  // Hook para el paginador
  const { currentPage, setCurrentPage } = usePaginator({
    total: patientList,
    initialState: { currentPage: 1 }
  });

  // Manejo del paginador
  useEffect(() => {
    setIsLoading(true);
    getPatientList(
      (currentPage - 1) * 20,
      currentPage * 20
    );
  }, [currentPage])

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
          {/* Renderizo la lista de pacientes */}
          {
            patientList.length > 0 && patientList.map((patient, idx) => {
              return <TableRow key={idx} {...patient} />
            })
          }
        </Tbody>
        {/* Manejo del Spinner */}
        {
          isLoading && (
            <TableCaption>
              <Spinner />
            </TableCaption>
          )
        }
        {/* Manejo de errores al traer la lista de pacientes */}
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
        {/* Si no hay error, y tampoco pacientes, aparece este cartel */}
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
        {/* Paginador */}
        <TableCaption>
          <Paginator
            pagesQuantity={pagesQuantity}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          >
            <Container align="center" justify="space-between" w="full" p={4}>
              <Previous>
                Previous
                {/* Or an icon from `react-icons` */}
              </Previous>
              <PageGroup isInline align="center" />
              <Next>
                Next
                {/* Or an icon from `react-icons` */}
              </Next>
            </Container>
          </Paginator>
        </TableCaption>
      </ChakraTable>
    </Box>
  )
}

export default Table
