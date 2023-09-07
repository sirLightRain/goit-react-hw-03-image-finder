import React, { useState } from 'react';

import {
  StyledSearchbar,
  StyledForm,
  StyledButtom,
  StyledSpan,
  StyledFInput,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(query);
  };

  return (
    <StyledSearchbar>
      <StyledForm onSubmit={handleSubmit}>
        <StyledButtom type="submit">
          <StyledSpan>Search</StyledSpan>
        </StyledButtom>

        <StyledFInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={evt => setQuery(evt.target.value)}
        />
      </StyledForm>
    </StyledSearchbar>
  );
};
