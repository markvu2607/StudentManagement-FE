const renderSVTKD = () => {
  const tenLop = document.querySelector("#tenLop").value.trim();
  const idky = document.querySelector("#kyHoc").value;
  if (!idky) alert("Yêu cầu chọn đầy đủ thông tin thống kê");
  else
    fetch(`${HOST}/api/diem?tenlop=${tenLop}&idky=${idky}`)
      .then((res) => res.json())
      .then((data) => {
        let html = "";
        for (i = 0; i < data.length; i++) {
          elm = data[i];
          html += `<tr>
                  <th scope="row">${i + 1}</th>
                  <td>${elm.idsv}</td>
                  <td>${elm.tensv}</td>
                  <td>${elm.tenLop}</td>
                  <td>${elm.diemQuaTrinh}</td>
                  <td>${elm.diemThi}</td>
                  <td>${elm.diemTrungBinh}</td>
                  <td>${elm.diemHeSo4}</td>
              </tr>`;
        }
        document.querySelector("#listDiemTheoLop").innerHTML = html;
      })
      .catch((err) => console.log("Error: ", err));
};
