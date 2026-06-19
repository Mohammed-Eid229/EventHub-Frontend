import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import { loginUser } from "../../services/authService";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = () => {
    const result = loginUser(
      email,
      password
    );

    if (!result.success) {
      alert("Invalid Credentials");
      return;
    }

    alert("Login Successful");

    navigate("/");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography
        variant="h4"
        gutterBottom
      >
        Login
      </Typography>

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
        onClick={handleLogin}
      >
        Login
      </Button>
    </Container>
  );
}

export default Login;