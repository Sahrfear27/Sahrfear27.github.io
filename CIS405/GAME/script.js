const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const gridSize = 20;
const canvasSize = 20;
const snake = [{x: 10, y: 10}];
let direction = {x: 0, y: 0};
let food = {x: Math.floor(Math.random() * canvasSize), y: Math.floor(Math.random() * canvasSize)};

function drawSnake() {
  ctx.fillStyle = "lime";
  snake.forEach(segment => {
    ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
  });
}

function drawFood() {
  ctx.fillStyle = "red";
  ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

function moveSnake() {
  const head = {x: snake[0].x + direction.x, y: snake[0].y + direction.y};
  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    food = {x: Math.floor(Math.random() * canvasSize), y: Math.floor(Math.random() * canvasSize)};
  } else {
    snake.pop();
  }
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawSnake();
  drawFood();
  moveSnake();

  if (snake[0].x < 0 || snake[0].x >= canvasSize || snake[0].y < 0 || snake[0].y >= canvasSize) {
    clearInterval(gameLoop);
    alert("Game Over!");
  }

  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      clearInterval(gameLoop);
      alert("Game Over!");
    }
  }
}

document.addEventListener("keydown", event => {
  if (event.key === "ArrowUp" && direction.y !== 1) {
    direction = {x: 0, y: -1};
  } else if (event.key === "ArrowDown" && direction.y !== -1) {
    direction = {x: 0, y: 1};
  } else if (event.key === "ArrowLeft" && direction.x !== 1) {
    direction = {x: -1, y: 0};
  } else if (event.key === "ArrowRight" && direction.x !== -1) {
    direction = {x: 1, y: 0};
  }
});