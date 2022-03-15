const renderDiemRenLuyen = () => {
  const inputName = document.querySelector("#inputName").value
  const inputKhoa = document.querySelector("#khoa").value
  const inputKyHoc = document.querySelector("#kyHoc").value
  fetch(`${HOST}/api/diemrenluyen/?idKhoa=${inputKhoa}&idky=${inputKyHoc}&tensv=${inputName}`)
    .then(res => res.json())
    .then(data => {
      let html = "";
      let i = 0;
      data.forEach((elm) => {
        html += `<tr>
                    <th scope="row">${i + 1}</th>
                    <td>${elm.idsv}</td>
                    <td>${elm.tensv}</td>
                    <td>${elm.tenKhoa}</td>
                    <td>${elm.tenKyHoc}</td>
                    <td>${elm.diem}</td>
                </tr>`;
      });

      document.querySelector("#ListDiemRenLuyen").innerHTML = html;
    })
    .catch((err) => console.log("Error: ", err));
};

const getSinhVien = () => {
  fetch(`${HOST}/api/sinhvien`)
    .then(res => res.json())
    .then(data => {
      let html = "";
      data.forEach((elm) => {
        html += `<option value="${elm.idsv}-${elm.tensv}"/>`;
      });

      document.querySelector("#datalistSinhVien").innerHTML = html;
    })
    .catch((err) => console.log("Error: ", err));
}

const getKhoaQLDiemRenLuyen = () =>
  fetch(`${HOST}/api/khoa/`)
    .then((res) => res.json())
    .then((data) => {
      let html = `<option selected value="">Khoa</option>`;
      for (i = 0; i < data.length; i++) {
        elm = data[i];
        html += `<option value="${elm.idKhoa}">${elm.tenKhoa}</option>`;
      }
      document.querySelectorAll("#khoa").forEach((elm) => {
        elm.innerHTML = html;
      });
    })
    .catch((err) => console.log("Error: ", err));

const getKyQLDiemRenLuyen = () =>
  fetch(`${HOST}/api/kyhoc/`)
    .then((res) => res.json())
    .then((data) => {
      let html = `<option selected value="">Kỳ học</option>`;
      for (i = 0; i < data.length; i++) {
        elm = data[i];
        html += `<option value="${elm.idky}">${elm.tenKyHoc}</option>`;
      }
      document.querySelectorAll("#kyHoc").forEach((elm) => {
        elm.innerHTML = html;
      });
    })
    .catch((err) => console.log("Error: ", err));