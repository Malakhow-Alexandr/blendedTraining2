import { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';
import { Section, Container, CountryInfo, Loader } from 'components';

export const Country = () => {
  const [country, setCountry] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { countryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchDataCountry = async () => {
      try {
        const response = await fetchCountry(countryId);
        setCountry(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDataCountry();
  }, [countryId]);

  const location = useLocation();

  const btnBack = location?.state?.from ?? '/';

  return (
    <Section>
      <Container>
        <CountryInfo
          flag={country.flag}
          capital={country.capital}
          country={country.countryName}
          id={country.id}
          languages={country.languages}
          population={country.population}
        />
        <Link to={btnBack}>
          <button type="button">Back</button>
        </Link>
      </Container>
    </Section>
  );
};
