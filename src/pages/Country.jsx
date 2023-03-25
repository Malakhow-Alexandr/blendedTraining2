import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

  return (
    <Section>
      <Container>
        <h2>Country</h2>
      </Container>
    </Section>
  );
};
