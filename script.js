const loginHereBtn = document.getElementById('loginhere');
const loginContainer = document.getElementById("loginContainer");
const registerContainer = document.querySelector(".register-container");
const registerBtn = document.getElementById('registerbtn');
const registerForm = document.getElementById('registerForm');

// container toggle 

function toggleDisplay(showLogin) {
  loginContainer.style.display = showLogin ? "block" : "none";
  registerContainer.style.display = showLogin ? "none" : "block";
}

loginHereBtn.addEventListener('click', () => toggleDisplay(true));
registerBtn.addEventListener('click', () => toggleDisplay(false));

// end of container toggle register button type submit , thats mean , if the set form even submit the register button will wor 
registerForm.addEventListener('submit', async function (event) {
  event.preventDefault();

  const username = document.getElementById('name').value.trim();
  const password = document.getElementById('password').value;

  if (!username || !password) {
    alert("Please fill in all fields");
    return;
  }

  try {
    const res = await fetch('mongodb+srv://sayon8023:<db_password>@cluster0.xsmlhug.mongodb.net/?retryWrites=true&w=majority&appName=Cluster', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();
    alert(data.message);
    registerForm.reset();
    toggleDisplay(true);
  } catch (err) {
    alert("Registration failed");
    console.error(err);
  }
});

startlogin.addEventListener('submit', async function (event) {
  event.preventDefault();

  const logname = document.getElementById('Logname').value.trim();
  const logpassword = document.getElementById('Logpassword').value;

  try {
    const res = await fetch('mongodb+srv://sayon8023:<db_password>@cluster0.xsmlhug.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: logname, password: logpassword })
    });

    const data = await res.json();
    if (res.ok) {
      alert(data.message);
      loginContainer.style.display = 'none';
      registerContainer.style.display = 'none';

      const newDiv = document.createElement("div");
      newDiv.textContent = "You are successfully logged in!";
      Object.assign(newDiv.style, {
        backgroundColor: "#d4edda",
        color: "#155724",
        padding: "15px",
        marginTop: "20px",
        border: "1px solid #c3e6cb",
        borderRadius: "8px",
        fontWeight: "bold",
        fontSize: "16px",
        textAlign: "center"
      });
      document.body.appendChild(newDiv);
    } else {
      alert(data.message);
    }
  } catch (err) {
    alert("Login failed");
    console.error(err);
  }
});
