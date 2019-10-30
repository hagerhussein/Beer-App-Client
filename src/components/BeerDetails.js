import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { theme } from "./PostcodeSearch";
import { ThemeProvider } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%"
  },
  cardContent: {
    flexGrow: 1
  }
}));

export default function BeerDetails(props) {
  const { brewery } = props;
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <ThemeProvider theme={theme}>
          <AppBar position="relative" color="primary">
            <Toolbar>
              <Typography variant="h5" color="inherit" noWrap>
                Brewery Finder
              </Typography>
            </Toolbar>
          </AppBar>
          <main>
            <Container className={classes.cardGrid} maxWidth="md">
              <Grid container spacing={4}>
                {!brewery.beers &&
                  "There are no information for beers avaliable"}

                {brewery.beers &&
                  brewery.beers.map(beer => (
                    <Grid item key={beer.id} xs={12} sm={6} md={4}>
                      <Card className={classes.card}>
                        <CardMedia
                          className={classes.cardMedia}
                          image="https://cdn.vox-cdn.com/thumbor/f6GzJrma4qgRt-Gz3aJrYJbwEmQ=/0x0:1000x750/920x613/filters:focal(0x0:1000x750):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/48555071/shutterstock_257516356.0.0.jpg"
                          title="Image title"
                        />
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant="h5" component="h2">
                            Name: {beer.name}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            Style: {beer.style}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            Keg: {beer.keg}
                          </Typography>
                          <Typography variant="subtitle1" color="textSecondary">
                            Alcohol %: {beer.alcohol}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
              </Grid>
            </Container>
            <Link onClick={props.goBackToPreviousPage}>
              <Button color="primary" size="large">
                Go back
              </Button>
            </Link>
          </main>
        </ThemeProvider>
      </Container>
    </React.Fragment>
  );
}
