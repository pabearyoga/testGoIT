import PropTypes from 'prop-types';
import css from "./CountTitle.module.css"

export default function CountTitle({ count, title }) {
    return (
        <div className={css.countTitleWrapper}>
            <p>{count} {title}</p>
        </div>
)
}

CountTitle.propTypes = {
    count: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired
};