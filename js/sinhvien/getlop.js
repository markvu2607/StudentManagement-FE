const renderLopHoc = () => {
  fetch(`${HOST}/api/lophocphan/`)
    .then((res) => res.json())
    .then((data) => {
      let html = "";
      for (i = 0; i < data.length; i++) {
        elm = data[i];
        html += `
        <tr>
        <td>${i + 1}</td>
        <td>${elm.tenLop}</td>
        <td>
            <a style="margin-right: 5px;" type="button" onclick="renderDiemdanh(${
              elm.idLop
            })">
                <i class="fa-solid fa-eye"></i>
            </a>
        </td>
        <td>
            <a style="margin-right: 5px;" type="button" onclick="renderTailieumonhoc()">
                <i class="fa-solid fa-eye"></i>
            </a>
        </td>
        </tr>
        `;
      }
      document.querySelectorAll("#getLopHoc").forEach((elm) => {
        elm.innerHTML = html;
      });
    })
    .catch((err) => console.log("Error: ", err));
};

const renderDiemdanh = (id) => {
  let idLop = id;
  fetch(`${HOST}/api/diemdanh?idLop=${idLop}`)
    .then((res) => res.json())
    .then((data) => {
      let html = "";
      for (i = 0; i < data.length; i++) {
        elm = data[i];
        html += `<tr>
        <td>${i + 1}</td>
        <td>${formatDatetime(elm.thoiGianBd)}</td>
        <td>${formatDatetime(elm.thoiGianKt)}</td>
        <td>${
          elm.trangThai === "vang"
            ? "Vắng mặt"
            : elm.trangThai === "muon"
            ? "Muộn"
            : "Có Mặt"
        }</td>
        <th>
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="switchDiemDanh" onclick="updateDiemDanh(elm.idDiemDanh)">
            </div>
        </th>
      </tr>
      `;
      }
      document.querySelectorAll("#listDiemDanh").forEach((elm) => {
        elm.innerHTML = html;
      });
    })
    .catch((err) => console.log("Error: ", err));
  $(".main").load("./lophoc/diemdanh.html");
};

const updateDiemDanh = (id) => {
  let idDiemDanh = id;
  console.log(idDiemDanh);
};
