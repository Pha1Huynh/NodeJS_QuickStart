- Body-parser dùng để lấy các tham số từ client, VD: user/id/7 -> Lấy số 7

- Để lấy biến từ file .env:
  require("dotenv").config();
  process.env.abc

* file seeder: Dùng fake data
* file migration: dùng để tạo hoặc drop table
* file model: Dùng để chứa thông tin các trường của table, mỗi model đặt tên là 1 bảng của DB

raw: true,

- Để dùng save() trong sequelize và include dữ liệu nhiều bảng, phải dùng raw: false, do nó cần nhận sequelize object
  nest: true: Gom nhóm những row trong 1 table khi lấy data từ 2 bảng

- Bcrypt: dùng để hashpassword

* uuid: Tạo ra 1 chuỗi ký tự để tạo token gửi mail

- Luồng code: Khi chạy code, lúc nào cũng chạy vào route trước, route quyết định đường dẫn và chứa dữ liệu ở page đó homeController, controller sẽ bắt services lấy dữ liệu, gửi cho controller, từ đó
  controller có dữ liệu và nhả cho view render

- Sequelize: Với các hàm của sequelize (sequelize query), ta có thể thao tác với database mà không cần dùng đến query thuần
- Sequelize findOrCreate: Tìm 1 thằng, có thì return thằng đó, k có thì create

- ORM (Object Relational Mapping), là một kỹ thuật/cơ chế lập trình thực hiện ánh xạ CSDL sang các đối tượng trong các ngôn ngữ lập trình hướng đối tượng như Java, C# …(các table tương ứng các class, mối ràng buộc giữa các table tương ứng quan hệ giữa các class ‘has a’ , ‘is a’).

- Việc sử dụng ORM cho phép lập trình viên thao tác với database 1 cách hoàn toàn tự nhiên, dễ hiểu thông qua các đối tượng. Lập trình viên không cần tới loại database, kiểu dữ liệu trong database…

- Khi thao tác với cơ sở dữ liệu trong file services, cần return ra Promise, vì khi chọc xuống DB lấy dữ liệu sẽ tốn thời gian-> thao tác bất đồng bộ

- Cách lấy các thông tin của req:
  req.body: dữ liệu lấy từ ô input
  req.query.abc: abc là biến lấy từ URL

* Decode blob from db to base64:
  let imageBase64 = "";
  if (data.image) {
  imageBase64 = new Buffer(data.image, "base64").toString("binary");
  }
* DEcode nhiều trường:
  data.map((item) => {
  item.image = new Buffer(item.image, "base64").toString("binary");
  return item;
  });
