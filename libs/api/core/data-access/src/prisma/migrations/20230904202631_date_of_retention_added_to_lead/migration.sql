BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[ClinicalProviderSpecialty] ADD [npi] NVARCHAR(1000);

-- AlterTable
ALTER TABLE [dbo].[Lead] ADD [dateOfRetention] DATETIME2;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
