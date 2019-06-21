import SushiPainter from './painter.js';
import getOptions from './getOptions.js';

const main = () => {
  const app = document.querySelector('#app')
  const options = getOptions(window.location.search)
  const painter = new SushiPainter(window, app, console, options)

  painter.paint()
  window.onresize = () => painter.resize()
}
main()
