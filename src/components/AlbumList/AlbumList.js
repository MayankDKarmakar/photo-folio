import React, { useState } from "react";
import "./AlbumList.css";

import AlbumForm from "./AlbumForm/AlbumForm";
import AlbumListHead from "./AlbumListHead/AlbumListHead";
import AlbumListGrid from "./AlbumListGrid/AlbumListGrid";
import { db } from "../../firebaseInit";
import { toast } from "react-toastify";
import { addDoc, collection } from "firebase/firestore";

const AlbumList = ({ albums, setSelectedAlbum }) => {
  //------------------useStates-------------------------//
  const [albumForm, setAlbumForm] = useState(false);

  //-------------------adding document using addDoc---------------------//
  async function handleAddAlbum(albumName) {
    if (albums.includes(albumName)) {
      toast.error("Album name already exist");
      return;
    }
    try {
      await addDoc(collection(db, "albums"), {
        name: albumName,
      });
      toast.success("Album added successfully");
    } catch (error) {
      toast.error("Failed to add album");
    }
  }

  return (
    <div className="album-list">
      {/* AlbumForm is displaying form to create album */}
      <AlbumForm albumForm={albumForm} handleAddAlbum={handleAddAlbum} />
      {/* AlbumListHead is displaying the heading and add album button */}
      <AlbumListHead albumForm={albumForm} setAlbumForm={setAlbumForm} />
      {/* all the albums are fetched and displayed in card fromat in AlbumListGrid */}
      <AlbumListGrid albums={albums} setSelectedAlbum={setSelectedAlbum} />
    </div>
  );
};

export default AlbumList;
