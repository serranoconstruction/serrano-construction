-- CreateTable
CREATE TABLE "Gallery" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Gallery_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Gallery" ADD CONSTRAINT "Gallery_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
