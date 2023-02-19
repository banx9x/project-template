# Project Template

Đây là template sử dụng để làm đồ án web tĩnh. Vui lòng đọc kỹ HDSD trước khi dùng, tránh bugs ngớ ngẩn 😜

## Giới thiệu

### Node.js

Node.js là một JavaScript Runtime Environment, cho phép chạy mã JavaScript bên ngoài trình duyệt. Node.js thường sử dụng để phát triển ứng dụng Web Backend (Server), tuy nhiên, Node.js cũng được sử dụng để phát triển các ứng dụng Web Frontend hiện đại.

Để tải và cài đặt Node.js truy cập [tại đây](https://nodejs.org/en/) (chỉ cần bấm `Next` `Next`...)

Kiểm tra quá trình cài đặt thành công hay chưa, sử dụng Terminal (Command Prompt trên Windows) hoặc Terminal trong VSCode (menu `Terminal > New Terminal`), gõ lệnh sau:

```bash
node -v
```

Kết quả hiển thị (số phiên bản có thể khác nhau)

```bash
v18.12.1
```

> ❣️ Lưu ý:
>
> 1. Trên Windows, thông thường công cụ dòng lệnh mặc định trong VSCode là PowerShell, nên đổi sang Command Prompt bằng cách mở `Setting > Tìm cài đặt "Terminal Default Profile" > Lựa chọn Command Prompt`
> 2. Có thể cần khởi động lại VSCode để câu lệnh hoạt động

### NPM

NPM - Node Package Manager - là công cụ quản lý gói cho Node.js, sử dụng để cài đặt, quản lý, gỡ bỏ, ... các gói (packages) mã nguồn JavaScript từ kho lưu trữ mã nguồn (NPM Registry).

Mỗi package chứa mã cần thiết để thực hiện một chức năng cụ thể, ví dụ các thư viện JavaScript, CSS, ...

NPM được cài đặt kèm với Node.js, để kiểm tra, gõ lệnh sau:

```bash
npm -v
```
Kết quả hiển thị (số phiên bản có thể khác nhau)

```bash
8.19.2
```

Một số câu lệnh NPM cơ bản

- `npm install`: Cài đặt tất cả package đã liệt kê trong mục `dependencies` và `devDependencies` của tệp `package.json`
- `npm install <package> --save`: Cài đặt một package vào project và lưu nó vào tệp `package.json`, ví dụ `npm install bootstrap`
- `npm ci`: Cài đặt các packages được liệt kê trong `package-lock.json`
- `npm uninstall <package>`: Gỡ bỏ một package khỏi project, ví dụ `npm uninstall bootstrap`
- `npm run <script>`: Chạy một script được định nghĩa trong mục `scripts` của tệp `package.json`, ví dụ `npm run dev`

> ❣️ Lưu ý:
>
> 1. Tệp `package.json` được sử dụng bởi NPM chứa các thông tin mô tả về project (metadata) ví dụ như tên project, phiên bản, tác giả, các phụ thuộc (dependencies), scripts, ...
> 2. Tệp `package-lock.json` được tạo tự động bởi NPM, tệp này đảm bảo các packages được cài đặt một cách nhất quán, tệp này hữu ích khi chia sẻ project với người khác hoặc triển khai dự án trên môi trường production.
> 2. Thư mục `node_modules` là thư mục cài đặt các packages sử dụng trong project

### Modules

Module là một cách để tách một chương trình thành cách phần nhỏ, mỗi module chứa các hàm, biến và các đoạn mã liên quan để thực hiện một chức năng cụ thể. Sử dụng module giúp quản lý và tái sử dụng mã dễ dàng hơn.

Module đơn giản là một file JavaScript, mỗi file là một module, mỗi module là một file (đơn giản vãi cức). Các module có thể liên kết với nhau, cho phép một module tải và sử dụng mã từ một module khác thông qua cú pháp `export` và `import`

> ❣️ Lưu ý:
>
> 1. Để sử dụng được cú pháp `export`/`import`, thẻ `<script>` cần có thêm thuộc tính `type="module"` (xem ví dụ trong file `index.html`)

#### Export 

Xuất một hàm, biến, class, cho phép các module khác sử dụng

```javascript
// file module.js

// Export một giá trị cụ thể
export const myName = "Ba đẹp trai 😎";

// Export một giá trị cụ thể
export const sayHi = (name) => {
  console.log("Hi", name);
}

// Export mặc định một giá trị
export default sayGoodbye = (name) => {
  console.log("Goodbye", name);
}
```

> ❣️ Lưu ý:
>
> 1. Trên đây chỉ là một vài cú pháp thông dụng, cú pháp `export` có thể được dùng theo nhiều cách khác nữa
> 2. Mỗi module chỉ được phép `export default` một giá trị
> 3. Không dùng được `export default` với cú pháp khai báo biến

#### Import 

Nhập một hàm, biến, class từ một module khác để sử dụng

```javascript
// file main.js 

// Import giá trị được export mặc định
import sayGoodbye from "./module.js";

// Import các giá trị cụ thể từ module
import { myName, sayHi } from "./module.js";

// Import gộp
import sayGoodbye, { myName, sayHi } from "./module.js";

// Sử dụng
sayGoodbye("Lớp Web 30");
```

> ❣️ Lưu ý:
>
> 1. Trên đây chỉ là một vài cú pháp thông dụng, cú pháp `import` có thể được dùng theo nhiều cách khác nữa

### Cấu trúc thư mục

Thư mục `src` chứa toàn bộ source của project

```
src
├── index.html
├── about.html
├── assets
├── css
├── js
└── public
```

- `index.html`, `about.html`, ... có thể tạo bao nhiêu file `.html` tuỳ ý
- `public`: Chứa các tài nguyên cho phép truy cập trực tiếp, lưu ý, đường dẫn không bao gồm `public`, ví dụ `<img src="avatar.jpeg" />` sẽ tự trỏ đến `public/avatar.jpeg`
- `css`: Chứa các tệp CSS
- `js`: Chứa các module JS (file JS tự code ấy)

Có thể tạo thêm các folders | files khác nếu muốn

## Hướng dẫn sử dụng

### Clone và chạy trang web

1. Clone repo về máy, sử dụng lệnh `git clone` hoặc tải file zip
2. Cài đặt dependencies ban đầu sử dụng lệnh `npm install`
3. Start WebServer sử dụng lệnh `npm run dev`
4. Stop WebServer: Sử dụng tổ hợp phím `Control + C` (`Ctrl  + C` trên Windows)

### Sử dụng package được cài đặt thông qua NPM

Để sử dụng các thư viện được cài thông qua NPM cũng sử dụng cú pháp `import`, ví dụ:

```javascript
import $ from "jquery";
```

> ❣️ Lưu ý:
>
> 1. Import từ thư viện không có ./
> 2. Mỗi thư viện `export` các chức năng khác nhau, xem chi tiết trên doc của thư viện đó để biết cách cài đặt và sử dụng, xem ví dụ với [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/vite/)


### Sử dụng CSS

Không cần nhúng các file CSS vào HTML, thay vào đó, sử dụng cú pháp `import` file CSS vào JavaScript, xem ví dụ trong file `main.js`

### Sử dụng hình ảnh, fonts

Thường lưu vào public, lưu ý link không có `/public`