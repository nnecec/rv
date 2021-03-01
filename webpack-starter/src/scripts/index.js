import '../styles/index.scss';
import html from './html.md';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

console.log('webpack starterkit');
console.log(html);