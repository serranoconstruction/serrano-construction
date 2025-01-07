/*
  Warnings:

  - You are about to drop the `Treatment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TreatmentDescription` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TreatmentDescription" DROP CONSTRAINT "TreatmentDescription_treatmentId_fkey";

-- DropTable
DROP TABLE "Treatment";

-- DropTable
DROP TABLE "TreatmentDescription";
