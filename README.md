# ⚡ Hogwarts-Themed Online Portfolio | Đào Phương Ngọc

Hồ sơ năng lực trực tuyến phong cách Pháp thuật Harry Potter dành cho **Đào Phương Ngọc** (Foreign Trade University - International Business).

Trang web kết hợp giữa bối cảnh thế giới pháp thuật Hogwarts (thư nhập học Hogwarts Acceptance Letter, chậu tư tưởng Pensieve, phòng huân chương Trophy Room, kho bùa chú Spellbook, trạm thư cú Owlery) và kết cấu chuyên nghiệp hiện đại, giúp ghi điểm ấn tượng với các nhà tuyển dụng trong các vị trí Thực tập sinh Kinh doanh (Business Development), Vận hành (Operations/Sales) và Tiếp thị (Marketing & Communications).

---

## 🌟 Tính Năng Nổi Bật

1. **Giao Diện Chủ Đề Harry Potter Huyền Bí**:
   - Bầu trời đêm sâu thẳm (`#080a0f`) với bụi sao hoàng kim bay bổng (`#particles-canvas`).
   - Hiệu ứng đũa phép **Lumos**: tàn sáng lấp lánh nhẹ nhàng bay theo con trỏ chuột.
   - Thư nhập học Hogwarts trên nền giấy da (parchment) cổ điển kèm con dấu sáp đỏ niêm phong (Wax Seal).
   - Âm thanh phép thuật (Web Audio API Synthesizer): tiếng chuông thần chú *Alohomora* khi mở chứng chỉ (có nút bật/tắt âm thanh, mặc định tắt để giữ tính chuyên nghiệp).
2. **Ký Ức Trong Chậu Tư Tưởng (The Pensieve of Experience)**:
   - Toàn bộ kinh nghiệm thực chiến tại **CYGNUS (Startup Lưu trú)** và các câu lạc bộ hàng đầu FTU (**Dynamic FTU**, **CHC FTU**).
   - Bộ lọc phân loại tức thì: Tất cả, Kinh doanh/Startup, CLB & Lãnh đạo.
3. **Phòng Huy Chương & Chứng Chỉ (The Trophy Room with Alohomora Modal)**:
   - Trưng bày điểm số **IELTS Academic 8.0 (C1)**, **Học bổng Khuyến khích Ngoại thương (Loại Giỏi)**, và **Giải Ba HSG Cấp Tỉnh môn Tiếng Anh**.
   - Nút thần chú **"Alohomora • Xem Minh Chứng"** mở cửa sổ phóng to bản scan chứng chỉ gốc có xác thực.
4. **Kho Bùa Chú & Kỹ Năng (The Spellbook)**:
   - Phân loại theo 3 môn học Hogwarts: *Charms & Communications* (Tiếng Anh, Storytelling, AI Prompting), *Transfiguration* (Thiết kế Canva, Illustrator, Quay/Chụp), *Arithmancy* (Vận hành OTA, Định giá mùa điểm, Tin học văn phòng).
5. **Hỗ Trợ Song Ngữ (Bilingual VI / EN)**:
   - Chuyển đổi ngôn ngữ Tiếng Việt ↔ Tiếng Anh tức thì với 1 cú nhấp chuột.
6. **Không Cần Cài Đặt (Zero Build Step)**:
   - Chạy trực tiếp chỉ bằng cách nhấp đúp `index.html` trong bất kỳ trình duyệt nào.
   - Sẵn sàng triển khai tự động lên **GitHub Pages** trong 2 phút!

---

## 🚀 Hướng Dẫn Xem Trực Tiếp Trên Máy Tính

Bạn chỉ cần:
1. Mở thư mục `potter-portfolio` trên máy tính:
   ```
   C:\Users\HP\.gemini\antigravity\scratch\potter-portfolio
   ```
2. Nhấp đúp vào file `index.html` để mở ngay trên Chrome, Edge, Safari hoặc Firefox.

---

