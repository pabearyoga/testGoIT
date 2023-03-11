import PropTypes from 'prop-types';

import CardItem from './CardItem/CatdItem';
import css from './CardList.module.css'


const CardList  = ({userData }) => (

  <ul className={css.cardList}>
    {userData.map(userData => (
      <li className={css.cardItem}  key={userData.id}>
        <CardItem data={userData} />       
      </li>))}
  </ul>
  );

export default CardList

CardList.propTypes = {
    userData: PropTypes.array.isRequired,
};