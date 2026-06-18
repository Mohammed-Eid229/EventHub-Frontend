import MainLayout from "../../layouts/MainLayout";
import EventCard from "../../components/EventCard/EventCard";
import { events } from "../../data/events";
import { Grid, Container, Typography } from "@mui/material";
import HeroSection from "../../components/HeroSection/HeroSection";
import CategoriesSection from "../../components/CategoriesSection/CategoriesSection";
import { useState } from "react";



function Home() {

  const [selectedCategory, setSelectedCategory] =
  useState("All");
  
  const filteredEvents =
  selectedCategory === "All"
    ? events
    : events.filter(
        (event) =>
          event.category ===
          selectedCategory
      );
  return (
    <MainLayout>
      <HeroSection />
      <Container sx={{ mt: 5 }}>
        <Typography variant="h3" gutterBottom>
          Featured Events
        </Typography>

        <Grid container spacing={3}>
          {filteredEvents.map((event) => (
            <Grid
              size={{ xs: 12, sm: 6, md: 4 }}
              key={event.id}
            >
              <EventCard event={event} />
            </Grid>
          ))}
        </Grid>

        <CategoriesSection
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Container>
    </MainLayout>
  );
}

export default Home;