import React from 'react';
import classNames from 'classnames/bind';
import { CERTIFICATES } from '../../config/constants';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

function Certificates() {
  return(
    <div className={cx('slider')}>
      {CERTIFICATES.map(({ src,alt, id  }) => (
        <img src={src} alt={alt} key={id} className={cx('slide')} />
      ))}
    </div>
  );
}
export default Certificates;
