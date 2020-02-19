// Call animation frame on page load
window.addEventListener("load", function() {

  let maze = new Maze({
    singleCellSize: 32,
    wallsThickness: 16,
  });
  maze.draw();

});
