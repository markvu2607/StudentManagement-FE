const renderSVHB = () => {
  const idKhoa = document.querySelector("#khoa").value;
  const idky = document.querySelector("#kyhoc").value;
  fetch(
    `${HOST}/api/sinhvien/thongke/hocbong?idKhoa=${idKhoa}&idky=${idky}&gioiHan=`
  )
    .then((res) => res.json())
    .then((data) => {
      let html = "";
      for (i = 0; i < data.length; i++) {
        elm = data[i];
        html += `<tr>
                <th scope="row">${i}</th>
                <td>${elm.idsv}</td>
                <td>${elm.tensv} Chí hihi</td>
                <td>${elm.tenKhoa}</td>
                <td>${elm.tenKyHoc}</td>
                <td>${elm.DiemRenLuyen}</td>
                <td>${elm.DiemTichLuy}</td>
            </tr>`;
      }
      document.querySelector("#listHocBong").innerHTML = html;
    })
    .catch((err) => console.log("Error: ", err));
};

const getKhoaTKHB = () =>
  fetch(`${HOST}/api/khoa/`)
    .then((res) => res.json())
    .then((data) => {
      let html = `<option selected disabled value="">--Chọn Khoa--</option>`;
      data.forEach((elm) => {
        html += `<option value="${elm.idKhoa}">${elm.tenKhoa}</option>`;
      });
      document.querySelectorAll("#khoa").forEach((elm) => {
        elm.innerHTML = html;
      });
    })
    .catch((err) => console.log("Error: ", err));

const getKyTKHB = () =>
  fetch(`${HOST}/api/kyhoc/`)
    .then((res) => res.json())
    .then((data) => {
      let html = `<option selected disabled value="">--Chọn Kỳ Học--</option>`;
      data.forEach((elm) => {
        html += `<option value="${elm.idky}">${elm.tenKyHoc}</option>`;
      });
      document.querySelectorAll("#kyhoc").forEach((elm) => {
        elm.innerHTML = html;
      });
    })
    .catch((err) => console.log("Error: ", err));
