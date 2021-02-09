import * as signalR from "@microsoft/signalr";

// const serverPath = "https://localhost:49169/";

const serverPath = "https://timprofilebackend.herokuapp.com/";
const conectConfig = {
  loginPath: `${serverPath}loginChecker`,
}; 

const getLoginConnector = () => {
  const connection = new signalR.HubConnectionBuilder()
    .withUrl(conectConfig.loginPath)
    .build();

  return connection;
};

export { getLoginConnector };
