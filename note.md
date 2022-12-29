- Quy trình init ra một server NodeJS

* --save-dev: chỉ lưu trong môi trường của dev

1. npm init: Khởi tạo, dựng file package.json
2. body-parser: Lấy và Tối giản các tham số truyền từ client
3. dotenv: Lấy các tham số khai báo trong file môi trường
4. ejs: là viewEngine, giúp ta viết html+js ở phía server
5. express: Framework chính
6. @babel/core, @babel/node, @babel/preset-env(-dev): Bộ package babel giúp compiler giữa nhiều version js
7. nodemon(-dev): Tự động chạy lại server khi có thay đổi

- Tiếp theo cần cấu trúc folder

1. Tạo folder src tại root
2. Tạo file server.js, folder controller, folder services, folder config, folder view, folder public, folder route
3. Tạo file .env, .env.example tại root
   .env.example dùng để đưa lên github, ghi các thông số của .env nhưng không ghi giá trị
4. .gitignore: qui định những thằng nào sẽ không đẩy lên server

5. tạo file .babelrc
   Cấu hình : {
   "presets": ["@babel/preset-env"]
   }
6. Trong file .env, tạo tham số PORT
7. Trong gitignore, paste:
   /node_modules
   /vendor
   /.idea
   .idea/
   .env
8. Cấu hình viewEngine: tạo file viewEngine.js trong folder config
9. Cấu hình rout: Tạo file web.js trong route và tiến hành cấu hình
10. Cấu hình file server.js
11. Cấu hình lại file package.json:
    Thêm vào mục script:
    "start": "nodemon --exec babel-node src/server.js"

- Cấu hình MVC cho prject

  - Tài liệu tham khảo:
    https://mherman.org/blog/node-postgres-sequelize/
    https://sequelize.org/docs/v6/other-topics/migrations/#installing-the-cli

1. Trong folder controller, tạo homeController.js, viết hàm, export hàm rồi vào route(web.js) import
2. Cài đặt package sequelize và sequelize-cli:
   npm install --save sequelizecd
   npm install --save-dev sequelize-cli
3. Tạo file .sequelizerc tại root
4. Tạo file config, models, migrations, seeders:

   node_modules/.bin/sequelize init

5. Tạo dữ liệu file model + migration:
   npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

6. tải mysql2:
   npm install --save mysql2
7. Vào .env, tạo biến NODE_ENV
8. Vào config, chỉnh lại tên db
9. Tạo file config để kết nối tới db
