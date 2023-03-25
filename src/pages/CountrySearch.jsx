import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';

import { useState, useEffect } from 'react';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [searchValue, setSearchValue] = useState('')
  const [countries, setCounries] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = (value) => {
  setSearchValue(value)
  }
  
  useEffect(() => {
    if (searchValue === '') {
  return
}

    setLoading(true);
    const fetchRegion = async () => {
      try {
        const responce = await fetchByRegion(searchValue);
        console.log(responce)
        setCounries(responce)
      } catch (error) {
        setError(error)
      }
    

    }

    fetchRegion()
  }, [searchValue])
  
  


  return (
    <Section>
      <Container>
        < SearchForm getRegion={onSubmit} />
        <CountryList countries={countries } />
      </Container>
    </Section>
  );
};
