import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
} from "@mui/material";

import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";

function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [open, setOpen] =
    useState(false);

  const handleRegister = () => {
    const result = registerUser({
      fullName,
      email,
      password,
    });

    if (!result.success) {
      alert(result.message);
      return;
    }

    setOpen(true);

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography
        variant="h4"
        gutterBottom
      >
        Register
      </Typography>

      <TextField
        fullWidth
        label="Full Name"
        margin="normal"
        value={fullName}
        onChange={(e) =>
          setFullName(e.target.value)
        }
      />

      <TextField
        fullWidth
        label="Email"
        margin="normal"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <TextField
        fullWidth
        type="password"
        label="Password"
        margin="normal"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <Button
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        onClick={handleRegister}
      >
        Register
      </Button>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert
          severity="success"
          variant="filled"
        >
          Registered Successfully
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Register;