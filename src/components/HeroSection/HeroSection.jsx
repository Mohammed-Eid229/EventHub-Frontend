import { Container, Typography, Button, Box } from "@mui/material";

function HeroSection() {
  return (
    <Box
      sx={{
        py: 10,
        textAlign: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Container>
        <Typography
          variant="h2"
          fontWeight="bold"
          gutterBottom
        >
          Discover Amazing Events
        </Typography>

        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          Book tickets for concerts, workshops,
          conferences, festivals and more.
        </Typography>

        <Button
          variant="contained"
          size="large"
        >
          Browse Events
        </Button>
      </Container>
    </Box>
  );
}

export default HeroSection;