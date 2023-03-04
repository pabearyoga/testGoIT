import PropTypes from 'prop-types';

import CardItem from './CardItem/CatdItem';


const CardList  = ({userData }) => (

  <ul>
    {userData.map(userData => (
      <li key={userData.id}>
        <CardItem data={userData} />       
      </li>))}
  </ul>
  );

export default CardList

CardList.propTypes = {
    userData: PropTypes.array.isRequired,
};