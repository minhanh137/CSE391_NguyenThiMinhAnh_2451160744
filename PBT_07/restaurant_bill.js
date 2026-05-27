const danhSachMon = [
  { ten: "Phở bò", gia: 65000, soLuong: 2 },
  { ten: "Trà đá", gia: 5000, soLuong: 3 },
  { ten: "Bún chả", gia: 55000, soLuong: 1 }
];

function tinhHoaDon(danhSachMon, laThu3 = false, coTip = true) {

  let tongTien = 0;

  console.log("   HÓA ĐƠN NHÀ HÀNG   ");

  danhSachMon.forEach((mon, index) => {
    let thanhTien = mon.gia * mon.soLuong;
    tongTien += thanhTien;

    console.log(
      `${index + 1}. ${mon.ten} x${mon.soLuong} = ${thanhTien.toLocaleString()}đ`
    );
  });

  // Giảm giá
  let giamGia = 0;

  if (tongTien > 1000000) {
    giamGia = tongTien * 0.15;
  }
  else if (tongTien > 500000) {
    giamGia = tongTien * 0.10;
  }

  // Thứ 3 giảm thêm 5%
  if (laThu3) {
    giamGia += tongTien * 0.05;
  }

  // Tiền sau giảm
  let tienSauGiam = tongTien - giamGia;

  // VAT 8%
  let vat = tienSauGiam * 0.08;

  // Tip 5%
  let tip = 0;

  if (coTip) {
    tip = tienSauGiam * 0.05;
  }

  // Tổng thanh toán
  let thanhToan = tienSauGiam + vat + tip;

  console.log("══════════════════════════════════════");
  console.log(` Tổng cộng: ${tongTien.toLocaleString()}đ`);
  console.log(` Giảm giá: ${giamGia.toLocaleString()}đ`);
  console.log(` VAT (8%): ${vat.toLocaleString()}đ`);
  console.log(` Tip (5%): ${tip.toLocaleString()}đ`);
  console.log("══════════════════════════════════════");
  console.log(` THANH TOÁN: ${thanhToan.toLocaleString()}đ`);
}

tinhHoaDon(danhSachMon, true, true);