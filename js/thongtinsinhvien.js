const renderSV = () => {
  const keyword = document.querySelector("#searchInput").value;
  fetch(`${HOST}/api/sinhvien/?tukhoa=${keyword}`)
    .then((res) => res.json())
    .then((data) => {
      let html = "";
      let i = 1;
      data.forEach((elm) => {
        html += `<tr>
                        <th scope="row">${i++}</th>
                        <td>${elm.tensv}</td>
                        <td>${formatDate(elm.ngaySinh)}</td>
                        <td>${elm.laNam === 1 ? "Nam" : "Nữ"}</td>
                        <td>${elm.kyTucXa === 1 ? "Có" : "Không"}</td>
                        <td>${elm.queQuan}</td>
                        <td>${elm.sdt}</td>
                        <td>${elm.cccd}</td>
                        <td>${elm.tenBo}</td>
                        <td>${elm.ngheNghiepBo}</td>
                        <td>${elm.sdtBo}</td>
                        <td>${elm.namSinhBo}</td>
                        <td>${elm.tenMe}</td>
                        <td>${elm.ngheNghiepMe}</td>
                        <td>${elm.sdtMe}</td>
                        <td>${elm.namSinhMe}</td>
                        <td>
                            <a onclick="openUpdateSV(${
                              elm.idsv
                            })" style="margin-right: 5px;" type="button" data-bs-toggle="modal" data-bs-target="#myModalUpdate"><i
                                    class="fa-solid fa-wrench"></i>
                            </a>

                            <a type="button" data-bs-toggle="modal" data-bs-target="#myModal3"><i class="fa-solid fa-eye"></i>
                                <div class="modal" id="myModal3">
                                    <div class="modal-dialog modal-dialog-centered" style="max-width: 800px !important">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h4 class="modal-title">Chi Tiết Thông Tin Sinh Viên</h4>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                            </div>
                                            <!-- Modal body -->
                                            <div class="modal-body ">
                                                <form class="row g-3">
                                                    <div class="col-md-6">
                                                        <label for="malop" class="form-label">Mã sinh viên</label>
                                                        <input type="text" class="form-control" id="malop">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="TenLop" class="form-label">Họ và tên*</label>
                                                        <input type="text" class="form-control" id="TenLop">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="Tenmonhoc" class="form-label">Ngày sinh*</label>
                                                        <input type="text" class="form-control" id="Tenmonhoc">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="Tenmonhoc" class="form-label">Giới tính*</label>
                                                        <input type="text" class="form-control" id="Tenmonhoc">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="Tenmonhoc" class="form-label">Mã khoa*</label>
                                                        <input type="text" class="form-control" id="Tenmonhoc">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="inputState" class="form-label">Kí túc xã*</label>
                                                        <select id="inputState" class="form-select">
                                                            <option selected>Choose...</option>
                                                            <option>...</option>
                                                            <option>...</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <label for="Tenmonhoc" class="form-label">Quê quán*</label>
                                                        <input type="text" class="form-control" id="Tenmonhoc">
                                                    </div>
                                                    <div class="col-md-12">
                                                        <label for="Tenmonhoc" class="form-label">Địa chỉ*</label>
                                                        <input type="text" class="form-control" id="Tenmonhoc">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="Tenmonhoc" class="form-label">SĐT*</label>
                                                        <input type="text" class="form-control" id="Tenmonhoc">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="Tenmonhoc" class="form-label">Căn cước công dân*</label>
                                                        <input type="text" class="form-control" id="Tenmonhoc">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="Tenmonhoc" class="form-label">Tên đăng nhập*</label>
                                                        <input type="text" class="form-control" id="Tenmonhoc">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="Tenmonhoc" class="form-label">Mật khẩu*</label>
                                                        <input type="text" class="form-control" id="Tenmonhoc">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="Tenmonhoc" class="form-label">Họ và tên Bố*</label>
                                                        <input type="text" class="form-control" id="Tenmonhoc">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="Tenmonhoc" class="form-label">Năm sinh*</label>
                                                        <input type="text" class="form-control" id="Tenmonhoc">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="Tenmonhoc" class="form-label">Nghề nghiệp*</label>
                                                        <input type="text" class="form-control" id="Tenmonhoc">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="Tenmonhoc" class="form-label">SĐT*</label>
                                                        <input type="text" class="form-control" id="Tenmonhoc">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="Tenmonhoc" class="form-label">Họ và tên Mẹ*</label>
                                                        <input type="text" class="form-control" id="Tenmonhoc">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="Tenmonhoc" class="form-label">Năm sinh*</label>
                                                        <input type="text" class="form-control" id="Tenmonhoc">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="Tenmonhoc" class="form-label">Nghề nghiệp*</label>
                                                        <input type="text" class="form-control" id="Tenmonhoc">
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="Tenmonhoc" class="form-label">SĐT*</label>
                                                        <input type="text" class="form-control" id="Tenmonhoc">
                                                    </div>
                                                </form>
                                            </div>

                                            <!-- Modal footer -->
                                            <!-- <div class="modal-footer">
                                                                    <button type="button" class="btn btn-primary" style="width: 15%" data-bs-dismiss="modal">Lưu</button>
                                                                </div> -->
                                        </div>
                                    </div>
                                </div>
                                </i>
                            </a>
                        </td>
                    </tr>`;
      });

      document.querySelector("#listSinhVien").innerHTML = html;
    })
    .catch((err) => console.log("Error: ", err));
};

const openUpdateSV = (id) => {
  fetch(`${HOST}/api/sinhvien/${id}`)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("#formUpdate #maSinhVien").value = data.idsv;
      document.querySelector("#formUpdate #hoVaTen").value = data.tensv;
      document.querySelector("#formUpdate #ngaySinh").value = formatDate(
        data.ngaySinh
      );
      document.querySelector("#formUpdate #gioiTinh").value = data.laNam;
      document.querySelector("#formUpdate #khoa").value = data.idKhoa;
      document.querySelector("#formUpdate #kyTucXa").value = data.kyTucXa;
      document.querySelector("#formUpdate #queQuan").value = data.queQuan;
      document.querySelector("#formUpdate #diaChi").value = data.diaChi;
      document.querySelector("#formUpdate #soDienThoai").value = data.sdt;
      document.querySelector("#formUpdate #CCCD").value = data.cccd;
      document.querySelector("#formUpdate #hoTenBo").value = data.tenBo;
      document.querySelector("#formUpdate #namSinhBo").value = formatDate(
        data.namSinhBo
      );
      document.querySelector("#formUpdate #ngheNghiepBo").value =
        data.ngheNghiepBo;
      document.querySelector("#formUpdate #sdtBo").value = data.sdtBo;
      document.querySelector("#formUpdate #hoTenMe").value = data.tenMe;
      document.querySelector("#formUpdate #namSinhMe").value = formatDate(
        data.namSinhMe
      );
      document.querySelector("#formUpdate #ngheNghiepMe").value =
        data.ngheNghiepMe;
      document.querySelector("#formUpdate #sdtMe").value = data.sdtMe;
      document.querySelector("#formUpdate #idtk").value = data.idtk;
    });
};

const getKhoa = () =>
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
