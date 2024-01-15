const makeComponent = (parentId: string, child: Node) => {
  const parent = document.getElementById(parentId);
  if (parent === null) {
    console.error(`${parentId} does not exist.`);
    return;
  }
  parent.appendChild(child);
};

export default makeComponent
