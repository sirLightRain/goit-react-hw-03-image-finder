import { Component } from 'react';

//! Імпорт компонент
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
//! Імпорт компонент

import { Layout } from 'Layout';
import { GlobalStyle } from 'GlobalStyle';
import { GetImg } from './GetAPI/GetAPI';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
  };

  handleSubmit = async query => {
    // Оновлення стану замість передачі параметрів події
    const { page } = this.state;

    try {
      this.setState({ isLoading: true });

      const response = await GetImg(query, page);
      const newImages = response.data.hits;

      // Вивести отримані дані у консоль
      console.log('Отримані дані з API:', newImages);

      this.setState(prevState => ({
        query, // Оновити запит у стані
        images: [...prevState.images, ...newImages],
        page: prevState.page + 1,
        isLoading: false,
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
      this.setState({ isLoading: false });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      // HTTP request
    }
  }

  handleLoadMore = () => {
    this.handleSubmit();
  };

  render() {
    const { images, isLoading } = this.state;

    return (
      <Layout>
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length > 0 && <ImageGallery images={images} />}
        {isLoading && <Loader />}
        {!isLoading && images.length > 0 && (
          <Button onClick={this.handleLoadMore} />
        )}

        {/* <Modal /> */}

        <GlobalStyle />
      </Layout>
    );
  }
}
