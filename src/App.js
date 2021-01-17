import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h3>Welcome to</h3>
      <h1>Helping Hand!</h1>
      <br></br>
      <br></br>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
      <ol>
          <li>Make an account as a helper or helpee.</li>
          <li>
              Helpers are those of you willing to perform specific tasks for helpees, that can range from simple tasks like a phone call,
              to grocery shopping, or even just spending some time with them virtually.
          </li>
          <li>Helpees are those of you that require services due to being less physically able, or in need of help due to negative impacts from the Covid-19 pandemic.</li>
          <li> Then, there is a system that matches helpers to helpees and allows people that can provide the right services to be matched to people looking for them.</li>
      </ol>
      <br></br>
      <br></br>
      <br></br>
      <button id="login" type="button" onClick="location.href='login.html'" class="btn btn-success">Login</button>
      <button id="signup" type="button" onClick="location.href='signup.html'" class="btn btn-primary">Sign Up</button>
    </div>
  );
}

export default App;
