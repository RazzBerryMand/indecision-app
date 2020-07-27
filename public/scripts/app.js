"use strict";

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ['One', 'Two']
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);

// const user = {
//     name: "Mand",
//     age: 33,
//     location: "Manchester"
// }

// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     }
// }

// const templateTwo = (
//     <div>
//     <h1>{user.name ? user.name: "Anonymous"}</h1>
//     <p>Age: {user.age}</p>
//     {getLocation(user.location)}


//     </div>
// );

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
