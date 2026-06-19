import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
} from "@mui/material";

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

    alert("Registered Successfully");

    navigate("/login");
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
    </Container>
  );
}

export default Register;