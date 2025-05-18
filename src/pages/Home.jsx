import { Helmet } from 'react-helmet-async';
import PopularServices from '../components/PopularServices';
import Banner from '../components/Banner';

const Home = () => {
    return (
      <>
        <Helmet>
          <title>Home || GadgetAid</title>
        </Helmet>
        <Banner></Banner>
        <PopularServices></PopularServices>
      </>
    );
};

export default Home;