const renderSVDRL = () => {
    const idKhoa = document.querySelector("#khoa").value;
    const idky = document.querySelector("#kyhoc").value;
    const tensv = document.querySelector("#tensv").value.trim();
    if (!idKhoa || !idky || !tensv) alert("Yêu cầu chọn đầy đủ thông tin thống kê");
    else
      fetch(
        `${HOST}/api/diemrenluyen?idKhoa=${idKhoa}&idky=${idky}&tensv=${tensv}`
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
                    <td>${elm.tongTien}</td>
                </tr>`;
          }
          document.querySelector("#listHocPhiSinhVien").innerHTML = html;
        })
        .catch((err) => console.log("Error: ", err));
  };
  
  const getKhoaTKDRL = () =>
    fetch(`${HOST}/api/khoa/`)
      .then((res) => res.json())
      .then((data) => {
        let html = `<option selected disabled value="">Khoa</option>`;
        data.forEach((elm) => {
          html += `<option value="${elm.idKhoa}">${elm.tenKhoa}</option>`;
        });
        document.querySelectorAll("#khoa").forEach((elm) => {
          elm.innerHTML = html;
        });
      })
      .catch((err) => console.log("Error: ", err));
  
  const getKyTKDRL = () =>
    fetch(`${HOST}/api/kyhoc/`)
      .then((res) => res.json())
      .then((data) => {
        let html = `<option selected disabled value="">Kỳ học</option>`;
        data.forEach((elm) => {
          html += `<option value="${elm.idky}">${elm.tenKyHoc}</option>`;
        });
        document.querySelectorAll("#kyhoc").forEach((elm) => {
          elm.innerHTML = html;
        });
      })
      .catch((err) => console.log("Error: ", err));
  