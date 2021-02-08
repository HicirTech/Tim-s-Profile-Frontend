const RoutePath = {
  home: route("home", "Home"),
  chat: route("chat", "Chat"),
};

const route = (to, text) => {
  return {
    to: `/${to}`,
    text: text,
  };
};
