# Report page for assessment task.

This repository contains a React application showcasing an assessment with a home for dashboard, and documentation page. The application is styled using `styled-components` and is deployed to GitHub Pages.

## Project Structure

- **App.js**: Main entry point of the application, handles routing and rendering of components.
- **LandingPage.js**: Displays a welcome message and a button to navigate to the home page.
- **HomePage.js**: Contains the main dashboard content.
- **DocumentationPage.js**: Contains the documentation content.
- **AppContext.js**: Provides global context for the application.

## Navigation Bar

The navigation bar is included in the main `App.js` and provides links to the Home and Documentation pages. It also displays a logo.

```jsx
const NavigationBar = ({ currentPath, navigate }) => (
  <NavBar>
    <NavLinks>
      <NavLink onClick={() => navigate('/home')} active={currentPath === '/home'}>Dashboard</NavLink>
      <NavLink onClick={() => navigate('/documentation')} active={currentPath === '/documentation'}>Documentation</NavLink>
    </NavLinks>
    <Logo src="/logo.png" alt="Logo" />
  </NavBar>
);
```

## Routing

The routing logic is handled within `App.js` using `react-router-dom`.

```jsx
const App = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const renderContent = () => {
    switch (currentPath) {
      case '/':
        return <LandingPage navigate={navigate} />;
      case '/home':
        return (
          <>
            <NavigationBar currentPath={currentPath} navigate={navigate} />
            <HomePage />
          </>
        );
      case '/documentation':
        return (
          <>
            <NavigationBar currentPath={currentPath} navigate={navigate} />
            <DocumentationPage />
          </>
        );
      default:
        return <div>404 Not Found</div>;
    }
  };

  return (
    <AppProvider>
      <GlobalStyle />
      {renderContent()}
    </AppProvider>
  );
};

export default App;
```

## Deployment to GitHub Pages

To deploy the application to GitHub Pages:

1. Install `gh-pages`:

   ```bash
   npm install --save gh-pages
   ```

2. Update `package.json` with the following:

   ```json
   "homepage": "https://brukeGit.github.io/assessmentReportOSC",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy the application:

   ```bash
   npm run deploy
   ```

## License

This project is licensed under the MIT License.
