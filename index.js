
const header = React.createElement('header', {className: 'header'}, 'William Connatser, 32, Texas');

const myElement = React.createElement('h1', { className: 'aClassName'}, 'hey, hey hey!', 'ok, that\'s what\'s up');


ReactDOM.render([header, myElement], document.querySelector('#root'));