import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FotoCard from '../../assets/IMG_1441_FB.jpg';
import './CardPersonal.css'; // Importa el archivo CSS

const CardPersonal = () => {
  return (
    <div className="card-container">
      <Card className="card">
        <CardMedia
          component="img"
          alt="Foto personal"
          className="card-image"
          image={FotoCard}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Anderson Arias Calderón
          </Typography>
          <Typography variant="body2" className="card-text">
            Edad: 22 años
          </Typography>
          <Typography variant="body2" className="card-text">
            Estudiante de Ingeniería de Sistemas
          </Typography>
          <Typography variant="body2" className="card-text">
            Universidad de la Amazonia
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href="https://www.instagram.com/andercalph" target="_blank" rel="noopener noreferrer">
            Instagram
          </Button>
          <Button size="small" href="https://www.facebook.com/andercal24" target="_blank" rel="noopener noreferrer">
            Facebook
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardPersonal;