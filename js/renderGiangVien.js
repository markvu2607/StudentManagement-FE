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

const renderChiTieLop = (idLop) => {
  fetch(`${HOST}/api/sinhvien/thongke/${idLop}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.length > 0 && data[0].trangThai === "hoatdong") {
        $(".main").load(
          "./quanlysinhvien/chitietdanhsachsinhvien.html",
          function () {
            document.querySelector("#tenLop").innerHTML = data[0].tenLop;
            html = "";
            for (i = 0; i < data.length; i++) {
              elm = data[i];
              html += `<tr>
  <th>${i + 1}</th>
  <th>${elm.idsv}</th>
  <th>${elm.tensv}</th>
  <th>${elm.tenKhoa}</th>
</tr>`;
            }
            console.log(html);
            document.querySelector("#listSinhVien").innerHTML = html;
          }
        );
      } else if (data.length > 0 && data[0].trangThai === "tamdung")
        alert("Lớp học phần này đã tạm dừng");
      else alert("Lớp học phần này đang trống");
    })
    .catch((err) => console.log("Error: ", err));
};

const renderDanhSachLop = () => {
  const tenlop = document.querySelector("#tenLop").value;
  const kyHoc = document.querySelector("#kyHoc").value;
  fetch(`${HOST}/api/lophocphan?tenlop=${tenlop}&idky=${kyHoc}&idgv=1`)
    .then((res) => res.json())
    .then((data) => {
      let html = "";
      for (i = 0; i < data.length; i++) {
        elm = data[i];
        html += `<tr>
                      <th scope="row">${i + 1}</th>
                      <td>${elm.tenLop}</td>
                      <td>${elm.tenKyHoc}</td>
                      <td>
                          <a onClick="renderChiTieLop(${
                            elm.idLop
                          })" style="margin-right: 5px;" type="button">
                              <i class="fa-solid fa-eye"></i>
                          </a>
                      </td>
                  </tr>`;
      }
      document.querySelector("#listLop").innerHTML = html;
    })
    .catch((err) => console.log("Error: ", err));
};

//THỐNG KÊ ĐIỂM
const renderThongkediem = () => {
  $(".main").load("../quantrivien/thongke/diem.html");
};
