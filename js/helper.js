const getCbbKhoa = () =>
  fetch(`${HOST}/api/khoa/`)
    .then((res) => res.json())
    .then((data) => {
      let html = `<option selected disabled value="">Khoa</option>`;
      for (i = 0; i < data.length; i++) {
        elm = data[i];
        html += `<option value="${elm.idKhoa}">${elm.tenKhoa}</option>`;
      }
      document.querySelectorAll("#khoa").forEach((elm) => {
        elm.innerHTML = html;
      });
    })
    .catch((err) => console.log("Error: ", err));

const getCbbKy = () =>
  fetch(`${HOST}/api/kyhoc/`)
    .then((res) => res.json())
    .then((data) => {
      let html = `<option selected disabled value="">Kỳ học</option>`;
      for (i = 0; i < data.length; i++) {
        elm = data[i];
        html += `<option value="${elm.idky}">${elm.tenKyHoc}</option>`;
      }
      document.querySelectorAll("#kyhoc").forEach((elm) => {
        elm.innerHTML = html;
      });
    })
    .catch((err) => console.log("Error: ", err));

