import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#bf360c"
      //  main: "#5d4037"
    },
    secondary: {
      main: "#a1887f"
      // main: "#424242"
    }
  },
  typography: {
    fontFamily: ["Arial"]
  }
});

const useStyles = makeStyles(theme => ({
  landingPageMain: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage:
      "url(https://10kbrew.com/wp-content/uploads/2017/07/Home_Image_9.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  landingPageContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  },
  cardl: {
    display: "flex"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  formControl: {
    margin: theme.spacing(1)
  }
}));

export default function PostcodeSearch(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <ThemeProvider theme={theme}>
          <AppBar position="relative" color="primary">
            <Toolbar>
              <Typography variant="h4" color="inherit" noWrap>
                Brewery Finder
              </Typography>
            </Toolbar>
          </AppBar>

          <main>
            <Paper className={classes.landingPageMain}>
              {
                <img
                  style={{ display: "none" }}
                  src="https://10kbrew.com/wp-content/uploads/2017/07/Home_Image_9.jpg"
                  alt="background"
                />
              }
              <div className={classes.overlay} />
              <Grid container>
                <Grid item md={6}>
                  <div className={classes.landingPageContent}>
                    <Typography variant="h6" color="inherit" paragraph>
                      Find your nearest brewery anywhere in the Netherlands with
                      this app. Simply put a valid Dutch Postcode in the search
                      bar below and You are one step closer to your favorite
                      craft beer.
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Paper>
            <form
              className={classes.form}
              noValidate
              id="query"
              onSubmit={props.onSubmit}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl className={classes.formControl} fullWidth error>
                    <TextField
                      error
                      variant="filled"
                      required
                      fullWidth
                      id="postcode"
                      placeholder="1234AA"
                      value={props.values.query}
                      onChange={props.onChange}
                      label="Type Postcode"
                      name="query"
                    />
                    <FormHelperText id="component-error-text">
                      {props.queryErrors}
                    </FormHelperText>
                  </FormControl>
                  <Button
                    type="submit"
                    fullWidth
                    size="meduim"
                    variant="contained"
                    color="secondary"
                    className={classes.submit}
                  >
                    Search
                  </Button>
                </Grid>
              </Grid>
            </form>
            <Grid container spacing={4}>
              {!props.brewery ? (
                ""
              ) : (
                <Grid item key={props.brewery.id} xs={12} md={6}>
                  <Card className={classes.cardl}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          {props.brewery.name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {props.brewery.address}, {props.brewery.city}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          Opening times: {props.brewery.open.toString()}
                        </Typography>
                        <CardActions>
                          <Link to={"/beers"} className="beer">
                            <Button color="primary" size="small">
                              Explore their beers
                            </Button>
                          </Link>
                        </CardActions>
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://image-cdn.neatoshop.com/styleimg/77353/none/black/default/395473-20;1535423983t.jpg"
                        title="Image title"
                      />
                    </Hidden>
                  </Card>
                </Grid>
              )}
            </Grid>
          </main>
        </ThemeProvider>
      </Container>
    </React.Fragment>
  );
}
