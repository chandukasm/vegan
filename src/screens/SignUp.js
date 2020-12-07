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
import { CardMedia } from "@material-ui/core";
import launch from "./launch.jpg";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";

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
    margin: theme.spacing(1),
    borderRadius: 3,
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
}));

export default function SignUp() {
  const classes = useStyles();

  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [iserr, setiserr] = useState(false);
  const [err, seterr] = useState("email address has to be a valid email");
  const [isLower, setisLower] = useState(false);
  const [isUpper, setisUpper] = useState(false);
  const [isNumber, setisNumber] = useState(false);
  const [is8, setis8] = useState(false);
  const onsubmit = (e) => {
    // setiserr(!iserr);
    console.log(iserr);
    e.preventDefault();

    console.log({ pass });
    //cognito
  };

  const onPassChange = (e) => {
    e.length > 8 ? setis8(true) : setis8(false);
    checkLower(e);
    checkNumber(e);
    checkUpper(e);
    setpass(e);
  };

  const checkUpper = (e) => {
    e.match(/(.*[A-Z].*)/) ? setisUpper(true) : setisUpper(false);
  };

  const checkLower = (e) => {
    e.match(/(.*[a-z].*)/) ? setisLower(true) : setisLower(false);
  };

  const checkNumber = (e) => {
    e.match(/.*\d.*/) ? setisNumber(true) : setisNumber(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography> */}
        <img src={launch} style={{ width: 250, marginBottom: 20 }} />
        {/* <CardMedia image="./launch.jpg" style={{ height: 140 }} /> */}
        <Typography>Sign up with a new account</Typography>
        {iserr ? (
          <Typography variant="subtitle2" color="error">
            {err}
          </Typography>
        ) : (
          <Typography></Typography>
        )}
        <form className={classes.form} onSubmit={onsubmit}>
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
            onChange={(e) => onPassChange(e.currentTarget.value)}
          />
          {pass.length > 0 ? (
            <Grid container>
              <Grid item xs={12}>
                <Typography
                  variant="subtitle2"
                  style={isLower ? { color: "#64dd17" } : { color: "red" }}
                >
                  {isLower ? (
                    <CheckIcon fontSize="small" />
                  ) : (
                    <ClearIcon fontSize="small" />
                  )}
                  Password must contain a lower case lettter
                </Typography>
                <Typography
                  variant="subtitle2"
                  style={isUpper ? { color: "#64dd17" } : { color: "red" }}
                >
                  {isUpper ? (
                    <CheckIcon fontSize="small" />
                  ) : (
                    <ClearIcon fontSize="small" />
                  )}{" "}
                  Password must contain an upper case lettter
                </Typography>
                <Typography
                  variant="subtitle2"
                  style={isNumber ? { color: "#64dd17" } : { color: "red" }}
                >
                  {isNumber ? (
                    <CheckIcon fontSize="small" />
                  ) : (
                    <ClearIcon fontSize="small" />
                  )}{" "}
                  Pasword must contain a number
                </Typography>
                <Typography
                  variant="subtitle2"
                  style={is8 ? { color: "#64dd17" } : { color: "red" }}
                >
                  {is8 ? (
                    <CheckIcon fontSize="small" />
                  ) : (
                    <ClearIcon fontSize="small" />
                  )}
                  Pasword must contain at least 8 characters
                </Typography>
              </Grid>
            </Grid>
          ) : (
            <div></div>
          )}
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <br />
          <br />
          <Grid container style={{ visibility: "hidden" }}>
            <Grid item xs={12}>
              <Link href="#" variant="body2">
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
          >
            Sign up
          </Button>
          <Grid container>
            <Grid item xs={12}>
              <Typography style={{ textAlign: "center" }}>
                Already have an account? &nbsp;
                <Link href="/signin" variant="body2">
                  Sign in
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
