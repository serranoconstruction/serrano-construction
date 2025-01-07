/*
  Warnings:

  - Added the required column `utKey` to the `Gallery` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Gallery" ADD COLUMN     "utKey" TEXT NOT NULL;
