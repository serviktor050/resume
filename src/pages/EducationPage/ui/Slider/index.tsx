import React from 'react';
import classNames from 'classnames/bind';
import { SLIDER } from '../../config/constants';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

function Slider() {
  return(
    <div className={cx('slider')}>
      {SLIDER.map((slide) => (
        <img src={slide.src} alt={slide.alt} key={slide.id} className={cx('slide')} />
      ))}
    </div>
  );
}

export default Slider;