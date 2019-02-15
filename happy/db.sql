#创建注册信息表
create table hp_login(
  id INT PRIMARY KEY AUTO_INCREMENT, 
  uname VARCHAR(20),
  phone VARCHAR(16),
  pwd VARCHAR(25)
);DEFAULT CHARSET `UTF8`;
INSERT INTO hp_login VALUES(null,'tom','11111111111','123');
INSERT INTO hp_login VALUES(null,'jerry','11111111111','123');
INSERT INTO hp_login VALUES(null,'敌敌畏','13566245986','123');
INSERT INTO hp_login VALUES(null,'tom','11111111111','123');
INSERT INTO hp_login VALUES(null,'jerry','11111111111','123');
INSERT INTO hp_login VALUES(null,'敌敌畏','13566245986','123');
INSERT INTO hp_login VALUES(null,'tom','11111111111','123');
INSERT INTO hp_login VALUES(null,'jerry','11111111111','123');
INSERT INTO hp_login VALUES(null,'敌敌畏','13566245986','123');
select count(id) as c, id FROM hp_login where uname=tom and upwd=123;

