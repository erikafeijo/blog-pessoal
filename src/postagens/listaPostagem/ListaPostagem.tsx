import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography, CardActionArea, CardMedia } from '@material-ui/core';
import './ListaPostagem.css';
import { Box } from '@mui/material';

function ListaPostagem() {

  return (
    <>
      <Box m={2} >
        <Card variant="outlined">
        <CardActionArea>
        <CardMedia
          component="img"
          alt="Referencia em Web"
          height="300vh"
          width= "20vw"
          image=""
          title="Logo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Primeiro Post - Amazonas de Gaia
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Somos uma consultoria focada em marketing, marketing digital,web,SEO e data
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size='small' style={{ backgroundColor: "#082f46", color: "white" }}>
          Atualizar
        </Button>
        <Button variant="contained" size='small' style={{ backgroundColor: "#082f46", color: "white" }}>
          Deletar
        </Button>
      </CardActions>
        </Card>
      </Box>
    </>)
}

export default ListaPostagem;