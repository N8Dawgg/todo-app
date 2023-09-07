const CONTENT = document.querySelector('#content');

function create_element_with_class_and_id(elementType, classes = [], id = null) {
    var newElement = document.createElement(elementType);
    if (typeof classes === String) {
        id = classes;
    } else {
        classes.forEach((c) => {
            newElement.classList.add(c);
        })
    }
    if (id != null) {
        newElement.id = id;
    }
    
    return newElement
}

function panel(data) {
    

    let panelBody;
}

function createPanelDOMElements(appendToContent = true) {
    var panel_container = create_element_with_class_and_id('div',['panel-container']);

    var panel_header = create_element_with_class_and_id('div',['panel-header']);
    panel_header.textContent = 'T'
    
    var panel_body = create_element_with_class_and_id('div',['panel-body']);
    panel_body.textContent = 'T'

    
    var para0 = create_element_with_class_and_id('p');
    var para1 = create_element_with_class_and_id('p');
    para0.textContent = '   a'
    para1.textContent = '   a'
    panel_body.append(para0)
    panel_body.append(para1)
    
    panel_container.append(panel_header);
    panel_container.append(panel_body);

    var panel_elements = [panel_container, panel_header, panel_body];
    if (appendToContent) {
        CONTENT.append(panel_container)
    }

    return panel_elements;
}

createPanelDOMElements();
createPanelDOMElements();
createPanelDOMElements();
createPanelDOMElements();
