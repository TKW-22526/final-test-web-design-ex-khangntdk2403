// ================================
// DỮ LIỆU KHÓA HỌC (trang "Tất cả khóa học")
// ================================
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
        hocVien: 2340,
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
        hocVien: 1120,
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



let coursesGrid = document.getElementById("coursesGrid");
let search = document.querySelector(".header__search input");
let sort = document.getElementById("sortSelect");

//hiển thị các khóa hocj
function hienThiKhoaHoc(danhSach) {

    let html = "";

    for (let i = 0; i < danhSach.length; i++) {

        let khoaHoc = danhSach[i];

        html += `
        <article class="course-card">

            <div class="course-card__thumb">
                <img src="${khoaHoc.anh}" alt="${khoaHoc.ten}">
            </div>

            <div class="course-card__body">

                <div class="course-card__title">
                    ${khoaHoc.ten}
                </div>

                <div class="course-card__author">
                    GV: ${khoaHoc.gv}
                </div>

                <div class="course-card__meta">
                    <span>
                        <i class="fa-solid fa-star"></i> ${khoaHoc.rating}
                    </span>

                    <span>
                        ${khoaHoc.hocVien} học viên
                    </span>
                </div>

                <div class="course-card__footer">

                    <span class="course-card__price">
                        ${khoaHoc.mienPhi ? "Miễn phí" : khoaHoc.gia.toLocaleString("vi-VN") + "₫"}
                    </span>

                    <a href="course-detail.html" class="btn btn--secondary btn--sm">
                        Xem chi tiết
                    </a>

                </div>

            </div>

        </article>
        `;
    }

    coursesGrid.innerHTML = html;

    coursesCount.innerHTML = "Hiển thị " + danhSach.length + " khóa học";
}
// tìm kiếmmm
search.addEventListener("keyup", function () {
    let tuKhoa = search.value.toLowerCase();
    let ketQua = [];
    for (let i = 0; i < danhSachKhoaHoc.length; i++) {
        let ten = danhSachKhoaHoc[i].ten.toLowerCase();
        if (ten.includes(tuKhoa)) {
            ketQua.push(danhSachKhoaHoc[i]);
        }
    }
    if (ketQua.length > 0) {
        hienThiKhoaHoc(ketQua);
    } else {
        hienThiKhoaHoc([]);
    }

});

hienThiKhoaHoc(danhSachKhoaHoc);


