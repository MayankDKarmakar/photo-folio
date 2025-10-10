import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import AlbumList from "./components/AlbumList/AlbumList";
import ImageList from "./components/ImageList/ImageList";
import { ToastContainer } from "react-toastify";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "./firebaseInit";

function App() {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  //-----------------fetching Data from Firebase using snapShot method----------------------//
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "albums"), (querysnapShot) => {
      const albums = querysnapShot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setAlbums(albums);
    });

    return () => unsub();
  }, []);

  return (
    <div className="App">
      <Header />
      {selectedAlbum ? (
        <ImageList
          selectedAlbum={selectedAlbum}
          setSelectedAlbum={setSelectedAlbum}
        />
      ) : (
        <AlbumList albums={albums} setSelectedAlbum={setSelectedAlbum} />
      )}

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;
