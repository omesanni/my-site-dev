import React from 'react';
import { goToSection } from '../utils/lib';
import SecondaryButton from './button/SecondaryButton';

const Intro = () => (
  <section
    id={'intro'}
    className={'intro'}
  >
    <div className={'intro__overlay'} />
    <div className={'intro__content'}>
      <h5>{'Hello, World.'}</h5>
      <h1>{'I\'m Omeyimi Sanni.'}</h1>

      <p className={'position'}>
        <span>{'Front-end Developer'}</span>
        <span>{'Tech Lover'}</span>
      </p>

      <SecondaryButton
        href={'#about'}
        onClick={(e) => goToSection(e, '#about')}
      >
        {'More About Me'}
      </SecondaryButton>
    </div>
  </section>
);

export default Intro;
