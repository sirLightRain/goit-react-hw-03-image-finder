import {
  StyledSearchbar,
  StyledForm,
  StyledButtom,
  StyledSpan,
  StyledFInput,
} from './Searchbar.styled';

export const Searchbar = () => {
  return (
    <StyledSearchbar>
      <StyledForm>
        <StyledButtom type="submit">
          <StyledSpan>Search</StyledSpan>
        </StyledButtom>

        <StyledFInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </StyledForm>
    </StyledSearchbar>
  );
};
