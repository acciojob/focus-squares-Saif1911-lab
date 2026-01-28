const squares = document.querySelectorAll(".square");

squares.forEach((currentSquare) => {

  currentSquare.addEventListener("mouseover", () => {
    squares.forEach((sq) => {
      if (sq !== currentSquare) {
        sq.style.backgroundColor = "#6F4E37"; // Coffee
      }
    });
  });

  currentSquare.addEventListener("mouseout", () => {
    squares.forEach((sq) => {
      sq.style.backgroundColor = "#E6E6FA"; // Lavender
    });
  });

});
