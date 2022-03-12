// Bảng tin
const renderBangTin = () => {
  fetch(`${HOST}/api/bangtin`)
    .then((res) => res.json())
    .then((data) => {
      let html = "";
      let i = 1;
      data.forEach((elm) => {
        html += `<tr">
                            <th style="text-align:center"  scope="row" >${i++}</th>
                            <td  style="text-align:center" >${formatDate(
                              elm.thoiGianTao
                            )}</td>
                            <td >${elm.noiDung}</td>
                            <td>
                               <a type="button" data-bs-toggle="modal" data-bs-target="#myModal3"><i class="fa-solid fa-trash"></i>
                               </a>
                            </td>
                        </tr>
                        
                        <div class="modal" id="myModal3">
                            <div class="modal-dialog modal-dialog-centered" style="max-width: 400px !important">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">Cảnh Báo</h4>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                    </div>
                                    <!-- Modal body -->
                                    <div class="modal-body ">
                                        <form class="row g-3 py-3">
                                            Bạn có muốn xoá bản tin này không?
                                        </form>
                                    </div>
  
                                    <!-- Modal footer -->
                                    <div class="modal-footer">
                                        <button  onClick=deleteBangTin(${
                                          elm.idbt
                                        }) type="button" class="btn btn-primary text-center" style="width: 30%"
                                            data-bs-dismiss="modal">Đồng ý</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                        `;
      });

      document.querySelector("#listBangTin").innerHTML = html;
    })
    .catch((err) => console.log("Error: ", err));
};

const deleteBangTin = (id) => {
  console.log(id);
  fetch(`${HOST}/api/bangtin/${id}`, {
    method: "DELETE",
  })
    .then(() => {
      alert("Xoá thành công");
      renderBangTin();
    })
    .catch((err) => {
      console.error(err);
    });
};

//
