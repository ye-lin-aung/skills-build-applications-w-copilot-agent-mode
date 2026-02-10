const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
let codespaceUrl = 'http://localhost:8000';
if (codespaceName) {
  codespaceUrl = `https://${codespaceName}-8000.app.github.dev`;
}
window.REACT_APP_CODESPACE_URL = codespaceUrl;
console.log('REACT_APP_CODESPACE_URL:', codespaceUrl);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
