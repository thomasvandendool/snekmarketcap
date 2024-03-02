import {
  Box, Paper, AppBar, Toolbar, Button, IconButton,
} from '@mui/material';
import CryptoTable from './CryptoTable';

const mockRows = [
  { rank: 1, name: 'Snek', price: '$41,000', change24h: '+1.5%', change7d: '+3.2%', marketCap: '$780B', volume24h: '$10B', circulatingSupply: '18M' },
  { rank: 2, name: 'Snek', price: '$2,500', change24h: '-2.1%', change7d: '+4.0%', marketCap: '$300B', volume24h: '$20B', circulatingSupply: '115M' },
  { rank: 3, name: 'Snek', price: '$350', change24h: '+3.5%', change7d: '+1.2%', marketCap: '$50B', volume24h: '$5B', circulatingSupply: '50M' },
  { rank: 4, name: 'Snek', price: '$1', change24h: '-0.1%', change7d: '-0.2%', marketCap: '$40B', volume24h: '$50B', circulatingSupply: '40B' },
  { rank: 5, name: 'Snek', price: '$1.5', change24h: '+2.5%', change7d: '+5.2%', marketCap: '$40B', volume24h: '$2B', circulatingSupply: '30B' },
  { rank: 6, name: 'Snek', price: '$1.5', change24h: '+2.5%', change7d: '+5.2%', marketCap: '$40B', volume24h: '$2B', circulatingSupply: '30B' },
  { rank: 7, name: 'Snek', price: '$1.5', change24h: '+2.5%', change7d: '+5.2%', marketCap: '$40B', volume24h: '$2B', circulatingSupply: '30B' },
  { rank: 8, name: 'Snek', price: '$1.5', change24h: '+2.5%', change7d: '+5.2%', marketCap: '$40B', volume24h: '$2B', circulatingSupply: '30B' },
  { rank: 9, name: 'Snek', price: '$1.5', change24h: '+2.5%', change7d: '+5.2%', marketCap: '$40B', volume24h: '$2B', circulatingSupply: '30B' },
  { rank: 10, name: 'Snek', price: '$1.5', change24h: '+2.5%', change7d: '+5.2%', marketCap: '$40B', volume24h: '$2B', circulatingSupply: '30B' },
  // ...more rows
];

export const Layout = () => {
  return (
    <Box sx={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <AppBar position="static" color="default" elevation={0} sx={{ width: '100%', minHeight: '120px', 
          backgroundColor: '#ffffff',
      }}>
        <Toolbar sx={{
          backgroundColor: '#ffffff',
        }}>
          <img src="/snekmarketcap-logo.jpg" alt="snackmarketcap logo" style={{
            width: '200px',
            height: '100px',
            position: 'absolute',
            left: '-20px',
            top: '10px',
          }} />
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit"
          >Login</Button>
          <IconButton color="inherit">
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ height: 'calc(100% - 64px)', overflowY: 'auto', mt: 8 }}>
        {/* Chart & Filter Bar */}
        <Paper elevation={1} sx={{ marginBottom: '16px' }}>
          <Box p={2}>
            {/* Placeholder for chart and filter components */}
            Chart & Filters
          </Box>
        </Paper>
        {/* Main Content */}
        <CryptoTable rows={
          mockRows
        } />
      </Box>
    </Box>
  );
};
