import React, { useEffect, useState } from "react";
import "./AlbumList.css";
import { BiPhotoAlbum } from "react-icons/bi";
import AlbumForm from "./AlbumForm/AlbumForm";
import { db } from "../../firebaseInit";
import { toast } from "react-toastify";
import { addDoc, collection, onSnapshot } from "firebase/firestore";

const AlbumList = () => {
  //------------------useStates-------------------------//
  const [albumForm, setAlbumForm] = useState(false);
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

  async function handleAddAlbum(albumName) {
    if (albums.includes(albumName)) {
      toast.error("Album name already exist");
      return;
    }
    try {
      await addDoc(collection(db, "albums"), { name: albumName });
      toast.success("Album added successfully");
    } catch (error) {
      toast.error("Failed to add album");
    }
  }

  console.log("Albums : ", albums);
  return (
    <div className="album-list">
      <AlbumForm albumForm={albumForm} handleAddAlbum={handleAddAlbum} />

      <div className="album-list-head">
        <h2>Your Albums</h2>
        <button
          className={`${albumForm ? "cancelButton" : "addButton"}`}
          onClick={() => setAlbumForm(!albumForm)}
        >
          {albumForm ? "Cancel" : "Add Album"}
        </button>
      </div>
      <div className="album-grids">
        {albums.map((album, i) => (
          <div className="album-card" key={i}>
            <div className="album-icon-container">
              <BiPhotoAlbum className="album-icon" />
            </div>
            <h3 className="album-title">{album.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumList;
