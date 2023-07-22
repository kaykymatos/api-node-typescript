import { server } from "./server/appserver";

server.listen(process.env.PORT||3333, () => {
    console.log("Teste rodando");
});

