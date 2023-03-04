import PropTypes from 'prop-types';
import css from "./CountWrapper.module.css"

export default function CountWrapper({ children }) {
    return (
        <div className={css.countWrapper}>
            {children}
        </div>
)
}

CountWrapper.propTypes = {
    children: PropTypes.node.isRequired
};