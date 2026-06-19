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
import { loginUser } from "../../services/authService";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    const result = loginUser(
      email,
      password
    );

    if (!result.success) {
      setError(
        "Invalid Email or Password"
      );
      return;
    }

    setError("");
    setOpen(true);

    setTimeout(() => {
      navigate("/");
    }, 1000);
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

      {error && (
        <Alert
          severity="error"
          sx={{ mt: 2 }}
        >
          {error}
        </Alert>
      )}

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert
          severity="success"
          variant="filled"
        >
          Login Successful
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Login;