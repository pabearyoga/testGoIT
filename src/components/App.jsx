import useLocalStorage from "../hooks/useLocalStorage";

import bgImg from '../image/picture.svg'
import logo from '../image/Vector.svg'
import avatar from '../image/Hansel.svg'


const App = () => {
  const [state, setState] = useLocalStorage('following', false);
  const [followers, setFollowers] = useLocalStorage('followers', 100500);  
  const tweets = 777;


  
  const following = () => {
    state ? setState(false) : setState(true)
    state ? setFollowers((prevState) => (prevState - 1)) : setFollowers((prevState) => (prevState + 1))
  }


  const bntStyle = { padding: '14px 28px', color: '#373737', backgroundColor: '#EBD8FF', boxShadow: '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)', borderRadius: 10, border: 'none', fontFamily: 'Montserrat-SemiBold', fontSize: 18, textTransform: 'uppercase', width: 196 }
  
  const followersPoint = (number) => {
    const numberArr = number.toString().split("");
    const firstPart = numberArr.slice(0,3).join("")
    const secondPart = numberArr.slice(3).join("")
    return `${firstPart},${secondPart}`
  }


  

  return (
    //window
    <div style={{
      display: "flex", justifyContent: 'center', paddingTop: 10
    }}>
      {/* //container */}
      <div style={{ width: 380, height: 460, borderRadius: 20, background: ' linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)', position: 'relative' }}>
        {/* //imgBg */}
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 28, marginBottom: 18}}>
          <img src={bgImg} alt=""  />
        </div>

        {/* //logo */}
        <div style={{ position: 'absolute', top: 20, left: 20}}>
          <img src={logo} alt=""  />
        </div>

        {/* //midleLineAvatarWrapper */}
        <div style={{position: 'relative'}}>
          {/* //ecvatorLine */}
          <div style={{ height: 8, background: '#EBD8FF', boxShadow: '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF' }}></div>
          
          {/* //avatarElips */}
          {/* avatarBorder */}
          <div style={{
            width: 64, height: 64, border: '8px solid #EBD8FF', borderRadius: 100, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#5736A3' }}>
            {/* avatar */}
            <div style={{ boxShadow: '0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF', width: 80, height: 80, borderRadius: 100, background: 'transparent', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={avatar} alt="" width="64" height="64" />
            </div>
          </div>
        </div>

        {/* //countWrapper */}
        <div style={{marginTop: 62, display: 'flex', flexDirection: 'column', gap: 16}}>
          {/* //tweets */}
          <div style={{ display: 'flex', justifyContent: 'center', textTransform: 'uppercase', color: '#EBD8FF', fontFamily: 'Montserrat-Medium', fontSize: 20}}>
            <p>{tweets} tweets</p>
          </div>
          {/* //followers */}
          <div style={{ display: 'flex', justifyContent: 'center', textTransform: 'uppercase', color: '#EBD8FF', fontFamily: 'Montserrat-Medium', fontSize: 20}}>
            <p>{followersPoint(followers)} followers</p>
          </div>
        </div>

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 26}}>
          <button
            type="button"
            style={state ? {...bntStyle, backgroundColor: '#5CD3A8'} : {...bntStyle}}
            onClick={() => following()}
          >
            <span>{state ? 'Following' : 'Follow'}</span>
          </button>
        </div>
        

      </div>
    </div>
)
}

export default App