/**
*
* LinkList
*
*/

import React from 'react';
import Link from '../Link';
import styles from './styles.css';

function LinkList({ links, routeTopicName }) {
  const linkNodes = links.map(l => (
    <Link
      key={l.id}
      link={l}
    />
  ));
  return (
    <div className={styles.linkList}>
      <h1>{routeTopicName}</h1>
      {linkNodes}
    </div>
  );
}

LinkList.propTypes = {
  routeTopicName: React.PropTypes.string.isRequired,
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
  })),
};

export default LinkList;
