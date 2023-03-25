import { FiSearch } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({getRegion}) => {
  const [query, setQuery] = useState('')
  

  const getValue = (event) => {
setQuery(event.currentTarget.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
  getRegion(query)  

  }
 


  return (
    <SearchFormStyled onSubmit={onFormSubmit }>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select onChange={getValue} aria-label="select" name="region" required>
        <option  disabled defaultValue="">
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
