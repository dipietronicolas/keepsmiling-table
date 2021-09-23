import React, { useState } from 'react';
import { Tr, Td, Input, IconButton  } from "@chakra-ui/react";
import { EditIcon, CheckIcon } from '@chakra-ui/icons'

const TableRow = ({ name, dentist, plates, fec_inicio, fec_fin }) => {

  // Estado para saber si el boton de activar esta activado o no
  const [isLock, setIsLock] = useState(true);

  // Function para manejar el boton de editar
  const handleEditButton = () => {
    setIsLock(!isLock);
  }

  return (
    <Tr>
      <Td><Input type="text" bg="white" defaultValue={name} readOnly={isLock} /></Td>
      <Td><Input type="text" bg="white" defaultValue={dentist} readOnly={isLock} /></Td>
      <Td><Input type="number" bg="white" defaultValue={plates} readOnly={isLock} /></Td>
      <Td px={3}><Input type="date" bg="white" defaultValue={fec_inicio} readOnly={isLock} px={2} mx={0} w="85%"/></Td>
      <Td px={3}><Input type="date" bg="white" defaultValue={fec_fin} readOnly={isLock} px={2} w="85%"/></Td>
      <Td>
        <IconButton 
          icon={isLock ? <EditIcon /> : <CheckIcon />} 
          color={isLock ? "red" : "green"}
          onClick={handleEditButton} />
      </Td>
    </Tr>
  )
}

export default TableRow
