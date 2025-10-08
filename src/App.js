import "./App.css";
import Header from "./components/Header/Header";
import AlbumList from "./components/AlbumList/AlbumList";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Header />
      <AlbumList />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;
