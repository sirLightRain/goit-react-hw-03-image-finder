import { Component } from 'react';

//! Імпорт компонент
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
// import { Modal } from './Modal/Modal';
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

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, page, images } = this.state;

    this.setState({ isLoading: true });

    return GetImg(query, page)
      .then(response => {
        this.setState(prevState => ({
          images: [...images, ...response.data.hits],
          isLoading: false,
        }));
      })
      .catch(error => {
        console.error('Помилка при отриманні зображень з API:', error);
        this.setState({ isLoading: false });
      });
  };

  handleSearch = query => {
    this.setState({ query, images: [], page: 1 }, () => {
      this.fetchImages();
    });
  };

  loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
      }),
      () => {
        this.fetchImages();
      }
    );
  };

  render() {
    const { images, isLoading } = this.state;

    return (
      <Layout>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={images} />
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && (
          <Button onClick={this.loadMore}>Load More</Button>
        )}
        <GlobalStyle />
      </Layout>
    );
  }
}
