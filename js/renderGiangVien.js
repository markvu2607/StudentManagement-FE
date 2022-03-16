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
      console.log(data)
      if (data.length > 0 && data[0].trangThai === "hoatdong") {
        let html = `<div class="row text-center py-3">
<h3 id="tenLop">${data[0].tenLop}</h3>
</div>
<div style="background-color: #f5f5f5; border-radius: 7px; border: 1px solid black; margin-top: 50px !important;">
<table class="table table-hover mt-5 " style="margin-top: 5px !important;">
  <thead>
      <tr>
          <th scope="col">STT</th>
          <th scope="col">MSV</th>
          <th scope="col">Họ và tên</th>
          <th scope="col">Khoa</th>
      </tr>
  </thead>
    <tbody id="listSinhVien">`;
        for (i = 0; i < data.length; i++) {
          elm = data[i];
          html += `<tr>
        <th>${i + 1}</th>
        <th>${elm.idsv}</th>
        <th>${elm.tensv}</th>
        <th>${elm.tenKhoa}</th>
    </tr>`;
        }
        html += `
  </tbody>
</table>
</div>`;
        console.log(html);
        document.querySelector("#main").innerHTML = html;
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
                          <a onClick="renderChiTieLop(${elm.idLop})" style="margin-right: 5px;" type="button">
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
