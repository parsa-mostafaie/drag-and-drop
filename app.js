let $ = document;

let draggables = $.querySelectorAll(`[draggable="true"]`);
let droppables = $.querySelectorAll("[droppable]");

for (const elem of droppables) {
  elem.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
  elem.addEventListener("drop", (event) => {
    let target = $.getElementById(event.dataTransfer.getData("drop_target"));
    if (target != null) {
      elem.append(target);
    }
    event.stopPropagation();
  });
}

for (const elem of draggables) {
  elem.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("drop_target", elem.id);
  });
}
