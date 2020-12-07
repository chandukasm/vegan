import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import launch from "./launch.jpg";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        VeganLaunch
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    borderColor: "red",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#466754",
    "&:hover": {
      backgroundColor: "#074155",
    },
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "yellow !important",
  },
}));

export default function SignIn() {
  const classes = useStyles();

  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [iserr, setiserr] = useState(true);
  const [err, seterr] = useState("email address has to be a valid email");

  const onsubmit = (e) => {
    // setiserr(!iserr);
    console.log(email, pass);
    e.preventDefault();
    //cognito
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography> */}
        <img src={launch} style={{ width: 250, marginBottom: 20 }} />
        <Typography>Sign in with your email and password</Typography>
        {iserr ? (
          <Typography variant="subtitle2" color="error">
            {err}
          </Typography>
        ) : (
          <Typography></Typography>
        )}
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setemail(e.currentTarget.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            // InputProps={{
            //   classes: {
            //     notchedOutline: classes.notchedOutline,
            //   },
            // }}
            onChange={(e) => setpass(e.currentTarget.value)}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <br />
          <br />
          <Grid container>
            <Grid item xs={12}>
              <Link href="/fpass" variant="body2">
                Forgot your password?
              </Link>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onsubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs={12}>
              <Typography style={{ textAlign: "center" }}>
                Need an account? &nbsp;
                <Link href="/signup" variant="body2">
                  Sign Up
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
