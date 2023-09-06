import { Component } from 'react';

//! Імпорт компонент
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
//! Імпорт компонент

import { Layout } from 'Layout';
import { GlobalStyle } from 'GlobalStyle';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({
      query: evt.target.elements.query.value,
      images: [],
      page: 1,
    });
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
    this.setState(prevState => ({
      page: prevState + 1,
    }));
  };

  render() {
    return (
      <Layout>
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.images.length > 0 && <ImageGallery />}

        <ImageGalleryItem />
        <Loader />
        <Button onClick={this.handleLoadMore} />
        <Modal />

        <GlobalStyle />
      </Layout>
    );
  }
}
