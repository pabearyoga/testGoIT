import logo from '../../image/Vector.svg'
import css from "./Logo.module.css"

export default function Logo() {
 return (
    <div className={css.imgWrapper}>
        <img className={css.img} src={logo} alt=""  />
    </div>
    );
}

