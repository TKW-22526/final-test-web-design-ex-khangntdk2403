// Lấy thẻ chứa khóa học
let courses = document.getElementById("courses");

// Danh sách khóa học (có thêm danhmuc để lọc theo tab)
let data = [
    {
        ten: "Lập trình Frontend từ Zero đến Hero",
        gv: "Trần Minh Khang",
        anh: "assets/img/html&css.jpg",
        gia: "Miễn phí",
        danhmuc: "frontend"
    },
    {
        ten: "ReactJS chuyên sâu",
        gv: "Nguyễn Thu Hà",
        anh: "assets/img/react.jpg",
        gia: "799.000₫",
        danhmuc: "frontend"
    },
    {
        ten: "NodeJS & Express",
        gv: "Lê Văn Đức",
        anh: "assets/img/node&expressJS.jpg",
        gia: "699.000₫",
        danhmuc: "backend"
    },
    {
        ten: "Machine Learning với Python",
        gv: "Phạm Anh Tuấn",
        anh: "assets/img/python.jpg",
        gia: "899.000₫",
        danhmuc: "ai"
    },
    {
        ten: "Lập trình Flutter",
        gv: "Hoàng Gia Bảo",
        anh: "assets/img/Flutter.jpg",
        gia: "649.000₫",
        danhmuc: "mobile"
    },
    {
        ten: "SQL Database",
        gv: "Đỗ Thanh Sơn",
        anh: "assets/img/sql.jpg",
        gia: "549.000₫",
        danhmuc: "backend"
    },
    {
        ten: "VueJS 3",
        gv: "Ngô Bảo Châu",
        anh: "assets/img/vuejs.jpg",
        gia: "599.000₫",
        danhmuc: "frontend"
    },
    {
        ten: "Java Spring Boot",
        gv: "Vũ Minh Quân",
        anh: "assets/img/spring-boot.jpg",
        gia: "699.000₫",
        danhmuc: "backend"
    }
];


function hienThiKhoaHoc(ds) {
    for (let i = 0; i < ds.length; i++) {

        courses.innerHTML += `
        <article class="course-card">
            <div class="course-card__thumb">
                <img src="${ds[i].anh}" alt="${ds[i].ten}">
            </div>
            <div class="course-card__body">
                <div class="course-card__title">${ds[i].ten}</div>
                <div class="course-card__author">GV: ${ds[i].gv}</div>
                <div class="course-card__meta">
                    <i class="fa-solid fa-star"></i> 4.8 | 500 học viên
                </div>
                <div class="course-card__footer">
                    <span class="course-card__price">${ds[i].gia}</span>
                    <a href="html/course-detail.html" class="btn btn--secondary btn--sm">Xem chi tiết</a>
                </div>
            </div>
        </article>
        `;
    }
}

if (courses) {
    hienThiKhoaHoc(data);    
}

document.getElementById("loginForm").onsubmit = function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email == "admin@gmail.com" && password == "123456")
        location.href = "admin.html";
    else
        location.href = "index.html";
};