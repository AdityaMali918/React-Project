function customReact(reactElement,rootElement){
    const newElement = document.createElement(reactElement.type);
    newElement.textContent = reactElement.children;
    newElement.setAttribute('href',reactElement.props.href)
    newElement.setAttribute('target',reactElement.props.target)

    rootElement.appendChild(newElement);
}

const reactElement ={
    type:'a',
    props:{
        href:'https://google.com',
        target:"_blank"
    },
    children:"Click it",
}

rootElement = document.getElementById("root");

customReact(reactElement,rootElement)