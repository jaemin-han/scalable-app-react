/**
*
* Navigation
*
*/

import React from 'react';


import styles from './styles.css';

function Navigation({ topics }) {
  return (
    <div className={styles.navigation}>
    We have {topics.length} topics in the navigation components
    </div>
  );
}

Navigation.propTypes = {
  topics: React.PropTypes.arrayOf(
    React.PropTypes.shape({

    })
  )
}
export default Navigation;
