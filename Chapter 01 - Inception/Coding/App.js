// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React



// Create nested React Elements
const heading = React.createElement(
    "h1",
    {
        id: "title",
        style: {
            background: "red"
        },
        className: "title"

    },
    "Heading"
)
const heading1 = React.createElement(
    "h1",
    {
        id: "title",
        style: {
            background: "red"
        },
        className: "title"

    },
    "Heading1"
)
const heading2 = React.createElement(
    "h1",
    {
        id: "title",
        style: {
            background: "red"
        },
        className: "title"

    },
    "Heading2"
)
const container = React.createElement(
    "div",
    {
        id: "container",

    },
    [heading, heading1, heading2]
)

// create root using createRoot
const root = ReactDom.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(container);