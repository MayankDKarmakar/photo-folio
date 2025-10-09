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
  //-----------------fetching Data from Firebase using snapShot method----------------------//
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "albums"), (querysnapShot) => {
      const albums = querysnapShot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      console.log(albums);
      setAlbums(albums);
    });

    return () => unsub();
  }, []);

  // async function handleAddAlbum(albumName) {
  //   if (albums.includes(albumName)) {
  //     toast.error("Album name already exist");
  //     return;
  //   }
  //   try {
  //     await addDoc(collection(db, "albums"), { name: albumName });
  //     toast.success("Album added successfully");
  //   } catch (error) {
  //     toast.error("Failed to add album");
  //   }
  // }

  return (
    <div className="App">
      <Header />
      <AlbumList albums={albums} />
      <ImageList />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;
