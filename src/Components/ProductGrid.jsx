import React from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import pro_01 from '../assets/newsection/01.webp';
import pro_02 from '../assets/newsection/02.webp';
import pro_03 from '../assets/newsection/03.webp';
import pro_04 from '../assets/newsection/04.webp';
import pro_05 from '../assets/newsection/05.webp';
import pro_06 from '../assets/newsection/ecg.jpg';

const products = [
  { title: "Thermometer", subtitle: "Digital Meter", img: pro_01 },
  { title: "Temperature", subtitle: "Temperature Gun", img: pro_02 },
  { title: "Oximeter", subtitle: "Pulse", img: pro_03 },
  { title: "N95 Face Mask", subtitle: "Lab Surgery", img: pro_04 },
  { title: "Hand Gloves", subtitle: "Surgery Lab", img: pro_05 },
  { title: "ECG Machine", subtitle: "ECG Lab", img: pro_06 },
];

const ProductGrid = () => {
  return (
    <Grid container spacing={3} padding={3}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", textAlign: "center", padding: 2, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
            <img src={product.img} alt={product.title} style={{ width: "100%" }} />
            <CardContent>
              <Typography variant="subtitle1" color="textSecondary">
                {product.subtitle}
              </Typography>
              <Typography variant="h6" fontWeight={600}>
                {product.title}
              </Typography>
              <Button variant="contained" sx={{ backgroundColor:"#912620",color: "#fff", marginTop: 1 }}>
                SHOP NOW +
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;
