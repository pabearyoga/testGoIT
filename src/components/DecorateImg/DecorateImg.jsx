import bgImg from '../../image/picture.svg'
import css from "./DecorateImg.module.css"

export default function DecorateImg() {
 return (
    <div className={css.imgWrapper}>
        <img src={bgImg} alt=""  />
    </div>
    );
}

