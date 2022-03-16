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

const renderDanhSachLopQLLH = () => {
  const tenlop = document.querySelector("#tenLop").value;
  const kyHoc = document.querySelector("#kyHoc").value;
  fetch(`${HOST}/api/lophocphan?tenlop=${tenlop}&idky=${kyHoc}&idgv=1`)
    .then((res) => res.json())
    .then((data) => {
      let html = "";
      for (i = 0; i < data.length; i++) {
        elm = data[i];
        html += `<tr>
        <th>${i + 1}</th>
        <th>${elm.tenLop}</th>
        <th>${elm.tenKyHoc}</th>
        <td>
            <a style="margin-right: 5px;" type="button" onclick="renderTailieumonhoc(${
              elm.idLop
            })">
                <i class="fa-solid fa-eye"></i>
            </a>
        </td>
        <td>
            <a style="margin-right: 5px;" type="button" onclick="renderDiemdanh(${
              elm.idLop
            })">
                <i class="fa-solid fa-eye"></i>
            </a>
        </td>
      </tr>`;
      }
      document.querySelector("#listLop").innerHTML = html;
    })
    .catch((err) => console.log("Error: ", err));
};

const renderDiemdanh = (idLop) => {
  $(".main").load("./quanlylophoc/diemdanh.html", function () {
    fetch(`${HOST}/api/diemdanh?idLop=${idLop}`)
      .then((res) => res.json())
      .then((data) => {
        document.querySelector("#myModalAdd #idLop").value = idLop;
        document.querySelector("#myModalUpdate #idLop").value = idLop;
        fetch(`${HOST}/api/lophocphan/${idLop}`)
          .then((res) => res.json())
          .then((data) => {
            document.querySelector("#tenLop").innerHTML = data.tenLop;
          })
          .catch((err) => console.log("Error: ", err));
        html = "";
        for (i = 0; i < data.length; i++) {
          elm = data[i];
          html += `<tr>
              <th>${i + 1}</th>
              <th>${formatDatetime(elm.thoiGianBd)}</th>
              <th>${formatDatetime(elm.thoiGianKt)}</th>
              <td>
                  <a style="margin-right: 5px;" type="button" onclick="renderChitietdiemdanh(${
                    elm.idDiemDanh
                  }, ${idLop})">
                      <i class="fa-solid fa-eye"></i>
                  </a>
                  <a style="margin-right: 5px;" type="button" data-bs-toggle="modal" data-bs-target="#myModalUpdate" data-idDiemDanh="${idDiemDanh}">
                      <i class="fa-solid fa-wrench"></i>
                  </a>
              </td>
          </tr>`;
        }
        document.querySelector("#listDiemDanh").innerHTML = html;
      })
      .catch((err) => console.log("Error: ", err));
  });
};

const addDiemDanh = () => {
  let thoiGianBd = document.querySelector("#myModalAdd #thoiGianBd").value;
  let thoiGianKt = document.querySelector("#myModalAdd #thoiGianKt").value;
  let idLop = document.querySelector("#myModalAdd #idLop").value;
  if (!thoiGianBd) {
    alert("Thời gian bắt đầu không được bỏ trống");
  } else if (!thoiGianKt) {
    alert("Thời gian kết thúc không được bỏ trống");
  } else if ((thoiGianBd, thoiGianKt, idLop))
    fetch(`${HOST}/api/diemdanh/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        thoiGianBd: thoiGianBd,
        thoiGianKt: thoiGianKt,
        idLop: idLop,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else {
          alert("Thành công");
          renderDiemdanh(idLop);
          document.querySelector("#myModalAdd .btn-close").click();
        }
      })
      .catch((err) => console.log("Error: ", err));
  else {
    alert("Lỗi trong quá trình thêm điểm danh");
  }
};

const updateDiemDanh = () => {
  let thoiGianBd = document.querySelector("#myModalUpdate #thoiGianBd").value;
  let thoiGianKt = document.querySelector("#myModalUpdate #thoiGianKt").value;
  let idLop = document.querySelector("#myModalUpdate #idLop").value;
  if (!thoiGianBd) {
    alert("Thời gian bắt đầu không được bỏ trống");
  } else if (!thoiGianKt) {
    alert("Thời gian kết thúc không được bỏ trống");
  } else if ((thoiGianBd, thoiGianKt, idLop))
    fetch(`${HOST}/api/diemdanh/${idDiemDanh}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        thoiGianBd: thoiGianBd,
        thoiGianKt: thoiGianKt,
        idLop: idLop,
      }),

    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.message) {
          alert(data.message);
        } else {
          alert("Thành công");
          renderDiemdanh(idLop);
          document.querySelector("#myModalUpdate .btn-close").click();
        }
      })
      .catch((err) => console.log("Error: ", err));
  else {
    alert("Lỗi trong quá trình cập nhật điểm danh");
  }
};

const renderChitietdiemdanh = (idDiemDanh, idLop) => {
  $(".main").load("./quanlylophoc/chitietdiemdanh.html", function () {
    fetch(`${HOST}/api/diemdanh/chitiet/${idDiemDanh}`)
      .then((res) => res.json())
      .then((data) => {
        fetch(`${HOST}/api/lophocphan/${idLop}`)
          .then((res) => res.json())
          .then((data) => {
            document.querySelector("#tenLop").innerHTML = data.tenLop;
          })
          .catch((err) => console.log("Error: ", err));
        html = "";
        for (i = 0; i < data.length; i++) {
          elm = data[i];
          html += `<tr>
              <th>${i + 1}</th>
              <th>${elm.idsv}</th>
              <th>${elm.tensv}</th>
              <th>${
                elm.trangThai === "vang"
                  ? "Vắng"
                  : elm.trangThai === "muon"
                  ? "Muộn"
                  : "Có Mặt"
              }</th>
          </tr>`;
        }
        document.querySelector("#listSinhVienDD").innerHTML = html;
      })
      .catch((err) => console.log("Error: ", err));
  });
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
            document.querySelector("#listSinhVien").innerHTML = html;
          }
        );
      } else if (data.length > 0 && data[0].trangThai === "tamdung")
        alert("Lớp học phần này đã tạm dừng");
      else alert("Lớp học phần này đang trống");
    })
    .catch((err) => console.log("Error: ", err));
};

const renderDanhSachLopTKSV = () => {
  const tenlop = document.querySelector("#tenLop").value;
  const kyHoc = document.querySelector("#kyHoc").value;
  fetch(`${HOST}/api/lophocphan?tenlop=${tenlop}&idky=${kyHoc}&idgv=2`)
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
