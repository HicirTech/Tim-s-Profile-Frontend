import * as signalR from "@microsoft/signalr";

const serverPath = "https://localhost:49171/";

// const serverPath = "https://timprofilebackend.herokuapp.com/";
const conectConfig = {
  loginPath: `${serverPath}loginChecker`,
};

const getLoginConnector = () => {
  const connection = new signalR.HubConnectionBuilder()
    .withUrl(conectConfig.loginPath)
    .build();

  connection.start().then((e) => {
    console.info("Connection asked to start");
  });
  return connection;
};

export { getLoginConnector };
