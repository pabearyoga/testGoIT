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
    const [state, setState] = useLocalStorage(`following_${data.id}`, false);
    const [followers, setFollowers] = useLocalStorage(`followers_${data.id}`, data.followers);  
    const [tweets] = useLocalStorage(`tweets_${data.id}`, data.tweets);

    const following = () => {
        state ? setState(false) : setState(true)
        state ? setFollowers((prevState) => (prevState - 1)) : setFollowers((prevState) => (prevState + 1))
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
          <CountTitle count={tweets} title={'tweets'} />
          <CountTitle count={followersPoint(followers)} title={'followers'}/>
        </CountWrapper>
        <Button state={state} followingClick={following} alreadyClickedTitle={'Following'} clickOnTitle={'Follow'} />       
      </Section>
    )
};

export default CardItem

CardItem.propTypes = {
    data: PropTypes.object.isRequired,
};