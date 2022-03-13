const renderLop = () => {
  const tuKhoa = document.querySelector("#tenLop").value.trim();
  const idky = document.querySelector("#kyHocLop").value;
  console.log(tuKhoa, idky);
  fetch(`${HOST}/api/lophocphan/?tenlop=${tuKhoa}&idky=${idky}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let html = "";
      for (i = 0; i < data.length; i++) {
        elm = data[i];
        html += `<tr>
          <th scope="row" >${i + 1}</th>
          <td>${elm.tenLop}</td>
          <td>${elm.tenKyHoc}</td>
          <td >${elm.trangThai === "hoatdong" ? "Hoạt Động" : "Tạm Dừng"}</td>
          <td>
              <a onClick=LopHoc(${
                elm.idLop
              }) style="margin-right: 5px;" type="button" data-bs-toggle="modal" data-bs-target="#myModalUpdate">
                  <i class="fa-solid fa-wrench"></i>
              </a>
              <a onClick=viewLopHoc(${
                elm.idLop
              })   style="margin-right: 5px;" type="button" data-bs-toggle="modal" data-bs-target="#myModalView"><i class="fa-solid fa-eye"></i>
              </a>

              <a onclick=deleteLopHoc(${
                elm.idLop
              }) type="button"><i class="fa-solid fa-ban"></i>
              </a>
          </td>
      </tr>`;
      }
      document.querySelector("#listLop").innerHTML = html;
    })
    .catch((err) => console.log("Error: ", err));
};

const LopHoc = (id) => {
  fetch(`${HOST}/api/lophocphan/${id}`)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("#formUpdate #maLop").value = data.idLop;
      document.querySelector("#formUpdate #tenLop").value = data.tenLop;
      document.querySelector("#formUpdate #tenMonHoc").value = data.idmh;
      document.querySelector("#formUpdate #phongHoc").value = data.phongHoc;
      document.querySelector("#formUpdate #kyHocLop").value = data.idky;

      document.querySelector("#formUpdate #tenGiangVien").value = data.idgv;
      document.querySelector("#formUpdate #soLuong").value = data.soLuong;
      document.querySelector("#formUpdate #thoiGianBatDau").value = formatDate(
        data.thoiGianBd
      );
      document.querySelector("#formUpdate #thoiGianKetThuc").value = formatDate(
        data.thoiGianKt
      );
      document.querySelector("#formUpdate #trangThai").value = data.trangThai;
    });
};

const viewLopHoc = (id) => {
  fetch(`${HOST}/api/lophocphan/${id}`)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("#formView #tenLop").value = data.tenLop;
      document.querySelector("#formView #tenMonHoc").value = data.idmh;
      document.querySelector("#formView #phongHoc").value = data.phongHoc;
      document.querySelector("#formView #kyHocLop").value = data.idky;

      document.querySelector("#formView #tenGiangVien").value = data.idgv;
      document.querySelector("#formView #soLuong").value = data.soLuong;
      document.querySelector("#formView #thoiGianBatDau").value = formatDate(
        data.thoiGianBd
      );
      document.querySelector("#formView #thoiGianKetThuc").value = formatDate(
        data.thoiGianKt
      );
      document.querySelector("#formView #trangThai").value = data.trangThai;
    });
};

const getKyLopHoc = () =>
  fetch(`${HOST}/api/kyhoc/`)
    .then((res) => res.json())
    .then((data) => {
      let html = `<option selected disabled value="">--Chọn Kỳ Học--</option>`;
      data.forEach((elm) => {
        html += `<option value="${elm.idky}">${elm.tenKyHoc}</option>`;
      });
      document.querySelectorAll("#kyHocLop").forEach((elm) => {
        elm.innerHTML = html;
      });
    })
    .catch((err) => console.log("Error: ", err));

const getMonLopHoc = () => {
  fetch(`${HOST}/api/monhoc/`)
    .then((res) => res.json())
    .then((data) => {
      let html = `<option selected disabled value="">--Chọn Môn Học--</option>`;
      data.forEach((elm) => {
        html += `<option value="${elm.idmh}">${elm.tenMon}</option>`;
      });
      document.querySelectorAll("#tenMonHoc").forEach((elm) => {
        elm.innerHTML = html;
      });
    })
    .catch((err) => console.log("Error: ", err));
};

const getGVLopHoc = () => {
  fetch(`${HOST}/api/giangvien/`)
    .then((res) => res.json())
    .then((data) => {
      let html = `<option selected disabled value="">-- Chọn Giảng Viên --</option>`;
      data.forEach((elm) => {
        html += `<option value="${elm.idgv}">${elm.tengv}</option>`;
      });
      document.querySelectorAll("#tenGiangVien").forEach((elm) => {
        elm.innerHTML = html;
      });
    })
    .catch((err) => console.log("Error: ", err));
};

const deleteLopHoc = (id) => {
  fetch(`${HOST}/api/lophocphan/${id}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.trangThai === "tamdung") {
        alert("lớp học này đã tạm dừng");
      } else {
        result = window.confirm("bạn có muốn xoá không?");
        if (result === true) {
          fetch(`${HOST}/api/lophocphan/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            // body: JSON.stringify({
            //   trangthai: "tamdung",
            // }),
          })
            .then(() => {
              alert("Xoá thành công");
              renderLop(id);
            })
            .catch((err) => {
              console.error(err);
            });
        }
      }
    });
};
