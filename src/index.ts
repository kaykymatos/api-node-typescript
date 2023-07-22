import { server } from "./server/appserver";

server.listen(process.env.PORT || 3333, () => {
    console.log(
        `App rodando porta ${process.env.PORT || 3333} \nurl:http://localhost:${
            process.env.PORT || 3333
        }`
    );
});
