import useLocalStorage from "../hooks/useLocalStorage";

import avatar from '../image/Hansel.svg'

import Section from "./Section/Section";
import DecorateImg from "./DecorateImg/DecorateImg";
import Logo from "./Logo/Logo";
import Avatar from "./Avatar/Avatar";
import CountWrapper from "./Count/CountWrapper/CountWrapper";
import CountTitle from "./Count/CountTitle/CountTitle";
import Button from "./Button/Button";


const App = () => {
  const [state, setState] = useLocalStorage('following', false);
  const [followers, setFollowers] = useLocalStorage('followers', 100500);  
  const tweets = 777;


  
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
    <div>
      <Section>
        <Logo />
        <DecorateImg />
        <Avatar img={avatar} />
        <CountWrapper>
          <CountTitle count={tweets} title={'tweets'} />
          <CountTitle count={followersPoint(followers)} title={'followers'}/>
        </CountWrapper>
        <Button state={state} followingClick={following} alreadyClickedTitle={'Following'} clickOnTitle={'Follow'} />       
      </Section>
    </div>
)
}

export default App