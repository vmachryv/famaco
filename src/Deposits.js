import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Dernier Don</Title>
      <Typography component="p" variant="h4">
        1.024,00€
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        le 23 janvier 2023
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Voir le bilan
        </Link>
      </div>
    </React.Fragment>
  );
}