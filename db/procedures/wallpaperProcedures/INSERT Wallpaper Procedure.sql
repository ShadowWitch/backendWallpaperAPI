CREATE PROCEDURE Ins_Wallpaper(
   IN PV_wall_url Varchar(255) Not Null,
   IN PV_wall_size Varchar(30) Not Null,
   IN PV_wall_width Varchar(30) Not Null,
   IN PV_wall_height Varchar(30) Not Null
)
BEGIN
  START TRANSACTION;
  
  INSERT INTO bgj3dyeydb5jogongzti.wallpapers(
  wall_url,
  wall_size,
  wall_width,
  wall_height
  )VALUES (
   PV_wall_url,
   PV_wall_size,
   PV_wall_width,
   PV_wall_height
  );
COMMIT;
END;
