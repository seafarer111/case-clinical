BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Claim] ADD [patientPhoneNumber] NVARCHAR(1000);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
