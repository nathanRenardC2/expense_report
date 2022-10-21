-- CreateTable
CREATE TABLE "Objectif" (
    "id" SERIAL NOT NULL,
    "money_depense_per_month" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Objectif_pkey" PRIMARY KEY ("id")
);
