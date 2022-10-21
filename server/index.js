const express = require("express");
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser')

const prisma = new PrismaClient()

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.json());

app.use(
  (err, req, res, next) => {
    console.error(err)
    res.status(500)
    res.json(err.message)
  }
);

// method GET to get all reports
app.get("/api/reports", async (req, res) => {
  const reports = await prisma.report.findMany();
  res.json(reports);
}
);

// Method GET to get a report by id
app.get("/api/reports/:id", async (req, res) => {
  const report = await prisma.report.findUnique({
    where: {
      id: Number(req.params.id),
    },
  });
  res.status(200)
  res.json(report);
});


// method POST to create a report
app.post("/api/reports", async (req, res) => {
  console.log(req.body);
  const report = await prisma.report.create({
    data: {
      title: req.body.title,
      categorie: req.body.categorie,
      money_depense: Number(req.body.money_depense),
      createdAt: new Date(),
    },
  });
  res.json(report);
  res.status(201);
});

// method PUT to update a report
app.put("/api/reports/:id", async (req, res) => {
  const report = await prisma.report.update({
    where: {
      id: Number(req.params.id),
    },
    data: {
      title: req.body.title,
      categorie: req.body.categorie,
      money_depense: Number(req.body.money_depense),
    },
  });
  res.json(report);
  res.status(200);
}
);

// method DELETE to delete a report
app.delete("/api/reports/:id", async (req, res) => {
  const report = await prisma.report.delete({
    where: {
      id: Number(req.params.id),
    },
  });
  res.json(report);
  res.status(200);
});

// method GET objectif by id
app.get("/api/objectif/:id", async (req, res) => {
  const objectif = await prisma.objectif.findUnique({
    where: {
      id: Number(req.params.id),
    },
  });
  res.status(200)
  res.json(objectif);
});

// method POST to create a objectif
app.post("/api/objectif", async (req, res) => {
  console.log(req.body);
  const objectif = await prisma.objectif.create({
    data: {
      money_depense_per_month : Number(req.body.money_depense_per_month),
      createdAt: new Date(),
    },
  })
  res.status(201);
  res.json(objectif);
});

// method PUT to update a objectif
app.put("/api/objectif/:id", async (req, res) => {
  const objectif = await prisma.objectif.update({
    where: {
      id: Number(req.params.id),
    },
    data: {
      money_depense_per_month : Number(req.body.money_depense_per_month),
    },
  });
  res.json(objectif);
  res.status(200);
});

// method DELETE to delete a objectif
app.delete("/api/objectif/:id", async (req, res) => {
  const objectif = await prisma.objectif.delete({
    where: {
      id: Number(req.params.id),
    },
  });
  res.json(objectif);
  res.status(200);
});


const port = process.env.PORT || "3000";

const server = app.listen(port)
