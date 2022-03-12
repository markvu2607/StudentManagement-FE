const renderLop = () => {
  const tuKhoa = document.querySelector("#searchInput").value;
  fetch(`${HOST}/api/lop/?tenlop=${tuKhoa}`)
    .then((res) => res.json())
    .then((data) => {
      let html = "";
      let i = 1;
      data.forEach((elm) => {
        html += `<tr>
                                <th scope="row" >${i++}</th>
                                <td>${elm.tenLop}</td>
                                <td>${elm.idmh}</td>
                                <td>${elm.phongHoc}</td>
                                <td>${elm.idgv}</td>
                                <td>${elm.soLuong}</td>
                                <td>${formatDate(elm.thoiGianBd)}</td>
                                <td>${formatDate(elm.thoiGianKt)}</td>
                                <td>${
                                  elm.trangThai === "hoatdong"
                                    ? "Active"
                                    : "Inactive"
                                }</td>
                                <td>
                                    <a onClick=LopHoc(${
                                      elm.idLop
                                    }) style="margin-right: 5px;" type="button" data-bs-toggle="modal" data-bs-target="#myModal">
                                        <i class="fa-solid fa-wrench"></i>
                                    </a>
                                    <a type="button" data-bs-toggle="modal" data-bs-target="#myModal3"><i class="fa-solid fa-ban"></i>
                                    </a>
                                </td>
                            </tr>`;
      });

      document.querySelector("#listLop").innerHTML = html;
    })
    .catch((err) => console.log("Error: ", err));
};

const LopHoc = (id) => {
  fetch(`${HOST}/api/lop/${id}`)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("#formUpdate #maLop").value = data.idLop;
      document.querySelector("#formUpdate #tenLop").value = data.tenLop;
      document.querySelector("#formUpdate #tenMonHoc").value = data.idmh;
      document.querySelector("#formUpdate #phongHoc").value = data.phongHoc;
      document.querySelector("#formUpdate #tenGiangVien").value = data.idgv;
      document.querySelector("#formUpdate #soLuong").value = data.soLuong;
      document.querySelector("#formUpdate #thoiGianBatDau").value = formatDate(
        data.thoiGianBd
      );
      document.querySelector("#formUpdate #thoiGianKetThuc").value = formatDate(
        data.thoiGianKt
      );
    });
};
