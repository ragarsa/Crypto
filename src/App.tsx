import { Typography, createMuiTheme, ThemeProvider } from '@material-ui/core'

import { Counter } from './components/Counter';

import { ChartState } from './chart/ChartContext';
import { Chart } from './components/Chart';


let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#37474f',
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
  }
});

theme.typography.h1 = {
  fontSize: '2rem',
  '@media (min-width:600px)': {
    fontSize: '4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

function App() {

  return (
    <>
      <ChartState>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Typography variant="h1" color="primary">Cotización de criptomonedas</Typography>
          </div>

          <Counter />

          <Chart/>
        </ThemeProvider>
      </ChartState>
    </>
  )
}

export default App;
