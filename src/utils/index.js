export const signUp = async (username, email, password, setUser) => {
  const response = await fetch("http://localhost:5000/users", {
    method: "POST", // Type of request always capital letters
    headers: { "Context-Type": "application/json" }, // Needed for a fetch request, because you're dealing with json data
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }), // Needs to have what the request is asking from in the backend i.e username, password.
  });
  const data = await response.json();
  setUser(data.username);
};

export const updateUser = async (
  username,
  updateUsername,
  email,
  password,
  setUser
) => {
  const response = await fetch("http://localhost:5000/users", {
    method: "PATCH", // Type of request always capital letters
    headers: { "Context-Type": "application/json" }, // Needed for a fetch request, because you're dealing with json data
    body: JSON.stringify({
      username: username,
      update: {
        username: updateUsername,
        email: email,
        password: password,
      },
    }), // Needs to have what the request is asking from in the backend i.e username, password.
  });
  const data = await response.json();
  setUser(data);
};
