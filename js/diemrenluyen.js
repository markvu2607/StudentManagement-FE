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