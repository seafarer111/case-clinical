BEGIN TRY

BEGIN TRAN;

ALTER TABLE [dbo].[LegalCase] ADD [groupChatRoomId] NVARCHAR(1000);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH