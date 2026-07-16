
// DỮ LIỆU KHÓA HỌC (trang "Tất cả khóa học")
let danhSachKhoaHoc = [
    {
        ten: "Lập trình Frontend từ Zero đến Hero",
        gv: "Trần Minh Khang",
        anh: "../assets/img/html&css.jpg",
        gia: 899000,
        mienPhi: true,
        danhMuc: "frontend",
        trinhDo: "beginner",
        rating: 4.9,
        hocVien: 340,
        badge: "hot"
    },
    {
        ten: "ReactJS chuyên sâu cho người đi làm",
        gv: "Nguyễn Thu Hà",
        anh: "../assets/img/react.jpg",
        gia: 799000,
        mienPhi: false,
        danhMuc: "frontend",
        trinhDo: "intermediate",
        rating: 4.8,
        hocVien: 120,
        badge: "new"
    },
    {
        ten: "Xây dựng REST API với NodeJS & Express",
        gv: "Lê Văn Đức",
        anh: "../assets/img/nodejs.jpg",
        gia: 699000,
        mienPhi: false,
        danhMuc: "backend",
        trinhDo: "intermediate",
        rating: 4.7,
        hocVien: 980,
        badge: null
    },
    {
        ten: "Nhập môn AI & Machine Learning với Python",
        gv: "Phạm Anh Tuấn",
        anh: "../assets/img/python.jpg",
        gia: 899000,
        mienPhi: false,
        danhMuc: "ai",
        trinhDo: "advanced",
        rating: 4.9,
        hocVien: 640,
        badge: null
    },
    {
        ten: "Lập trình ứng dụng di động với Flutter",
        gv: "Hoàng Gia Bảo",
        anh: "../assets/img/Flutter.jpg",
        gia: 649000,
        mienPhi: false,
        danhMuc: "mobile",
        trinhDo: "intermediate",
        rating: 4.6,
        hocVien: 420,
        badge: null
    },
    {
        ten: "Thiết kế & tối ưu cơ sở dữ liệu SQL",
        gv: "Đỗ Thanh Sơn",
        anh: "../assets/img/sql.jpg",
        gia: 549000,
        mienPhi: false,
        danhMuc: "backend",
        trinhDo: "beginner",
        rating: 4.7,
        hocVien: 760,
        badge: null
    },
    {
        ten: "Xây dựng SPA với Vue.js 3",
        gv: "Ngô Bảo Châu",
        anh: "../assets/img/vuejs.jpg",
        gia: 599000,
        mienPhi: false,
        danhMuc: "frontend",
        trinhDo: "intermediate",
        rating: 4.5,
        hocVien: 310,
        badge: null
    },
    {
        ten: "Java Spring Boot cho người mới",
        gv: "Vũ Minh Quân",
        anh: "../assets/img/spring-boot.jpg",
        gia: 699000,
        mienPhi: false,
        danhMuc: "backend",
        trinhDo: "beginner",
        rating: 4.6,
        hocVien: 505,
        badge: null
    },
    {
        ten: "Thiết kế UI/UX với Figma cho người mới",
        gv: "Bùi Thảo Vy",
        anh: "../assets/img/figma.jpg",
        gia: 549000,
        mienPhi: false,
        danhMuc: "uiux",
        trinhDo: "beginner",
        rating: 4.8,
        hocVien: 890,
        badge: null
    }
];

// LẤY CÁC PHẦN TỬ TRÊN TRANG
let luoiKhoaHoc = document.getElementById("coursesGrid");
let oDemSoLuong = document.getElementById("coursesCount");
let oChonSapXep = document.getElementById("sortSelect");
let thanhGia = document.getElementById("priceRange");
let nhanThanhGia = document.getElementById("priceRangeLabel");
let nutXoaLoc = document.getElementById("clearFilters");

// Chỉ chạy toàn bộ logic của trang khi đang ở trang danh sách khóa học
// (tức là có khối lưới #coursesGrid trên trang)
if (luoiKhoaHoc) {

    // Biến ghi nhớ trạng thái lọc hiện tại
    let tuKhoaDangTim = "";
    let danhMucDangChon = [];   // mảng các danh mục đang được tick
    let trinhDoDangChon = [];   // mảng các trình độ đang được tick
    let giaToiDa = thanhGia ? Number(thanhGia.value) : 1000000;


    // Định dạng số tiền kiểu 799.000₫

    function dinhDangTien(so) {
        return so.toLocaleString("vi-VN") + "₫";
    }


    // Vẽ 1 thẻ khóa học ra HTML

    function taoTheKhoaHoc(kh) {
        let htmlBadge = "";
        if (kh.badge === "hot") {
            htmlBadge = '<span class="course-card__badge course-card__badge--hot">Hot</span>';
        } else if (kh.badge === "new") {
            htmlBadge = '<span class="course-card__badge course-card__badge--new">Mới</span>';
        }

        let htmlGia = kh.mienPhi
            ? `Miễn phí <small>${dinhDangTien(kh.gia)}</small>`
            : dinhDangTien(kh.gia);

        return `
        <article class="course-card">
            <div class="course-card__thumb">
                <img src="${kh.anh}" alt="${kh.ten}">
                ${htmlBadge}
            </div>
            <div class="course-card__body">
                <div class="course-card__title">${kh.ten}</div>
                <div class="course-card__author">GV: ${kh.gv}</div>
                <div class="course-card__meta">
                    <span class="course-card__rating"><i class="fa-solid fa-star"></i> ${kh.rating}</span>
                    <span>${kh.hocVien.toLocaleString("vi-VN")} học viên</span>
                </div>
                <div class="course-card__footer">
                    <span class="course-card__price">${htmlGia}</span>
                    <a href="course-detail.html" class="btn btn--secondary btn--sm">Xem chi tiết</a>
                </div>
            </div>
        </article>`;
    }


    // Hiển thị danh sách khóa học ra màn hình

    function hienThiKhoaHoc(ds) {
        if (ds.length === 0) {
            luoiKhoaHoc.innerHTML = '<p class="courses-main__empty">Không tìm thấy khóa học phù hợp với bộ lọc hiện tại.</p>';
        } else {
            luoiKhoaHoc.innerHTML = ds.map(taoTheKhoaHoc).join("");
        }

        if (oDemSoLuong) {
            oDemSoLuong.textContent = "Hiển thị " + ds.length + " khóa học";
        }
    }


    // Sắp xếp danh sách theo lựa chọn trong ô sort

    function sapXepKhoaHoc(ds) {
        let ketQua = ds.slice(); // sao chép mảng, không đụng vào mảng gốc
        let kieuSapXep = oChonSapXep ? oChonSapXep.value : "popular";

        if (kieuSapXep === "price-asc") {
            ketQua.sort(function (a, b) { return a.gia - b.gia; });
        } else if (kieuSapXep === "price-desc") {
            ketQua.sort(function (a, b) { return b.gia - a.gia; });
        } else if (kieuSapXep === "rating") {
            ketQua.sort(function (a, b) { return b.rating - a.rating; });
        } else if (kieuSapXep === "newest") {
            ketQua.reverse();
        } else {
            // Phổ biến nhất: theo số học viên giảm dần
            ketQua.sort(function (a, b) { return b.hocVien - a.hocVien; });
        }

        return ketQua;
    }


    // Lọc danh sách khóa học theo từ khóa + danh mục + trình độ + giá

    function locKhoaHoc() {
        let ketQua = danhSachKhoaHoc.filter(function (kh) {

            // Điều kiện 1: tên khóa học chứa từ khóa đang tìm (không phân biệt hoa thường)
            let dungTuKhoa = kh.ten.toLowerCase().includes(tuKhoaDangTim.toLowerCase());

            // Điều kiện 2: nếu có chọn danh mục thì khóa học phải thuộc 1 trong các danh mục đó
            let dungDanhMuc = danhMucDangChon.length === 0 || danhMucDangChon.includes(kh.danhMuc);

            // Điều kiện 3: nếu có chọn trình độ thì khóa học phải thuộc 1 trong các trình độ đó
            let dungTrinhDo = trinhDoDangChon.length === 0 || trinhDoDangChon.includes(kh.trinhDo);

            // Điều kiện 4: giá khóa học không vượt quá mức giá tối đa đang chọn
            // (khóa học miễn phí luôn thỏa điều kiện giá)
            let dungGia = kh.mienPhi || kh.gia <= giaToiDa;

            return dungTuKhoa && dungDanhMuc && dungTrinhDo && dungGia;
        });

        hienThiKhoaHoc(sapXepKhoaHoc(ketQua));
    }


    // Bắt sự kiện gõ vào ô tìm kiếm (cả ô trên header desktop và mobile)

    function ganSuKienTimKiem() {
        let cacOTimKiem = document.querySelectorAll(".header__search input");

        cacOTimKiem.forEach(function (oTimKiem) {
            oTimKiem.addEventListener("input", function () {
                tuKhoaDangTim = oTimKiem.value;

                // Đồng bộ giá trị giữa ô tìm kiếm desktop và mobile
                cacOTimKiem.forEach(function (o) {
                    if (o !== oTimKiem) o.value = oTimKiem.value;
                });

                locKhoaHoc();
            });
        });
    }


    // Bắt sự kiện tick vào checkbox lọc danh mục / trình độ

    function ganSuKienCheckbox() {
        let cacCheckbox = document.querySelectorAll('.filters input[type="checkbox"]');

        cacCheckbox.forEach(function (cb) {
            cb.addEventListener("change", function () {
                let loai = cb.getAttribute("data-filter-type");
                let giaTri = cb.getAttribute("data-value");

                let mang = loai === "category" ? danhMucDangChon : trinhDoDangChon;

                if (cb.checked) {
                    if (!mang.includes(giaTri)) mang.push(giaTri);
                } else {
                    let viTri = mang.indexOf(giaTri);
                    if (viTri > -1) mang.splice(viTri, 1);
                }

                locKhoaHoc();
            });
        });
    }


    // Bắt sự kiện kéo thanh trượt giá

    function ganSuKienGia() {
        if (!thanhGia) return;

        thanhGia.addEventListener("input", function () {
            giaToiDa = Number(thanhGia.value);
            if (nhanThanhGia) {
                nhanThanhGia.textContent = "0₫ — " + dinhDangTien(giaToiDa);
            }
            locKhoaHoc();
        });
    }


    // Bắt sự kiện đổi lựa chọn sắp xếp

    function ganSuKienSapXep() {
        if (!oChonSapXep) return;
        oChonSapXep.addEventListener("change", locKhoaHoc);
    }


    // Bắt sự kiện nút "Xóa lọc"

    function ganSuKienXoaLoc() {
        if (!nutXoaLoc) return;

        nutXoaLoc.addEventListener("click", function () {
            // Reset các biến trạng thái
            tuKhoaDangTim = "";
            danhMucDangChon = [];
            trinhDoDangChon = [];
            giaToiDa = thanhGia ? Number(thanhGia.max) : 1000000;

            // Reset lại giao diện
            document.querySelectorAll('.filters input[type="checkbox"]').forEach(function (cb) {
                cb.checked = false;
            });
            document.querySelectorAll(".header__search input").forEach(function (o) {
                o.value = "";
            });
            if (thanhGia) {
                thanhGia.value = thanhGia.max;
                if (nhanThanhGia) nhanThanhGia.textContent = "0₫ — " + dinhDangTien(Number(thanhGia.max));
            }
            if (oChonSapXep) oChonSapXep.value = "popular";

            locKhoaHoc();
        });
    }


    // Nút "Bộ lọc" trên mobile: đóng/mở khối filters

    function ganSuKienMoBoLoc() {
        let nutMoBoLoc = document.querySelector(".mobile-filter-toggle");
        let khoiBoLoc = document.querySelector(".filters");
        if (!nutMoBoLoc || !khoiBoLoc) return;

        nutMoBoLoc.addEventListener("click", function () {
            khoiBoLoc.classList.toggle("is-open");
        });
    }


    // CHẠY KHI TRANG VỪA TẢI XONG

    hienThiKhoaHoc(sapXepKhoaHoc(danhSachKhoaHoc));
    ganSuKienTimKiem();
    ganSuKienCheckbox();
    ganSuKienGia();
    ganSuKienSapXep();
    ganSuKienXoaLoc();
    ganSuKienMoBoLoc();
}
