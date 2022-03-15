//QUẢN LÝ ĐIỂM
const renderQLDiem = () => {
  $(".main").load("./quanlydiem/");
};
const renderLophocphan = () => {
  $(".main").load("./quanlydiem/lophocphan.html");
};

//QUẢN LÝ LỚP HỌC
const renderQLLophoc = () => {
  $(".main").load("./quanlylophoc/");
};
const renderDiemdanh = () => {
  $(".main").load("./quanlylophoc/diemdanh.html");
};
const renderChitietdiemdanh = () => {
  $(".main").load("./quanlylophoc/chitietdiemdanh.html");
};
const renderTailieumonhoc = () => {
  $(".main").load("./quanlylophoc/tailieumonhoc.html");
};

// DANH SÁCH SINH VIÊN
const renderDSsinhvien = () => {
  $(".main").load("./quanlysinhvien/");
};
const renderChitietdssinhvien = () => {
  $(".main").load("./quanlysinhvien/chitietdanhsachsinhvien.html");
};

//THỐNG KÊ ĐIỂM
const renderThongkediem = () => {
  $(".main").load("../quantrivien/thongke/diem.html");
};