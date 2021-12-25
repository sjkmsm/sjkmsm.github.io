import React from "react";
import "./App.css";
import me from "./assets/me.jpeg";
import {
  Avatar,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  Theme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      margin: theme.spacing(3),
    },
  })
);
const theme = createTheme({
  typography: {
    fontFamily: "Sawarabi Mincho",
  },
});

function App() {
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Grid container>
            <Grid item xs={12}>
              <Typography
                className={classes.title}
                variant="h3"
                component="div"
              >
                h3. Heading
              </Typography>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs="auto">
                <Avatar alt="ごましおきなこ" src={me} />
              </Grid>
              <Grid item xs>
                <Typography variant="body2" component="div">
                  書いた人:ごましおきなこ
                </Typography>
                <Typography variant="body2" component="div">
                  社会人もうすぐ5年目、転職してもうすぐ2年経ちます。
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" component="div">
                この記事は
                <a
                  href="https://adventar.org/calendars/6457"
                  target="_blank"
                  rel="noreferrer"
                >
                  はじめてのIT勉強会アドベントカレンダー'21
                </a>
                の25日目の記事です。
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
