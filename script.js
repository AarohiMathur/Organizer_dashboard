// Set today's date
document.getElementById("date").innerText =
  new Date().toDateString();

// To-Do Logic
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && input.value.trim()) {
    const li = document.createElement("li");
    li.textContent = input.value;
    li.onclick = () => li.remove(); // click to delete
    list.appendChild(li);
    input.value = "";
  }
});

// Mood Selector
document.querySelectorAll(".moods button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".moods button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Water Tracker
const drops = document.querySelectorAll(".water span");
drops.forEach((drop, index) => {
  drop.addEventListener("click", () => {
    drops.forEach((d, i) => {
      d.classList.toggle("active", i <= index);
    });
  });
});
