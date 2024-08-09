// components/Navbar.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { FormControl, InputLabel, MenuItem, Select, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import themes from '../themes/themes.json'; // Adjust the import path as needed

const Navbar = ({ setCategory, selectTheme, handleThemeToggle, darkMode, themeName }) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const list = () => (
    <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
     
    </div>
  );

  return (
    <>
      <AppBar position="static" className="bg-blue-900">
        <Toolbar className="flex justify-between">
          <div className="flex items-center">
            <Typography variant="h6" className="text-white ml-2">
              News <span className="bg-red-700 p-2 rounded-md"> Magazine </span>
            </Typography>
          </div>
          <div className="hidden md:flex justify-center flex-grow">
            <Button color="inherit" className="text-white" onClick={() => setCategory("general")}>
              General
            </Button>
            <Button color="inherit" className="text-white" onClick={() => setCategory("technology")}>
              Technology
            </Button>
            <Button color="inherit" className="text-white" onClick={() => setCategory("business")}>
              Business
            </Button>
            <Button color="inherit" className="text-white" onClick={() => setCategory("health")}>
              Health
            </Button>
            <Button color="inherit" className="text-white" onClick={() => setCategory("sports")}>
              Sports
            </Button>
            <Button color="inherit" className="text-white" onClick={() => setCategory("science")}>
              Science
            </Button>
            <Button color="inherit" className="text-white" onClick={() => setCategory("entertainment")}>
              Entertainment
            </Button>
          </div>
          <div className="flex items-center">
            <FormControl variant="outlined" size="small" className="text-white">
              <InputLabel id="theme-selector-label">Theme</InputLabel>
              <Select
                labelId="theme-selector-label"
                id="theme-selector"
                value={themeName}
                onChange={(e) => selectTheme(e.target.value)}
                label="Theme"
                className="text-white"
              >
                {Object.keys(themes).map((themeKey) => (
                  <MenuItem key={themeKey} value={themeKey}>
                    {themeKey}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <IconButton onClick={handleThemeToggle} color="inherit">
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  );
};

export default Navbar;
