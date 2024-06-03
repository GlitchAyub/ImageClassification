import './App.css';
import FileUpload from './components/file_upload'
import Avatar from './components/avatar'

function App() {
  return (
  
<>
<nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Athelete Classification</span>
      </div>
    </nav>
    <Avatar/>
    <br/>
    <FileUpload/>
</>
  );
}

export default App;
