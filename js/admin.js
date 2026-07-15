
let dsKhoaHocAdmin = [
{   id: 1, 
    ten: "Lập trình Frontend từ Zero đến Hero", 
    gv: "Trần Minh Khang", 
    anh: "../assets/img/html&css.jpg",
     gia: 899000, danhMuc: "frontend", 
     trinhDo: "beginner", 
     rating: 4.9, hocVien: 2340, 
     trangThai: "active" 
},
    
{   id: 2, 
    ten: "ReactJS chuyên sâu cho người đi làm", 
    gv: "Nguyễn Thu Hà", 
    anh: "../assets/img/react.jpg", gia: 799000, 
    danhMuc: "frontend", trinhDo: "intermediate", 
    rating: 4.8, hocVien: 1120, 
    trangThai: "active" 
},
{   id: 3, 
    ten: "Xây dựng REST API với NodeJS & Express", 
    gv: "Lê Văn Đức", anh: "../assets/img/nodejs.jpg", 
    gia: 699000, danhMuc: "backend", 
    trinhDo: "intermediate", 
    rating: 4.7, 
    hocVien: 980, 
    trangThai: "active" 
},
{   id: 4, 
    ten: "Nhập môn AI & Machine Learning với Python", 
    gv: "Phạm Anh Tuấn", 
    anh: "../assets/img/python.jpg", 
    gia: 899000, danhMuc: "ai", 
    trinhDo: "advanced",
    rating: 4.9, 
    hocVien: 640, 
    trangThai: "active" 
},
{   id: 5, 
    ten: "Lập trình ứng dụng di động với Flutter", 
    gv: "Hoàng Gia Bảo", 
    anh: "../assets/img/Flutter.jpg", 
    gia: 649000, danhMuc: "mobile", 
    trinhDo: "intermediate", 
    rating: 4.6, 
    hocVien: 420, 
    trangThai: "active" },
{   id: 6,
    ten: "Thiết kế & tối ưu cơ sở dữ liệu SQL", 
    gv: "Đỗ Thanh Sơn", 
    anh: "../assets/img/sql.jpg", 
    gia: 549000, danhMuc: "backend", 
    trinhDo: "beginner", rating: 4.7, 
    hocVien: 760, 
    trangThai: "active" 
},
{   id: 7, 
    ten: "Xây dựng SPA với Vue.js 3",
     gv: "Ngô Bảo Châu", 
     anh: "../assets/img/vuejs.jpg", 
     gia: 599000, 
     danhMuc: "frontend", 
     trinhDo: "intermediate", 
     rating: 4.5, 
     hocVien: 310, 
     trangThai: "hidden" 
},
{   id: 8, 
    ten: "Java Spring Boot cho người mới", 
    gv: "Vũ Minh Quân", 
    anh: "../assets/img/spring-boot.jpg", 
    gia: 699000, 
    danhMuc: "backend", 
    trinhDo: "beginner", 
    rating: 4.6, 
    hocVien: 505, 
    trangThai: "active" 
},
{   id: 9, 
    ten: "Thiết kế UI/UX với Figma cho người mới", 
    gv: "Bùi Thảo Vy", 
    anh: "../assets/img/figma.jpg", 
    gia: 549000, 
    danhMuc: "uiux", 
    trinhDo: "beginner", 
    rating: 4.8, 
    hocVien: 890, 
    trangThai: "active" 
}
];

let dsHocVienAdmin = [
{   id: 1, 
    hoTen: "Nguyễn Trần Duy Khang", 
    email: "khangnguyen@gmail.com", 
    ngayThamGia: "2026-06-28", 
    soKhoaHoc: 6, 
    trangThai: "active" 
},
{   id: 2, 
    hoTen: "Trần Thị Bích Ngọc", 
    email: "ngoctran@gmail.com", 
    ngayThamGia: "2026-06-25", 
    soKhoaHoc: 3, 
    trangThai: "active" 
},
{   id: 3,
    hoTen: "Lê Hoàng Phúc", 
    email: "phucle@gmail.com", 
    ngayThamGia: "2026-06-20", 
    soKhoaHoc: 1, 
    trangThai: "active" 
},
{   id: 4, 
    hoTen: "Phạm Gia Hân", 
    email: "hanpham@gmail.com", 
    ngayThamGia: "2026-06-15", 
    soKhoaHoc: 4, 
    trangThai: "locked" 
},
{   id: 5, 
    hoTen: "Võ Minh Tuấn", 
    email: "tuanvo@gmail.com", 
    ngayThamGia: "2026-06-10", 
    soKhoaHoc: 2, 
    trangThai: "active" 
},
{   id: 6, 
    hoTen: "Đặng Thảo My", 
    email: "mydang@gmail.com", 
    ngayThamGia: "2026-06-02", 
    soKhoaHoc: 5, 
    trangThai: "active" 
},
{   id: 7, 
    hoTen: "Bùi Anh Khoa", 
    email: "khoabui@gmail.com", 
    ngayThamGia: "2026-05-27", 
    soKhoaHoc: 1, trangThai: "locked" }
];

