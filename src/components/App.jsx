//! Імпорт компонент
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
//! Імпорт компонент

import { Layout } from "Layout";
import { GlobalStyle } from "GlobalStyle";

export const App = () => {
  return (
    <Layout>
      <Searchbar/>
      <ImageGallery/>
      <ImageGalleryItem/>
      <Loader/>
      <Button/>
      <Modal />
      
      <GlobalStyle/>
    </Layout>
  );
};
