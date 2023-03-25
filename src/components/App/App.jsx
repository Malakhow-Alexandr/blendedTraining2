import { Header } from 'components';
import { Routes, Route } from 'react-router-dom';
import { CountrySearch, Home, Country } from 'pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/country" element={<CountrySearch />} />
        <Route path="/country/:countryId" element={<Country />} />
      </Route>
      <Route
        path="*"
        element={
          <div>
            <p>Sorry your page not found! Please reload your page.</p>
          </div>
        }
      />
    </Routes>
  );
};
