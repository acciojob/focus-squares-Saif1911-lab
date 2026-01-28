//your JS code here. If required.
const squares = document.querySelectorAll(".square");

squares.forEach((currentSquare) => {
  currentSquare.addEventListener("mouseenter", () => {
    squares.forEach((sq) => {
      if (sq !== currentSquare) {
        sq.style.backgroundColor = "#6F4E37"; // Coffee
      }
    });
  });

  currentSquare.addEventListener("mouseleave", () => {
    squares.forEach((sq) => {
      sq.style.backgroundColor = "#E6E6FA"; // Lavender
    });
  });
});
