const vars = {
    ["fullname"]: "Maxwell Reinold",
    ["name"]: "Maxwell",
    ["address"]: "162 Ruth Drive Athens, Georgia",
    ["phone"]: "(678) 687-3297",
    ["email"]: "MaxwellReinold@gmail.com",
    ["sep"]: " ∙ "
}

for(let i = 0; i < Object.keys(vars).length; i++) {
    let elements = document.querySelectorAll(`.${Object.keys(vars)[i]}`);
    elements.forEach(element => {
        element.innerHTML = Object.values(vars)[i];
        if(Object.keys(vars)[i] == "email"){
            if (element.tagName == "A") {
                element.href = `mailto:${Object.values(vars)[i]}`;
            } else if(element.tagName == "FORM") {
                element.action = `mailto:${Object.values(vars)[i]}`;
            }
        } 
    });
}