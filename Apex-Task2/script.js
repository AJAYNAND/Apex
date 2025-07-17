// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('formFeedback');

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    feedback.textContent = "All fields are required!";
    feedback.style.color = "red";
    return;
  }

  if (!email.match(emailPattern)) {
    feedback.textContent = "Please enter a valid email address!";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = "Message sent successfully!";
  feedback.style.color = "green";
  document.getElementById('contactForm').reset();
});

// To-Do List with Edit and Delete
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (!taskText) return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;
  span.contentEditable = false;

  const actions = document.createElement("div");
  actions.className = "task-actions";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = () => {
    span.contentEditable = !span.isContentEditable;
    span.focus();
    editBtn.textContent = span.isContentEditable ? "Save" : "Edit";
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => li.remove();

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
