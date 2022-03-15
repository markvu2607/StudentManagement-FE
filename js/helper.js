const getKhoa = () =>
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

const getKy = () =>
  fetch(`${HOST}/api/kyhoc/`)
    .then((res) => res.json())
    .then((data) => {
      let html = `<option selected disabled value="">Kỳ học</option>`;
      for (i = 0; i < data.length; i++) {
        elm = data[i];
        html += `<option value="${elm.idky}">${elm.tenKyHoc}</option>`;
      }
      document.querySelectorAll("#kyHoc").forEach((elm) => {
        elm.innerHTML = html;
      });
    })
    .catch((err) => console.log("Error: ", err));

const getMonHoc = () => {
  fetch(`${HOST}/api/monhoc/`)
    .then((res) => res.json())
    .then((data) => {
      let html = `<option selected disabled value="">Môn học</option>`;
      for (i = 0; i < data.length; i++) {
        elm = data[i];
        html += `<option value="${elm.idmh}">${elm.tenMon}</option>`;
      }
      document.querySelectorAll("#monhoc").forEach((elm) => {
        elm.innerHTML = html;
      });
    })
    .catch((err) => console.log("Error: ", err));
};

const getGV = () => {
  fetch(`${HOST}/api/giangvien/`)
    .then((res) => res.json())
    .then((data) => {
      let html = `<option selected disabled value="">Giảng viên</option>`;
      for (i = 0; i < data.length; i++) {
        elm = data[i];
        html += `<option value="${elm.idgv}">${elm.tengv}</option>`;
      }
      document.querySelectorAll("#tenGiangVien").forEach((elm) => {
        elm.innerHTML = html;
      });
    })
    .catch((err) => console.log("Error: ", err));
};