let idKhoaHocKeTiep = 10;

// Chỉ chạy toàn bộ script này khi đang ở trang admin (có sidebar #adminNav)
let dieuHuongAdmin = document.getElementById("adminNav");

if (dieuHuongAdmin) {

    // 
    // TIỆN ÍCH DÙNG CHUNG
    // 
    function dinhDangTien(so) {
        return Number(so).toLocaleString("vi-VN") + "₫";
    }

    function tenDanhMuc(ma) {
        let ten = { frontend: "Frontend", backend: "Backend", mobile: "Mobile", uiux: "UI/UX", ai: "AI" };
        return ten[ma] || ma;
    }

    function dinhDangNgay(chuoiNgay) {
        let d = new Date(chuoiNgay);
        if (isNaN(d)) return chuoiNgay;
        return d.toLocaleDateString("vi-VN");
    }

    // 
    // ĐIỀU HƯỚNG GIỮA CÁC MỤC (Tổng quan / Khóa học / Học viên)
    // 
    function chuyenMuc(ten) {
        document.querySelectorAll(".admin-section").forEach(function (s) {
            s.classList.toggle("is-active", s.id === "section-" + ten);
        });
        document.querySelectorAll("#adminNav a[data-section]").forEach(function (a) {
            a.classList.toggle("is-active", a.getAttribute("data-section") === ten);
        });
    }

    function ganSuKienDieuHuong() {
        document.querySelectorAll("#adminNav a[data-section]").forEach(function (a) {
            a.addEventListener("click", function (e) {
                e.preventDefault();
                chuyenMuc(a.getAttribute("data-section"));
            });
        });

        // Các link "Xem tất cả" ở trang tổng quan
        document.querySelectorAll("[data-goto]").forEach(function (a) {
            a.addEventListener("click", function (e) {
                e.preventDefault();
                chuyenMuc(a.getAttribute("data-goto"));
            });
        });
    }

    // 
    // TRANG TỔNG QUAN
    // 
   function veThongKeTongQuan() {

    let tongKhoaHoc = dsKhoaHocAdmin.length;
    let tongHocVien = dsHocVienAdmin.length;

    let khoaHocHoatDong = 0;
    let doanhThuUocTinh = 0;

    for (let i = 0; i < dsKhoaHocAdmin.length; i++) {

        if (dsKhoaHocAdmin[i].trangThai == "active") {
            khoaHocHoatDong++;
        }

        doanhThuUocTinh += dsKhoaHocAdmin[i].gia * dsKhoaHocAdmin[i].hocVien;
    }

    document.getElementById("overviewStats").innerHTML =
        `<div class="stat-card">
            <div class="stat-card__value">${tongKhoaHoc}</div>
            <div class="stat-card__label">Tổng số khóa học</div>
        </div>

        <div class="stat-card">
            <div class="stat-card__value">${khoaHocHoatDong}</div>
            <div class="stat-card__label">Khóa học đang hoạt động</div>
        </div>

        <div class="stat-card">
            <div class="stat-card__value">${tongHocVien}</div>
            <div class="stat-card__label">Tổng số học viên</div>
        </div>

        <div class="stat-card">
            <div class="stat-card__value">${(doanhThuUocTinh / 1000000).toFixed(1)}tr₫</div>
            <div class="stat-card__label">Doanh thu ước tính</div>
        </div>`;
}

    function veKhoaHocNoiBat() {
        let top3 = dsKhoaHocAdmin.slice().sort(function (a, b) { return b.hocVien - a.hocVien; }).slice(0, 3);

        let hop = document.getElementById("topCoursesList");
        hop.innerHTML = top3.map(function (k) {
            return `
            <div class="progress-row">
                <img src="${k.anh}" alt="${k.ten}">
                <div class="progress-row__info">
                    <div class="progress-row__title">${k.ten}</div>
                    <div class="progress-row__pct"><i class="fa-solid fa-star" style="color:#f5a623;"></i> ${k.rating} · ${k.hocVien.toLocaleString("vi-VN")} học viên</div>
                </div>
                <span class="badge ${k.trangThai === "active" ? "badge--success" : "badge--muted"}">${k.trangThai === "active" ? "Hoạt động" : "Đã ẩn"}</span>
            </div>`;
        }).join("");
    }

    function veHocVienMoi() {
        let moiNhat = dsHocVienAdmin.slice().sort(function (a, b) { return new Date(b.ngayThamGia) - new Date(a.ngayThamGia); }).slice(0, 4);

        let hop = document.getElementById("newStudentsList");
        hop.innerHTML = moiNhat.map(function (hv) {
            let vietTat = hv.hoTen.split(" ").slice(-2).map(function (t) { return t[0]; }).join("").toUpperCase();
            return `
            <div class="progress-row">
                <div class="avatar-ph" style="width:48px;height:48px;border-radius:50%;flex-shrink:0;">${vietTat}</div>
                <div class="progress-row__info">
                    <div class="progress-row__title" style="min-height:0;">${hv.hoTen}</div>
                    <div class="progress-row__pct">${hv.email} · Tham gia ${dinhDangNgay(hv.ngayThamGia)}</div>
                </div>
            </div>`;
        }).join("");
    }

    function veTrangTongQuan() {
        veThongKeTongQuan();
        veKhoaHocNoiBat();
        veHocVienMoi();
    }

    // 
    // QUẢN LÝ KHÓA HỌC — BẢNG + LỌC
    // 
    let oTimKiemKhoaHoc = document.getElementById("courseSearch");
    let oLocDanhMuc = document.getElementById("courseCategoryFilter");
    let oLocTrangThaiKhoaHoc = document.getElementById("courseStatusFilter");
    let thanBangKhoaHoc = document.getElementById("courseTableBody");

    function veBangKhoaHoc() {
        let tuKhoa = oTimKiemKhoaHoc.value.toLowerCase();
        let danhMuc = oLocDanhMuc.value;
        let trangThai = oLocTrangThaiKhoaHoc.value;

        let ketQua = dsKhoaHocAdmin.filter(function (k) {
            let dungTuKhoa = k.ten.toLowerCase().includes(tuKhoa) || k.gv.toLowerCase().includes(tuKhoa);
            let dungDanhMuc = !danhMuc || k.danhMuc === danhMuc;
            let dungTrangThai = !trangThai || k.trangThai === trangThai;
            return dungTuKhoa && dungDanhMuc && dungTrangThai;
        });

        if (ketQua.length === 0) {
            thanBangKhoaHoc.innerHTML = '<tr class="admin-table__empty"><td colspan="7">Không tìm thấy khóa học phù hợp.</td></tr>';
            return;
        }

        thanBangKhoaHoc.innerHTML = ketQua.map(function (k) {
            return `
            <tr data-id="${k.id}">
                <td class="admin-table__title-cell">
                    <div class="admin-table__course">
                        <img src="${k.anh}" alt="${k.ten}">
                        <div>
                            <div class="admin-table__course-name">${k.ten}</div>
                            <div class="admin-table__course-sub">GV: ${k.gv}</div>
                        </div>
                    </div>
                </td>
                <td>${tenDanhMuc(k.danhMuc)}</td>
                <td>${dinhDangTien(k.gia)}</td>
                <td>${k.hocVien.toLocaleString("vi-VN")}</td>
                <td><i class="fa-solid fa-star" style="color:#f5a623;"></i> ${k.rating}</td>
                <td><span class="badge ${k.trangThai === "active" ? "badge--success" : "badge--muted"}">${k.trangThai === "active" ? "Hoạt động" : "Đã ẩn"}</span></td>
                <td>
                    <div class="table-actions">
                        <button type="button" class="table-icon-btn" data-action="toggle-course" title="${k.trangThai === "active" ? "Ẩn khóa học" : "Kích hoạt lại"}">
                            <i class="fa-solid ${k.trangThai === "active" ? "fa-eye-slash" : "fa-eye"}"></i>
                        </button>
                        <button type="button" class="table-icon-btn" data-action="edit-course" title="Sửa">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button type="button" class="table-icon-btn table-icon-btn--danger" data-action="delete-course" title="Xóa">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>`;
        }).join("");
    }

    function ganSuKienLocKhoaHoc() {
        oTimKiemKhoaHoc.addEventListener("input", veBangKhoaHoc);
        oLocDanhMuc.addEventListener("change", veBangKhoaHoc);
        oLocTrangThaiKhoaHoc.addEventListener("change", veBangKhoaHoc);
    }

    // 
    // MODAL THÊM / SỬA KHÓA HỌC
    // 
    let lopPhuModal = document.getElementById("courseModalOverlay");
    let tieuDeModal = document.getElementById("courseModalTitle");
    let formKhoaHoc = document.getElementById("courseForm");

    function moModalKhoaHoc(khoaHoc) {
        if (khoaHoc) {
            tieuDeModal.textContent = "Sửa khóa học";
            document.getElementById("courseId").value = khoaHoc.id;
            document.getElementById("courseTen").value = khoaHoc.ten;
            document.getElementById("courseGv").value = khoaHoc.gv;
            document.getElementById("courseAnh").value = khoaHoc.anh;
            document.getElementById("courseDanhMuc").value = khoaHoc.danhMuc;
            document.getElementById("courseTrinhDo").value = khoaHoc.trinhDo;
            document.getElementById("courseGia").value = khoaHoc.gia;
            document.getElementById("courseTrangThai").value = khoaHoc.trangThai;
        } else {
            tieuDeModal.textContent = "Thêm khóa học";
            formKhoaHoc.reset();
            document.getElementById("courseId").value = "";
            document.getElementById("courseGia").value = 500000;
        }
        lopPhuModal.classList.add("is-open");
    }

    function dongModalKhoaHoc() {
        lopPhuModal.classList.remove("is-open");
    }

    function ganSuKienModalKhoaHoc() {
        document.getElementById("btnAddCourse").addEventListener("click", function () { moModalKhoaHoc(null); });
        document.getElementById("courseModalClose").addEventListener("click", dongModalKhoaHoc);
        document.getElementById("courseModalCancel").addEventListener("click", dongModalKhoaHoc);

        // Bấm ra ngoài modal thì đóng lại
        lopPhuModal.addEventListener("click", function (e) {
            if (e.target === lopPhuModal) dongModalKhoaHoc();
        });

        formKhoaHoc.addEventListener("submit", function (e) {
            e.preventDefault();

            let id = document.getElementById("courseId").value;
            let duLieu = {
                ten: document.getElementById("courseTen").value.trim(),
                gv: document.getElementById("courseGv").value.trim(),
                anh: document.getElementById("courseAnh").value.trim(),
                danhMuc: document.getElementById("courseDanhMuc").value,
                trinhDo: document.getElementById("courseTrinhDo").value,
                gia: Number(document.getElementById("courseGia").value),
                trangThai: document.getElementById("courseTrangThai").value
            };

            if (id) {
                // Sửa khóa học đã có
                let khoaHoc = dsKhoaHocAdmin.find(function (k) { return k.id === Number(id); });
                if (khoaHoc) Object.assign(khoaHoc, duLieu);
            } else {
                // Thêm khóa học mới
                dsKhoaHocAdmin.push(Object.assign({
                    id: idKhoaHocKeTiep++,
                    rating: 5.0,
                    hocVien: 0
                }, duLieu));
            }

            dongModalKhoaHoc();
            veBangKhoaHoc();
            veTrangTongQuan();
        });
    }

    // Bấm vào các nút hành động (sửa / xóa / ẩn) trong bảng khóa học
    function ganSuKienHanhDongKhoaHoc() {
        thanBangKhoaHoc.addEventListener("click", function (e) {
            let nut = e.target.closest("button[data-action]");
            if (!nut) return;

            let dong = nut.closest("tr");
            let id = Number(dong.getAttribute("data-id"));
            let khoaHoc = dsKhoaHocAdmin.find(function (k) { return k.id === id; });
            if (!khoaHoc) return;

            let hanhDong = nut.getAttribute("data-action");

            if (hanhDong === "edit-course") {
                moModalKhoaHoc(khoaHoc);
            } else if (hanhDong === "toggle-course") {
                khoaHoc.trangThai = khoaHoc.trangThai === "active" ? "hidden" : "active";
                veBangKhoaHoc();
                veTrangTongQuan();
            } else if (hanhDong === "delete-course") {
                let dongY = confirm('Bạn có chắc muốn xóa khóa học "' + khoaHoc.ten + '"?');
                if (dongY) {
                    dsKhoaHocAdmin = dsKhoaHocAdmin.filter(function (k) { return k.id !== id; });
                    veBangKhoaHoc();
                    veTrangTongQuan();
                }
            }
        });
    }

    // 
    // QUẢN LÝ HỌC VIÊN — BẢNG + LỌC
    // 
    let oTimKiemHocVien = document.getElementById("studentSearch");
    let oLocTrangThaiHocVien = document.getElementById("studentStatusFilter");
    let thanBangHocVien = document.getElementById("studentTableBody");

    function veBangHocVien() {
        let tuKhoa = oTimKiemHocVien.value.toLowerCase();
        let trangThai = oLocTrangThaiHocVien.value;

        let ketQua = dsHocVienAdmin.filter(function (hv) {
            let dungTuKhoa = hv.hoTen.toLowerCase().includes(tuKhoa) || hv.email.toLowerCase().includes(tuKhoa);
            let dungTrangThai = !trangThai || hv.trangThai === trangThai;
            return dungTuKhoa && dungTrangThai;
        });

        if (ketQua.length === 0) {
            thanBangHocVien.innerHTML = '<tr class="admin-table__empty"><td colspan="6">Không tìm thấy học viên phù hợp.</td></tr>';
            return;
        }

        thanBangHocVien.innerHTML = ketQua.map(function (hv) {
            return `
            <tr data-id="${hv.id}">
                <td>${hv.hoTen}</td>
                <td>${hv.email}</td>
                <td>${dinhDangNgay(hv.ngayThamGia)}</td>
                <td>${hv.soKhoaHoc}</td>
                <td><span class="badge ${hv.trangThai === "active" ? "badge--success" : "badge--danger"}">${hv.trangThai === "active" ? "Hoạt động" : "Đã khóa"}</span></td>
                <td>
                    <div class="table-actions">
                        <button type="button" class="table-icon-btn" data-action="toggle-student" title="${hv.trangThai === "active" ? "Khóa tài khoản" : "Mở khóa"}">
                            <i class="fa-solid ${hv.trangThai === "active" ? "fa-lock" : "fa-lock-open"}"></i>
                        </button>
                        <button type="button" class="table-icon-btn table-icon-btn--danger" data-action="delete-student" title="Xóa">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>`;
        }).join("");
    }

    function ganSuKienLocHocVien() {
        oTimKiemHocVien.addEventListener("input", veBangHocVien);
        oLocTrangThaiHocVien.addEventListener("change", veBangHocVien);
    }

    function ganSuKienHanhDongHocVien() {
        thanBangHocVien.addEventListener("click", function (e) {
            let nut = e.target.closest("button[data-action]");
            if (!nut) return;

            let dong = nut.closest("tr");
            let id = Number(dong.getAttribute("data-id"));
            let hocVien = dsHocVienAdmin.find(function (hv) { return hv.id === id; });
            if (!hocVien) return;

            let hanhDong = nut.getAttribute("data-action");

            if (hanhDong === "toggle-student") {
                hocVien.trangThai = hocVien.trangThai === "active" ? "locked" : "active";
                veBangHocVien();
            } else if (hanhDong === "delete-student") {
                let dongY = confirm('Bạn có chắc muốn xóa học viên "' + hocVien.hoTen + '"?');
                if (dongY) {
                    dsHocVienAdmin = dsHocVienAdmin.filter(function (hv) { return hv.id !== id; });
                    veBangHocVien();
                    veTrangTongQuan();
                }
            }
        });
    }

    // 
    // CHẠY KHI TRANG VỪA TẢI XONG
    // 
    ganSuKienDieuHuong();
    veTrangTongQuan();
    veBangKhoaHoc();
    ganSuKienLocKhoaHoc();
    ganSuKienModalKhoaHoc();
    ganSuKienHanhDongKhoaHoc();
    veBangHocVien();
    ganSuKienLocHocVien();
    ganSuKienHanhDongHocVien();
}
