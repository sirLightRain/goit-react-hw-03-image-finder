import { StyledImageGalleryItem, StyledImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, tags }) => {
  return (
    <StyledImageGalleryItem>
      <StyledImg
        src={webformatURL}
        alt={tags} />
    </StyledImageGalleryItem>
  );
};
