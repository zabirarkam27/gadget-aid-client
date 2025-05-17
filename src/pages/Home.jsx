import { Helmet } from 'react-helmet-async';
import PopularServices from '../components/PopularServices';

const Home = () => {
    return (
      <>
        <Helmet>
          <title>Home || GadgetAid</title>
        </Helmet>
        <PopularServices></PopularServices>
      </>
    );
};

export default Home;