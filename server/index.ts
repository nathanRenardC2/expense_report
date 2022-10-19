const express = require("express");
const { PrismaClient, Report } = require('@prisma/client');

const prisma = new PrismaClient();

const app = express();

app.use(express.json());

const port = process.env.PORT || "3000";

app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});


