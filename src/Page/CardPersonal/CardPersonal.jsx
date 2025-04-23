import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FotoCard from '../../assets/IMG_1441_FB.jpg';
import { Box, Grid } from '@mui/material';
// import './CardPersonal.css'; 

const CardPersonal = () => {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardMedia
              component="img"
              alt="Foto personal"
              image={FotoCard}
              sx={{ height: { xs: 200, sm: 300, md: 380 }, objectFit: 'cover' }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Anderson Arias Calderón
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Edad: 22 años
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Estudiante de Ingeniería de Sistemas
              </Typography>
              <Typography variant="body2" color="text.secondary">
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardPersonal;