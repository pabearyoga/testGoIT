import PropTypes from 'prop-types';
import css from "./Section.module.css"

export default function Section({ children }) {
 return (
   <section className={css.cardSection}>
     <div className={css.containerSection}>
       {children}
     </div>
    </section>
);
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};