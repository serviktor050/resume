import React from 'react';
import classNames from 'classnames/bind';
import { CERTIFICATES } from '../../config/constants';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

function Certificates() {
  return(
    <div className={cx('slider')}>
      {CERTIFICATES.map((slide) => (
        <img src={slide.src} alt={slide.alt} key={slide.id} className={cx('slide')} />
      ))}
    </div>
  );
}

export default Certificates;