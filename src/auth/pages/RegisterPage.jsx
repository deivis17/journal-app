import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Sign Up">
      
      <form>

        <Grid container>

          <Grid item xs={12} sx={{ mt: 2}}>
            <TextField
              label="Full Name"
              type="text"
              placeholder="Deivis Marchán"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 1 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="Email@google.com"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 1, mb: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Create Account
              </Button>
            </Grid>
          
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Have you an Account?
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
