import PropTypes from 'prop-types';
import css from "./CardList.module.css"

import CardItem from './CardItem/CatdItem';


const CardList  = ({userData }) => (

  <ul className={css.cardList}>
    {userData.map(userData => (
      <li
        key={userData.id}
        className={css.contactItem}
        >
            <CardItem data={userData} />       
      </li>))}
  </ul>
  );

export default CardList

CardList.propTypes = {
    userData: PropTypes.array.isRequired,
};