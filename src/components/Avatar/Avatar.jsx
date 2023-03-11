import PropTypes from 'prop-types';
import css from "./Avatar.module.css"

export default function Avatar({ img }) {
    return (
        <div className={css.avatarContainer}>
            <div className={css.avatarBorder}>
                <div className={css.avatarBg}>
                    <img src={img} alt="avatar" className={css.avatarImg} />
                </div>

            </div>

        </div>
)
}

Avatar.propTypes = {
  img: PropTypes.node.isRequired,
};