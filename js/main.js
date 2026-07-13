// Lấy thẻ chứa khóa học
let courses = document.getElementById("courses");

// Danh sách khóa học
let data = [
    {
        ten: "Lập trình Frontend từ Zero đến Hero",
        gv: "Trần Minh Khang",
        anh: "assets/img/html&css.jpg",
        gia: "Miễn phí"
    },

    {
        ten: "ReactJS chuyên sâu",
        gv: "Nguyễn Thu Hà",
        anh: "assets/img/react.jpg",
        gia: "799.000₫"
    },

    {
        ten: "NodeJS & Express",
        gv: "Lê Văn Đức",
        anh: "assets/img/node&expressJS.jpg",
        gia: "699.000₫"
    },

    {
        ten: "Machine Learning với Python",
        gv: "Phạm Anh Tuấn",
        anh: "assets/img/python.jpg",
        gia: "899.000₫"
    },

    {
        ten: "Lập trình Flutter",
        gv: "Hoàng Gia Bảo",
        anh: "assets/img/Flutter.jpg",
        gia: "649.000₫"
    },

    {
        ten: "SQL Database",
        gv: "Đỗ Thanh Sơn",
        anh: "assets/img/sql.jpg",
        gia: "549.000₫"
    },

    {
        ten: "VueJS 3",
        gv: "Ngô Bảo Châu",
        anh: "assets/img/vuejs.jpg",
        gia: "599.000₫"
    },

    {
        ten: "Java Spring Boot",
        gv: "Vũ Minh Quân",
        anh: "assets/img/spring-boot.jpg",
        gia: "699.000₫"
    }
];

// Hiển thị khóa học
for (let i = 0; i < data.length; i++) {

    courses.innerHTML += `

    <article class="course-card">

        <div class="course-card__thumb">
            <img src="${data[i].anh}" alt="${data[i].ten}">
        </div>

        <div class="course-card__body">

            <div class="course-card__title">
                ${data[i].ten}
            </div>

            <div class="course-card__author">
                GV: ${data[i].gv}
            </div>

            <div class="course-card__meta">
                <i class="fa-solid fa-star"></i> 4.8 | 500 học viên
            </div>

            <div class="course-card__footer">

                <span class="course-card__price">
                    ${data[i].gia}
                </span>

                <a href="html/course-detail.html"
                   class="btn btn--secondary btn--sm">
                    Xem chi tiết
                </a>

            </div>

        </div>

    </article>

    `;
}