//LỚP HỌC
const renderLophoc = () => {
  $(".main").load("./lophoc");
};

const renderTailieumonhoc = () => {
  $(".main").load("./lophoc/tailieumonhoc.html");
};

//QUẢN LÝ HỌC PHẦN
const renderQLhocphan = () => {
  $(".main").load("./quanlyhocphan");
};
const renderDangkyhoc = () => {
  $(".main").load("./quanlyhocphan/dangkyhoc.html");
};
const renderKetquadangky = () => {
  $(".main").load("./quanlyhocphan/ketquadangky.html");
};

//TRA CỨU HỌC PHÍ
const renderTracuuhocphi = () => {
  $(".main").load("./tracuuhocphi.html");
};
const getLichThiSV = () => {
  const idky = document.querySelector("#kyHoc").value;
  const idsv = JSON.parse(localStorage.getItem("user")).idsv
  alert(idky + " | " +idsv)
  fetch(`${HOST}/api/lichthi?idsv=${idsv}&idky=${idky}`)
      .then((res) => res.json())
      .then((data) => {
        let html = "";
        for (i = 0; i < data.length; i++) {
          elm = data[i];
          html += `<tr>
          <td>${i+1}</td>
          <td>${elm.tenKyHoc}</td>
          <td>${elm.tenmh}</td>
          <td>${elm.sbd}</td>
          <td>${elm.phongThi}</td>
          <td>${elm.thoiGian}</td>
      </tr>`;
        }
        document.querySelector("#listLichThi").innerHTML = html;
      })
      .catch((err) => console.log("Error: ", err));
};

const renderTracuulichthi = () => {
  $(".main").load("./tracuulichthi.html");
};
