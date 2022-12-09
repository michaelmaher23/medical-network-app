const { ApolloServer, gql } = require("apollo-server-express");
const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core");
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const multer = require("multer");
require("dotenv").config();
const { body } = require("express-validator");
const Email = require("./Models/Email");
const { json } = require("express");
const connectDatabase = require("./config/MongoDb.js");
const { errorHandler, notFound } = require("./MiddleWares/Error.js");
const ProductRoute = require("./Routes/ProductRoutes.js");
const FormRoute = require("./Routes/FormRoutes");
const userRouter = require("./Routes/UserRoutes"); 
const SectionsRoute = require("./Routes/SectionsRoutes");
 
const typeDefs = gql`
  type Emails {
    email: String
  }
  type Query {
    get: [Emails]
  }
`;
const resolvers = {
  Query: {
    get: async () => {
      return await Email.find({});
    },
  },
};
async function startApolloServer(typeDefs, resolvers) {
  // Required logic for integrating with Express
  //const { addUser, removeUser, getUser } = require("./user");
  const app = express(); 
  
  const httpServer = createServer(app);
  const corsOptions = {
    AccessControlAllowOrigin: "*",
    origin: "https://medicalprojectnet.vercel.app",
    credentials:true,   
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200,
  }; 
  
 app.use(cors(corsOptions));
  app.use(cookieParser());

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images/");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  const upload = multer({ storage: storage });
  app.post("/image", upload.single("file"), function (req, res) {
    res.json({});
  });
  app.use(express.urlencoded({ extended: true }));

  app.use(express.json());
  app.use("/api/prods", ProductRoute);
  app.use("/api/form", FormRoute);
  app.use("/api/users", userRouter);
  app.use("/api/sections", SectionsRoute);
  
  app.use(express.static("public"));
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    },
  });
  io.on("connect", (socket) => {
    socket.on("sendMessage", (textandmessage) => {
      io.emit("message", textandmessage);
    });
  });
  app.use(notFound);
  app.use(errorHandler);

  app.use(express.static(path.resolve(__dirname, "./client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
  app.get("/", (req, res) => {
    res.send("api is running");
  });
  // Same ApolloServer initialization as before, plus the drain plugin.
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  // More required logic for integrating with Express
  await server.start();
  server.applyMiddleware({
    app,
  });
  // Modified server startup
  await new Promise((resolve) =>
    httpServer.listen({ port: process.env.PORT || 5000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}
startApolloServer(typeDefs, resolvers);
