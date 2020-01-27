# blog
使用nodej.s搭建后台项目




#### 操作数据库常用的操作
1. `show database;` 显示所有数据库

2. `use myblog;` 指令可以使用名称为myblog的数据库

3. `show tables;` 显示当前使用的数据库的所有表

4. `insert into users (keyname, ‘keyname2’) values (value1, value2);` 出入数据到表中

5. `select * from users;` 查询users表中的所有数据

6. `select id,username from users;` 查询users表，并返回id及username列的数据，其他列不返回

7. `select * from users where username='zhangsan';` 查询users表中用户名为zhangsan的数据

8. `select * from users where username='zhangsan' and password='123456';` 查询users表中用户名为zhangsan并且密码为123456的数据

9. `select * from users where username='zhangsan' or title like '%${变量名}%' `  like为模糊查询条件,根据title进行模糊查询

10. `and  or  like`  and与  or或  like模糊查询

11. `select * frome users where username='李四' order by createtime desc` 根据createtime字段降序查询(desc为倒序，即从大到小)

12. `update users set username='lisi' where username='李四';` 将用户名为李四的用户改为 lisi

13. `delete from users where username='lisi';` 删除users表中用户名为lisi的用户。还有一种删除方式叫做软删除，通过改变state的值达到假删除的效果

   ```javascript
   // 操作数据库时返回的对象，根据该对象判断增加，删除，更新等
   {
     "fieldCount": 0,
     "affectedRows": 1, // 删除
     "insertId": 0, // 新建
     "serverStatus": 2,
     "warningCount": 0,
     "message": "",
     "protocol41": true,
     "changedRows": 0  // 更新
   }
   ```