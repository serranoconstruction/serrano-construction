-- CreateTable
CREATE TABLE "Treatment" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Treatment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TreatmentDescription" (
    "id" SERIAL NOT NULL,
    "treatmentId" INTEGER NOT NULL,
    "heading" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TreatmentDescription_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TreatmentDescription" ADD CONSTRAINT "TreatmentDescription_treatmentId_fkey" FOREIGN KEY ("treatmentId") REFERENCES "Treatment"("id") ON DELETE CASCADE ON UPDATE CASCADE;
