const renderSVDRL = () => {
  const idKhoa = document.querySelector("#khoa").value;
  const idky = document.querySelector("#kyhoc").value;
  if (!idKhoa || !idky) alert("Yêu cầu chọn đầy đủ thông tin thống kê");
  else
    fetch(`${HOST}/api/diemrenluyen?idKhoa=${idKhoa}&idky=${idky}`)
      .then((res) => res.json())
      .then((data) => {
        let html = "";
        for (i = 0; i < data.length; i++) {
          elm = data[i];
          html += `<tr>
                    <th scope="row">${i + 1}</th>
                    <td>${elm.idsv}</td>
                    <td>${elm.tensv}</td>
                    <td>${elm.tenKhoa}</td>
                    <td>${elm.tenKyHoc}</td>
                    <td>${elm.tongTien}</td>
                </tr>`;
        }
        document.querySelector("#listHocPhiSinhVien").innerHTML = html;
      })
      .catch((err) => console.log("Error: ", err));
};
