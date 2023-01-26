import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, card, shop, city, amount) {
  return { id, date, card, shop, city, amount };
}

const rows = [
  createData(
    0,
    '16 janvier 2023',
    '•••• 3719',
    'Le Petit Marché Sainte Hélène',
    'Paris',
    312.44,
  ),
  createData(
    1,
    '13 janvier 2023',
    '•••• 2574',
    'Vival',
    'Lyon',
    866.99,
  ),
  createData(
    2,
    '16 Mar, 2019',
    '•••• 1253',
    "L'Epicerie de la Place",
    'Lyon',
    100.81),
  createData(
    3,
    '12 janvier 2023',
    '•••• 2000',
    "Le Marché D'à Côté",
    'Paris',
    654.39,
  ),
  createData(
    4,
    '10 janvier 2023',
    '•••• 5919',
    'Le Petit Casino',
    'Lyon',
    212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Dernières opérations</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align={'center'}>Date</TableCell>
            <TableCell align={'center'}>Carte</TableCell>
            <TableCell align={'center'}>Marchand</TableCell>
            <TableCell align={'center'}>Ville</TableCell>
            <TableCell align="right">Montant</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.card}</TableCell>
              <TableCell>{row.shop}</TableCell>
              <TableCell>{row.city}</TableCell>
              <TableCell align="right">{`${row.amount}€`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Voire plus
      </Link>
    </React.Fragment>
  );
}