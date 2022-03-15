const renderSVHB = () => {
  const idKhoa = document.querySelector("#khoa").value;
  const idky = document.querySelector("#kyhoc").value;
  if (!idKhoa || !idky) alert("Yêu cầu chọn đầy đủ thông tin thống kê");
  else
    fetch(
      `${HOST}/api/sinhvien/thongke/hocbong?idKhoa=${idKhoa}&idky=${idky}&gioiHan=`
    )
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
                <td>${elm.DiemRenLuyen}</td>
                <td>${elm.DiemTichLuy}</td>
            </tr>`;
        }
        document.querySelector("#listHocBong").innerHTML = html;
      })
      .catch((err) => console.log("Error: ", err));
};
