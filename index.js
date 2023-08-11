var head = document.getElementsByTagName('head')[0];

const link = document.createElement('link');
link.href = 'https://raw.githubusercontent.com/WordsDontMakeSense/RainbowScrollbar/main/styles.css';
link.rel = 'stylesheet';

head.insertBefore(link, head.firstChild)