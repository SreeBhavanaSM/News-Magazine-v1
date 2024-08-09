// App.js or your main app component
import React, { useState } from 'react';
import Navbar from './components/NavBar'; // Adjust the import path as needed
import NewsBoard from './components/NewsBoard'; // Adjust the import path as needed
import NewsItem from './components/NewsItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import themes from './themes/themes.json'; // Adjust the import path as needed
import './index.css'; // Import your global CSS styles

const App = () => {
  const [category, setCategory] = useState('general'); // Default category
  const [themeName, setThemeName] = useState('defaultTheme'); // Default theme name
  const [darkMode, setDarkMode] = useState(false); // Default to false or true based on your app's logic

  // Function to select the theme based on themeName
  const selectTheme = (themeName) => {
    setThemeName(themeName);
    setDarkMode(themeName === 'darkTheme'); // Set darkMode based on themeName
  };

  // Create dynamic theme based on themeName
  const theme = createTheme({
    palette: themes[themeName].palette,
  });

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
    setThemeName(darkMode ? 'defaultTheme' : 'darkTheme');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar
        setCategory={setCategory}
        selectTheme={selectTheme}
        handleThemeToggle={handleThemeToggle}
        darkMode={darkMode}
        themeName={themeName}
      />
      <NewsBoard category={category}/>
      {/* <NewsItem /> */}
    </ThemeProvider>
  );
};

export default App;
