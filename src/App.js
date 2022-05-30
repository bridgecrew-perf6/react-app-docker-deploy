import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React logo is good, but where is the app?
        </p>
        <p>
          Deployed React app using GitHub Actions. Go ahead and create your web-app.....
        </p>
        <a
          className="App-link"
          href="https://medium.com/@Prashanth2507/deploying-react-app-in-aws-s3-cloudfront-using-docker-jenkins-or-github-actions-b2d3cf325c30"
          target="_blank"
          rel="noopener noreferrer"
        >
          Medium article
        </a>
      </header>
    </div>
  );
}

export default App;
