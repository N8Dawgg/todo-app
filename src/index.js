const CONTENT = document.querySelector("#content");

const createPanel = (data) => {
  let roamingX;
  let panelContainer;
  let panelHeader;
  let panelBody;
  let panelHeaderTextEdit;
  let panelHeaderState = 0;
  let bodyElementAdder;

  function convertTitleToTextEdit() {
    const newPHTE = document.createElement("input");
    newPHTE.setAttribute("type", "text");
    newPHTE.setAttribute("size", "1");
    newPHTE.setAttribute("minlength", "1");
    newPHTE.setAttribute("maxlength", "35");
    newPHTE.classList.add("panel-header-text-edit");
    panelHeader.prepend(newPHTE);
    newPHTE.value = panelHeaderTextEdit.textContent;
    newPHTE.focus();
    newPHTE.select();
    newPHTE.addEventListener("focusout", convertTextEditToTitle);

    panelHeaderTextEdit.remove();
    panelHeaderTextEdit = newPHTE;
    panelContainer.classList.add("text-edit");
  }

  function convertTextEditToTitle() {
    const newPHTE = document.createElement("div");
    newPHTE.classList.add("panel-header-text-edit");
    newPHTE.textContent = panelHeaderTextEdit.value;
    panelHeader.prepend(newPHTE);
    panelHeaderTextEdit.remove();
    panelHeaderTextEdit = newPHTE;
    panelHeaderTextEdit.addEventListener("dblclick", convertTitleToTextEdit);
    panelContainer.classList.remove("text-edit");

    if (panelHeaderState === 1) {
      panelHeaderState = 2;
      bodyElementAdder = document.createElement("div");

      panelBody.append();
      panelContainer.classList.remove("init-phase");
      panelContainer.classList.add("empty");
    }
  }

  function noteButtonPressed() {
    // add a note to the panelBody
    // place the note into "edit mode"
    // make the note your focus
  }

  function checkBoxButtonPressed() {}

  function panelHeaderClicked() {
    if (panelHeaderState === 0) {
      panelHeaderState = 1;
      panelHeader.classList.remove("initial-adder-box");
      panelContainer.classList.remove("initial-adder-box");
      roamingX.classList.remove("initial-adder-box");

      panelHeaderTextEdit = document.createElement("input");
      panelHeaderTextEdit.setAttribute("type", "text");
      panelHeaderTextEdit.setAttribute("size", "1");
      panelHeaderTextEdit.setAttribute("minlength", "1");
      panelHeaderTextEdit.setAttribute("maxlength", "35");
      panelHeaderTextEdit.classList.add("panel-header-text-edit");
      panelHeaderTextEdit.classList.add("initial-adder-box");
      panelHeader.prepend(panelHeaderTextEdit);
      setTimeout(() => {
        panelHeaderTextEdit.classList.remove("initial-adder-box");
        panelHeaderTextEdit.focus();
        panelHeaderTextEdit.addEventListener(
          "focusout",
          convertTextEditToTitle
        );
      }, 200);
    }
  }

  function panelBodyMouseover() {
    panelContainer.classList.remove("unmoused");
  }

  function panelBodyMouseout() {
    panelContainer.classList.add("unmoused");
  }

  function createInitialPlusBox() {
    panelContainer = document.createElement("div");
    panelContainer.classList.add("panel-container");
    panelContainer.classList.add("empty");
    panelContainer.classList.add("text-edit");
    panelContainer.classList.add("initial-adder-box");
    panelContainer.addEventListener("mouseover", panelBodyMouseover);
    panelContainer.addEventListener("mouseout", panelBodyMouseout);

    panelHeader = document.createElement("div");
    panelHeader.classList.add("panel-header");
    panelHeader.classList.add("initial-adder-box");
    panelHeader.classList.add("curve-bottom");

    panelContainer.append(panelHeader);

    panelBody = document.createElement("div");
    panelBody.classList.add("panel-body");
    panelContainer.append(panelBody);

    roamingX = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    roamingX.classList.add("roaming-x");
    roamingX.classList.add("initial-adder-box");
    roamingX.setAttribute("width", "50");
    roamingX.setAttribute("height", "50");
    roamingX.setAttribute("viewBox", "0 0 100 100");
    panelHeader.append(roamingX);
    panelHeader.addEventListener("click", panelHeaderClicked);
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M40 0H60V40H100V60H60V100H40V60H0V40H40V0Z");
    path.setAttribute("fill", "#00000050");
    roamingX.append(path);

    bodyElementAdder = document.createElement("div");
    bodyElementAdder.classList.add("body-element-adder");
    // bodyElementAdder.classList.add('disabled');
    panelBody.append(bodyElementAdder);

    const noteBtn = document.createElement("img");
    noteBtn.classList.add("adder-button");
    noteBtn.setAttribute("href", "./testSquare.png");
    bodyElementAdder.append(noteBtn);
    noteBtn.addEventListener("click", noteButtonPressed);

    const chkBoxBtn = document.createElement("img");
    chkBoxBtn.classList.add("adder-button");
    chkBoxBtn.setAttribute("href", "./testSquare.png");
    bodyElementAdder.append(chkBoxBtn);
    chkBoxBtn.addEventListener("click", checkBoxButtonPressed);
  }

  if (data === null) {
    createInitialPlusBox();
  }
  // create the panel using data.
  return panelContainer;
};

CONTENT.append(createPanel());
