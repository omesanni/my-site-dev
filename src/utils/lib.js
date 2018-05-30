/**
 * Scroll to a particular element
 * @param  {String}   elemID               ID of HTML element
 * @param  {Number}   duration             Duration of scroll transition in millisecond
 * @param  {Function} onTransitionComplete Callback function for when transition is complete
 */
export function scrollToElement(elemID, duration, onTransitionComplete) {
  const elem = document.getElementById(elemID);
  const destPos = elem.offsetTop;
  const start = document.documentElement.scrollTop;

  let count = 0, currPos;

  const diff = destPos - start;
  const scrollStep = Math.PI / (duration / 10);

  const scrollInterval = setInterval(() => {
    if (currPos !== destPos) {
      count = count + 1;
      currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
      document.documentElement.scrollTop = currPos;
    } else {
      clearInterval(scrollInterval);

      if (onTransitionComplete) {
        return onTransitionComplete();
      }
    }
  }, 17);
}

/**
 * Go to a section when user clicks on menu link
 * @param  {Object} evt      Event object
 * @param  {String} hash     Url hash e.g. #about
 * @param  {Number} duration Duration of transition
 */
export function goToSection(evt, hash, duration = 400) {
  scrollToElement(hash.replace('#', ''), duration, () => {
    window.location.hash = hash;
  });
  evt.preventDefault();
}
