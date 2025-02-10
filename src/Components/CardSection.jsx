import React from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import Doctor1 from '../assets/image/Person.png';
import Doctor2 from '../assets/image/Surya1.jpeg';
import Doctor3 from '../assets/image/doctor3.jpg';
import Doctor4 from '../assets/image/doctor1.jpg';

const CardSection = () => {
  const cards = [
    {
      id: 1,
      image: Doctor1,
      title: "Dr. John Doe",
      description: "Specialist in Cardiology with 10+ years of experience.",
    },
    {
      id: 2,
      image: Doctor2,
      title: "Dr. Surya Smith",
      description: "Expert in Neurology and Brain Surgery and Neurology.",
    },
    {
      id: 3,
      image: Doctor3,
      title: "City Hospital",
      description: "Top-rated hospital with state-of-the-art facilities.",
    },
    {
      id: 4,
      image: Doctor4,
      title: "Community Health Center",
      description: "Affordable and quality care for everyone.",
    },
  ];

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Meet Our Doctors & Hospitals
      </Typography>
      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
            <Card sx={{ boxShadow: 3 }}>
              <CardMedia
                component="img"
                height="300px"
                image={card.image}
                alt={card.title}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardSection;
