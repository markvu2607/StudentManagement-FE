const quanLyTaiKhoan = () =>
  fetch(`${HOST}/api/taikhoan/`)
    .then((res) => res.json())
    .then((data) => {
      let html = "";
      let i = 1;
      data.forEach((elm) => {
        html += `<tr>
                            <th scope="row">${i++}</th>
                            <th >${elm.idtk}</th>
                            <td>${elm.tenDangNhap}</td>
                            <td>
                                <a  onclick=TaiKhoan(${
                                  elm.idtk
                                }) style="margin-right: 5px;" type="button" data-bs-toggle="modal" data-bs-target="#myModaldata">
                                     <i
                                        class="fa-solid fa-wrench"></i>
                                   
                                    </i>
                                </a>
                                <a type="button" data-bs-toggle="modal" data-bs-target="#myModal3">
                                    <i class="fa-solid fa-ban"></i>
                                   
                                    </i>
                                </a>
                            </td>
                        </tr>`;
      });

      document.querySelector("#listTaiKhoan").innerHTML = html;
    })
    .catch((err) => console.log("Error: ", err));

const TaiKhoan = (id) => {
  fetch(`${HOST}/api/taikhoan/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector(".modal-body #maTaiKhoan").value = data.idtk;
      document.querySelector(".modal-body #tenDangNhap").value =
        data.tenDangNhap;
      document.querySelector(".modal-body #matKhau").value = data.matKhau;
      // document.querySelector(".modal-body #chucnang").value = data.chucNang
      // document.querySelector(".modal-body #trangthai").value = data.trangThai
    });
};
