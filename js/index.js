import SushiPainter from './painter.js';
import getOptions from './getOptions.js';

const main = () => {
  const app = document.querySelector('#app')
  const options = getOptions(window.location.search)
  const painter = new SushiPainter(window, app, console, options)

  painter.paint()
  painter.paintConsole()
  window.onresize = () => painter.resize()
}
main()
