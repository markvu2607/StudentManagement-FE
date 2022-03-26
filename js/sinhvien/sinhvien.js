const renderLopHoc = () => {
  let idsv = JSON.parse(localStorage.getItem("user")).idsv;

  fetch(`${HOST}/api/sinhvien/thongke/dadangkyhoc?idsv=${idsv}`)
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
                elm.idlop
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
          <td>${formatDate(elm.thoiGianBd)}</td>
          <td>${formatDate(elm.thoiGianKt)}</td>
          <td>
            ${
              elm.trangThai === "vang"
                ? "Vắng"
                : elm.trangThai === "muon"
                ? "Muộn"
                : "Có Mặt"
            } 
          </td>
          <th>
          <button type="button" class="btn btn-success" style="" onclick="updateDiemDanh(${
            elm.idDiemDanh
          })" 
          >Điểm Danh</button>
              </th>
          </tr>
        `;
      }
      document.querySelectorAll("#listDiemDanh").forEach((elm) => {
        elm.innerHTML = html;
      });
      document.getElementById("idLop").value = idLop;
    })
    .catch((err) => console.log("Error: ", err));
  $(".main").load("./lophoc/diemdanh.html");
};

const updateDiemDanh = (id) => {
  const idsv = JSON.parse(localStorage.getItem("user")).idsv;
  const idDiemDanh = id;
  idLop = document.getElementById("idLop").value;
  fetch(`${HOST}/api/diemdanh/sinhvien/${idsv}`, {
    method: "PUT", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ idDiemDanh: idDiemDanh }),
  })
    .then((response) => response.json())
    .then((data) => {
      renderDiemdanh(idLop);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
