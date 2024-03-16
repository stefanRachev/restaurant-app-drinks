const base_url = "http://localhost:3030";

export const register = async (
  email,
  password,
  username,
  phoneNumber,
  address
) => {
  try {
    const response = await fetch(`${base_url}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, username, phoneNumber, address }),
    });
    if (!response.ok) {
      throw new Error("Server error");
    }

    const data = await response.json();
    console.log("Server response:", data);
    return data;
  } catch (error) {
    console.error("Error:", error.message);
    setErrorMessage("Server error. Please try again later.");
  }
};

export const login = async (email, password) => {
  try {
    const response = await fetch(`${base_url}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      throw new Error("Server error");
    }

    const data = await response.json();
    console.log("Server response:", data);
    return data;
  } catch (error) {
    console.error("Error:", error.message);
    setErrorMessage("Server error. Please try again later.");
  }
};

export const logout = async (token) => {
  const response = await fetch(`${base_url}/users/logout`, {
    method: "GET",
    headers: {
      "X-Authorization": token,
    },
  });

  if (response.status === 204) {
    return {};
  } else {
    throw new Error("Error response");
  }
};
