'use strict';

// const template = (
//     <div>
//         <h1>title</h1>
//         <p>test</p>
//     </div>
// );

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'mand cashin'
  ),
  React.createElement(
    'p',
    null,
    'age: 33'
  ),
  React.createElement(
    'p',
    null,
    'location: manchester'
  )
);

var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
ReactDOM.render(templateTwo, appRoot);
