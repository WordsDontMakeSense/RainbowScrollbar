var head = document.getElementsByTagName('head')[0];

const link = document.createElement('link');
link.href = 'styles.css';
link.rel = 'stylesheet';

head.insertBefore(link, head.firstChild)