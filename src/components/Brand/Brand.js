import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      <h4>VIPUSHA</h4>
      <embed src="../../../static/vipusha.svg"/>
    </div>
  );
};

export default Brand;
