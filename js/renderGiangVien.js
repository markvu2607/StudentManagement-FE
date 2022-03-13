//QUẢN LÝ ĐIỂM
const renderQLDiem = () => {
  $(".main").load("./Quanlydiem");
};
const renderLophocphan = () => {
  $(".main").load("./Quanlydiem/lophocphan.html");
};

//QUẢN LÝ LỚP HỌC
const renderQLLophoc = () => {
  $(".main").load("./Quanlylophoc");
};
const renderDiemdanh = () => {
  $(".main").load("./Quanlylophoc/diemdanh.html");
};
const renderChitietdiemdanh = () => {
  $(".main").load("./Quanlylophoc/chitietdiemdanh.html");
};
const renderTailieumonhoc = () => {
  $(".main").load("./Quanlylophoc/tailieumonhoc.html");
};

// DANH SÁCH SINH VIÊN
const renderDSsinhvien = () => {
  $(".main").load("./Danhsachsinhvien");
};
const renderChitietdssinhvien = () => {
  $(".main").load("./Danhsachsinhvien/chitietdanhsachsinhvien.html");
};

//THỐNG KÊ ĐIỂM
const renderThongkediem = () => {
  $(".main").load("./Thongkediem");
};
