// const heading =React.createElement("h1",{},"Hello World");


const parent = React.createElement("div",{id:"parent"},
  [
    React.createElement("div",{id:"child-1"}, 

    [
        React.createElement("h1",{id:"child-1"}, "I'm an h1 tag"),
        React.createElement("h2",{id:"child-1"}, "I'm an h2 tag"),

    ]
    
    ),
    React.createElement("div",{id:"child-2"}, 

    [
        React.createElement("h1",{id:"child-1"}, "I'm an h1 tag"),
        React.createElement("h2",{id:"child-1"}, "I'm an h2 tag"),

    ]
    
    )


  ]

);



console.log(parent);


const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)