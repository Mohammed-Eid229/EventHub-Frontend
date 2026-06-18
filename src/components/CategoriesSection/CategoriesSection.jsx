import {
  Container,
  Typography,
  Stack,
  Chip,
} from "@mui/material";

import { categories } from "../../data/categories";

function CategoriesSection({
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <Container sx={{ mt: 8 }}>
      <Typography
        variant="h4"
        gutterBottom
      >
        Categories
      </Typography>

      <Stack
        direction="row"
        spacing={2}
      >
        <Chip
          label="All"
          clickable
          color={
            selectedCategory === "All"
              ? "primary"
              : "default"
          }
          onClick={() =>
            setSelectedCategory("All")
          }
        />

        {categories.map((category) => (
          <Chip
            key={category.id}
            label={category.name}
            clickable
            color={
              selectedCategory ===
              category.name
                ? "primary"
                : "default"
            }
            onClick={() =>
              setSelectedCategory(
                category.name
              )
            }
          />
        ))}
      </Stack>
    </Container>
  );
}

export default CategoriesSection;