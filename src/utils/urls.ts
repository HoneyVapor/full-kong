const link =
  window.parent.location.toString() === "http://localhost:5173/"
    ? "http://localhost/full-kong-backend/"
    : "";

export const routes = {
  session: {
    login: `${link}data/session/login.php`,
    register: `${link}data/session/register.php`,
  },
};
