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

const createPanel = (data) => {
    /*
    a panel has:
    Title
    Height
    Collumn
    >>Order of Importants [left to right, top to bot]
    A list of 'elements'
    Panels can be in header edit state.
    There are also buttons that appear when you mouse over the panel.
     */
    let title = '';
    let roamingX;
    let panelContainer;
    let panelHeader;
    let panelBody;

    if (data == null) {
        createInitialPlusBox()
    }
    //create the panel using data.
    return panelContainer

    function createInitialPlusBox() {
        panelContainer = document.createElement('div');
        panelContainer.classList.add('panel-container');
        panelContainer.classList.add('initial-adder-box');
        
        panelHeader = document.createElement('div');
        panelHeader.classList.add('panel-header');
        panelHeader.classList.add('initial-adder-box');
        panelContainer.append(panelHeader);
        
        roamingX = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        roamingX.classList.add('roaming-x');
        roamingX.classList.add('initial-adder-box');
        roamingX.setAttribute('width', '50');
        roamingX.setAttribute('height', '50');
        roamingX.setAttribute('viewBox', '0 0 100 100');
        panelHeader.append(roamingX);
        panelHeader.addEventListener('click', panelHeaderClicked)
        let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M40 0H60V40H100V60H60V100H40V60H0V40H40V0Z');
        path.setAttribute('fill', '#00000050');
        roamingX.append(path);
    }

    function panelHeaderClicked() {
        panelHeader.classList.remove('initial-adder-box');
        panelContainer.classList.remove('initial-adder-box');
        roamingX.classList.remove('initial-adder-box');
    }
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
CONTENT.append(createPanel());

