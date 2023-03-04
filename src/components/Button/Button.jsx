import PropTypes from 'prop-types';
import css from "./Button.module.css"

export default function Button({ state, followingClick, clickOnTitle, alreadyClickedTitle }) {
    return (
        <div className={css.btnWrapper}>
            <button
                className={state ? css.btn  : css.btnFollowing}
                type='button'
                onClick={ followingClick}
            >
                <span>{state ? alreadyClickedTitle : clickOnTitle}</span>
            </button>
        </div>
)
}

Button.propTypes = {
    state: PropTypes.bool.isRequired,
    followingClick: PropTypes.func.isRequired,
    clickOnTitle: PropTypes.string.isRequired,
    alreadyClickedTitle: PropTypes.string.isRequired

};