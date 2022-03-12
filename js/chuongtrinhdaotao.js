const renderCTDT = () => {
  fetch(`${HOST}/api/ctdaotao/`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let html = "";
      data.forEach((elm) => {
        let i = 1;
        html += `<tr>
                            <th scope="row">${i++}</th>
                            <td>${elm.tenctdt}</td>
                            <td >${elm.tenKhoa}</td>
                            <td>
                                <a style="margin-right: 5px;" type="button" data-bs-toggle="modal" data-bs-target="#myModaldata"><i
                                        class="fa-solid fa-wrench"></i>
                                    <div class="modal" id="myModaldata">
                                        <div class="modal-dialog modal-dialog-centered" style="max-width: 500px !important">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h4 class="modal-title">Sửa Chương Trình Đào Tạo</h4>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                                </div>
                                                <!-- Modal body -->
                                                <div class="modal-body">
                                                    <form class="row g-3">
                                                        <div class="col-md-12">
                                                            <label for="malop" class="form-label">Mã CTĐT</label>
                                                            <input type="text" class="form-control" id="malop">
                                                        </div>
                                                        <div class="col-md-12">
                                                            <label for="TenLop" class="form-label">Tên CTĐT</label>
                                                            <input type="text" class="form-control" id="TenLop">
                                                        </div>
                                                        <div class="col-md-12">
                                                            <label for="inputState" class="form-label">Môn học</label>
                                                            <select id="inputState" class="form-select">
                                                                <option selected>Choose...</option>
                                                                <option>...</option>
                                                            </select>
                                                        </div>
                                                    </form>
                                                </div>

                                                <!-- Modal footer -->
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-primary" style="width: 15%"
                                                        data-bs-dismiss="modal">Lưu</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </i>
                                </a>
                            </td>
                        </tr>`;
      });

      document.querySelector("#listCTDT").innerHTML = html;
    })
    .catch((err) => console.log("Error: ", err));
};
