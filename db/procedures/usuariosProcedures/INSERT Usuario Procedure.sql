CREATE PROCEDURE Ins_Usuario(
   IN PV_user_name Varchar(30),
   IN PV_user_pass Varchar(30)
)
BEGIN
  START TRANSACTION;
  
  INSERT INTO bgj3dyeydb5jogongzti.usuarios(
  user_name,
  user_pass
  )VALUES (
   PV_user_name,
   PV_user_pass
  );
COMMIT;
END;