## 🌐 Hướng Dẫn Đưa Lên GitHub & Kích Hoạt GitHub Pages Miễn Phí

### Cách 1: Tải Lên Bằng Giao Diện Web GitHub (Dễ nhất, không cần cài Git)

1. Đăng nhập vào tài khoản [GitHub](https://github.com/).
2. Nhấp vào nút **New** (Tạo kho lưu trữ mới):
   - **Repository name**: ví dụ `potter-portfolio` (hoặc `<username>.github.io` nếu muốn đặt làm trang chính của tài khoản).
   - Đặt ở chế độ **Public**.
   - Bỏ chọn "Add a README file" (vì thư mục đã có sẵn).
   - Nhấn **Create repository**.
3. Tại trang hiển thị repository mới tạo, nhấp vào liên kết **"uploading an existing file"**.
4. Kéo toàn bộ các file và thư mục trong `C:\Users\HP\.gemini\antigravity\scratch\potter-portfolio` vào cửa sổ tải lên:
   - `index.html`
   - thư mục `css/`
   - thư mục `js/`
   - thư mục `assets/`
   - thư mục `.github/`
   - `README.md`
5. Nhấn **Commit changes**.
6. Vào tab **Settings** của repository trên GitHub:
   - Ở cột bên trái, chọn **Pages**.
   - Tại mục **Build and deployment > Source**, chọn **Deploy from a branch**.
   - Tại mục **Branch**, chọn nhánh `main` (hoặc `master`), thư mục `/ (root)` rồi nhấn **Save**.
7. Đợi 1-2 phút, GitHub sẽ cung cấp đường link website chính thức của bạn (ví dụ: `https://<tên-github-của-bạn>.github.io/potter-portfolio/`).

---

### Cách 2: Sử Dụng Git Command Line (Nếu đã cài Git)

```bash
cd C:\Users\HP\.gemini\antigravity\scratch\potter-portfolio
git init
git add .
git commit -m "feat: initial release of magical Harry Potter portfolio"
git branch -M main
git remote add origin https://github.com/<tên-github-của-bạn>/potter-portfolio.git
git push -u origin main
```

File cấu hình workflow `.github/workflows/deploy.yml` đã được tạo sẵn trong thư mục dự án để tự động cập nhật website mỗi khi bạn có chỉnh sửa mới!

---

## 🛠️ Cấu Trúc Thư Mục

```
potter-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml              # Quy trình tự động xuất bản lên GitHub Pages
├── assets/
│   └── proofs/
│       ├── ielts_certificate.jpg   # Minh chứng phiếu điểm IELTS 8.0
│       └── awards_record.png       # Minh chứng học bổng FTU & giải HSG tỉnh
├── css/
│   └── styles.css                  # Toàn bộ hiệu ứng pháp thuật, giấy da parchment, con dấu sáp
├── js/
│   ├── data.js                     # Toàn bộ dữ liệu hồ sơ năng lực song ngữ (VI & EN)
│   ├── particles.js                # Bầu trời đêm sao & bụi vàng lơ lửng bằng Canvas
│   ├── wand.js                     # Hiệu ứng đũa phép phát sáng (Lumos wand cursor)
│   └── main.js                     # Bộ điều khiển: chuyển ngữ, âm thanh Web Audio, xem minh chứng
├── index.html                      # Giao diện chính của website
└── README.md                       # Tài liệu hướng dẫn sử dụng và triển khai
```

---

## ✏️ Cách Chỉnh Sửa Thông Tin Sau Này

- Để thêm hoặc sửa kinh nghiệm, giải thưởng, hoặc thông tin liên hệ: Mở file `js/data.js` và cập nhật thông tin trong phần tiếng Việt (`vi`) hoặc tiếng Anh (`en`).
- Để thay đổi hoặc thêm ảnh minh chứng mới: Thêm file ảnh vào thư mục `assets/proofs/` và cập nhật đường dẫn tương ứng trong `js/data.js`.
