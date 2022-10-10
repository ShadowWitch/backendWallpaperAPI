
CREATE TABLE Usuarios (
    id_user INT Primary Key Auto_Increment,
    user_name Varchar(30) Not Null,
    user_pass Varchar(30)  Not Null
);

CREATE TABLE Wallpapers (
    id_wall INT Primary Key Auto_Increment,
    wall_url Varchar(255) Not Null,
    wall_size Varchar(30) Not Null,
    wall_width Varchar(30) Not Null,
    wall_height Varchar(30) Not Null
);
