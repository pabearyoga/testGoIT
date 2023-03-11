import PropTypes from 'prop-types';

import useLocalStorage from "../../../hooks/useLocalStorage";


import Section from "../../Section/Section";
import DecorateImg from "../../DecorateImg/DecorateImg";
import Logo from "../../Logo/Logo";
import Avatar from "../../Avatar/Avatar";
import CountWrapper from "../../Count/CountWrapper/CountWrapper";
import CountTitle from "../../Count/CountTitle/CountTitle";
import Button from "../../Button/Button";



const CardItem = ({ data }) => {
  
  const [localStorage, setLocaleStorage] = useLocalStorage(`card_${data.id}`, {"isFollowing": false, "followers": data.followers, "tweets": data.tweets });

  const following = () => {
    localStorage.isFollowing ?
      setLocaleStorage((prevState) => ({ ...prevState, "isFollowing": false, "followers": prevState.followers - 1 })) :
      setLocaleStorage((prevState) => ({ ...prevState, "isFollowing": true, "followers": prevState.followers + 1 }))
  }
  
  
  const followersPoint = (number) => {
    const numberArr = number.toString().split("");
    const firstPart = numberArr.slice(0,3).join("")
    const secondPart = numberArr.slice(3).join("")
    return `${firstPart},${secondPart}`
  }
  
    return (
      <Section>
        <Logo />
        <DecorateImg />
        <Avatar img={data.avatar} />
        <CountWrapper>
          <CountTitle count={localStorage.tweets} title={'tweets'} />
          <CountTitle count={followersPoint(localStorage.followers)} title={'followers'}/>
        </CountWrapper>
        <Button state={localStorage.isFollowing} followingClick={following} alreadyClickedTitle={'Following'} clickOnTitle={'Follow'} />       
      </Section>
    )
};

export default CardItem

CardItem.propTypes = {
    data: PropTypes.object.isRequired,
};