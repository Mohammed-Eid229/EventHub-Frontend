import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function AddEvent() {
  const [title, setTitle] =
    useState("");

  const [location, setLocation] =
    useState("");

  const [date, setDate] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");  
  const [open, setOpen] = useState(false);

  const handleAddEvent = () => {
    const newEvent = {
        id: Date.now(),
        title,
        location,
        date,
        price: Number(price),
        image,
        category,
        description,
    };

    const oldEvents =
        JSON.parse(
        localStorage.getItem("events")
        ) || [];

    localStorage.setItem(
        "events",
        JSON.stringify([
        ...oldEvents,
        newEvent,
        ])
    );

    setOpen(true);
    setTitle("");
    setLocation("");
    setDate("");
    setPrice("");
    setImage("");
    setCategory("");
    setDescription("");
    };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography
        variant="h4"
        gutterBottom
      >
        Add Event
      </Typography>

      <TextField
        fullWidth
        label="Title"
        margin="normal"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />

      <TextField
        fullWidth
        label="Location"
        margin="normal"
        value={location}
        onChange={(e) =>
          setLocation(e.target.value)
        }
      />

      <TextField
        fullWidth
        type="date"
        margin="normal"
        value={date}
        onChange={(e) =>
          setDate(e.target.value)
        }
      />

      <TextField
        fullWidth
        label="Price"
        type="number"
        margin="normal"
        value={price}
        onChange={(e) =>
          setPrice(e.target.value)
        }
      />


      <TextField
        fullWidth
        label="Image URL"
        margin="normal"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <TextField
        fullWidth
        label="Category"
        margin="normal"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <TextField
        fullWidth
        multiline
        rows={3}
        label="Description"
        margin="normal"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleAddEvent}
        >
        Add Event
     </Button>

     <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        >
        <Alert
            severity="success"
            variant="filled"
            onClose={() => setOpen(false)}
        >
            Event Added Successfully
        </Alert>
     </Snackbar>
    </Container>
  );
}

export default AddEvent;