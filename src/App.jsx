import React from 'react';
import { isEqual } from 'lodash';
import { NAV_ITEMS } from './constants';
import { goToSection } from './utils/lib';
import Header from './components/Header';
import Intro from './components/Intro';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      hash: window.location.hash || NAV_ITEMS[0].href,
      sections: [],
      boldenHeader: false,
    };

    this.handleHashChange = this.handleHashChange.bind(this);
    this.handleWindowScroll = this.handleWindowScroll.bind(this);
    this.storeSectionPositions = this.storeSectionPositions.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleWindowScroll, false);
    window.addEventListener('hashchange', this.handleHashChange, false);
    this.storeSectionPositions();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleWindowScroll, false);
    window.removeEventListener('hashchange', this.handleHashChange, false);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !isEqual(this.state, nextState);
  }

  /**
   * Hash change event handler
   */
  handleHashChange() {
    this.setState(() => ({ hash: window.location.hash }));
  }

  /**
   * Scroll event handler
   */
  handleWindowScroll() {
    const { sections } = this.state;
    const { scrollTop } = document.documentElement;

    let { hash } = this.state;

    // change hash as user scrolls through sections
    sections.forEach((section) => {
      const { offsetTop, clientHeight } = section;
      const verticalOffset = window.pageYOffset + 10;

      if (
        offsetTop < verticalOffset &&
        offsetTop + clientHeight > verticalOffset
      ) {
        hash = section.hash;
      }
    });

    this.setState(() => ({ hash, boldenHeader: scrollTop > 70 }));
  }

  /**
   * Store the positions of sections to use to determine
   * current active section when user scrolls
   */
  storeSectionPositions() {
    const sections = [];

    NAV_ITEMS.slice(0, 2).forEach((item) => {
      const { offsetTop, clientHeight } = document.getElementById(item.href.replace('#', ''));

      sections.push({ offsetTop, clientHeight, hash: item.href });
    });

    this.setState(() => ({ sections }));
  }

  render() {
    const { hash, boldenHeader } = this.state;

    return (
      <div className={'main-container'}>
        <Header
          activeItem={hash}
          boldenHeader={boldenHeader}
          navItems={NAV_ITEMS.map(item => ({
            ...item,
            handleClick: (e) => goToSection(e, item.href),
          }))}
        />
        <Intro />
        <div id={'about'} style={{height:'500px'}}>whwjhwhjhwhwhw</div>
      </div>
    );
  }
}

export default App;