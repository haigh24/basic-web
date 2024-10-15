function pCircle(sLength) {
  return sLength * 4;
}

function sCircle(sLength) {
  return sLength * sLength;
}

function sRetangle(height, width) {
  return height * width;
}

function faRenheit(farenheit) {
  return ((farenheit - 32) * 5) / 9;
}

function exponentOf(base, exponent) {
  let x = 1;
  for (let i = 0; i < exponent; i++) {
    x *= base;
  }
  return x;
}

function naturalOf(number) {
  return number + 11 * number + 111 * number;
}

function coDe4(one, two, three) {
  let max = 0;
  if (one > two) {
    max = one;
  } else {
    max = two;
  }

  if (max < three) {
    max = three;
  }
  return max;
}

function coDe131(one, two, three, four) {
  let max = 0;
  if (one > two) {
    max = one;
  } else {
    max = two;
  }
  if (max < three) {
    max = three;
  }
  if (max < four) {
    max = four;
  }
  return max;
}

function numBers(x) {
  let a = x % 10;
  let b = x - a;
  let c = b / 10;

  return {
    first: c,
    last: a,
  };
}

function numBer(x) {
  let text = "";
  for (let i = 0; i < 1000000; i++) {
    text += cars[i] + "<br>";
  }
}

function yourNumber(x) {
  let a = x % 100; //a = 45//
  let b = x - a; //b = 12300//
  let c = b / 100; //123//
  let d = c % 10;

  if (c > 100) x = 0;
  return {
    du: d,
  };
}

function multiPlication(one, two) {
  console.log("sum of " + one + " and " + two + " : " + (one + two));

  console.log("division " + one + "-" + two + "= " + (one - two));
  console.log("division " + one + " and " + two + " : " + one * two);
  console.log("division " + one + " and " + two + " : " + one / two);
  console.log("division " + one + " and " + two + " : " + (one % two));
}

function positiveNumbers(x) {
  if (x < 0) {
    console.log("số nguyên âm");
  } else {
    console.log("số nguyên duong");
  }
  if ((x = 0)) {
    console.log(" x = 0 ");
  }
}

function evenNumbers(x) {
  let a = x % 2;

  if (a == 0) {
    console.log(" so chan ");
  } else {
    console.log(" so le ");
  }
}

function character(x) {
  const chu = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let index = chu.indexOf(x);

  if (index == -1) {
    console.log(x + " khong phai nguyen am");
  } else {
    console.log(x + " la chu nguyen am");
  }
} //index of dùng để so x với một mảng sẵn có//

function monthAndyear(x) {
  const thang = ["1", "3", "5", " 7", "8", "10", "12"];
  let index = thang.indexOf(x);

  if (index == -1) {
    console.log(" tháng " + x + " là tháng có 30 ngày");
  } else {
    console.log(" tháng " + x + " là tháng có 31 ngày");
  }
}

function tamGiac(A, B, C) {
  if (A * B + A * C > B * C && A * B + B * C > A * C && A * C + B * C > A * B) {
    console.log("True");
  } else {
    console.log("False");
  }
}

function typeOftamgiac(a, b, c) {
  if (a == b && a == c) {
    console.log("tam giac deu");
  } else {
    if (a == b || a == c || b == c) {
      console.log("tam giac can");
    } else {
      if (
        a * a == b * b + c * c ||
        b * b == c * c + a * a ||
        c * c == a * a + b * b
      ) {
        console.log("tam giac vuong");
      } else {
        console.log("tam giac thuong");
      }
    }
  }
}

function yourAge(x) {
  if (x >= 15) {
    console.log("du tuoi xem phim");
  } else {
    console.log("khong du tuoi xem phim");
  }
}

function sCore(x) {
  if (x >= 9) {
    console.log(" học sinh có điểm " + x + " là học sinh đạt loại xuất sắc");
    return;
  }

  if (x >= 8) {
    console.log(" học sinh có điểm " + x + " là học sinh đạt loại giỏi");
    return;
  }

  if (x >= 8) {
    console.log(" học sinh có điểm " + x + " là học sinh đạt loại giỏi");
    return;
  }
  if (x >= 5.5) {
    console.log(" học sinh có điểm " + x + " là học sinh đạt loại khá");
    return;
  }
  if (x >= 4) {
    console.log(" học sinh có điểm " + x + " là học sinh đạt loại trung bình");
    return;
  }
  if (x < 4) {
    console.log(" học sinh có điểm " + x + " là học sinh đạt loại yếy");
    return;
  }
}

function yourNumbers(x) {
  if (x <= 1) {
    console.log("giá tiền của quý khách là " + x * 15000 + " đ");
    return;
  }
  if (1 < x && x <= 5) {
    console.log("giá tiền của quý khách là " + x * 13500 + " đ");
    return;
  }

  if (x > 5 && x < 120) {
    console.log("giá tiền của quý khách là " + x * 11000 + " đ");
    return;
  }

  if (x > 120) {
    let y = x;
    console.log("giá tiền của quý khách là " + (x * 11000 * 90) / 100 + " đ");
    return;
  }
}

function timeDoing(x, y) {
  if (x < 10) {
    console.log(
      " Giá tiền khi code " +
        x +
        " dòng trong thời gian " +
        y +
        " là " +
        (y * 20 - 1)
    );
  } else {
    if (x > 10 && x < 20) {
      console.log(
        " Giá tiền khi code " +
          x +
          " dòng trong thời gian " +
          y +
          " là " +
          y * 20 -
          2
      );
    } else {
      console.log(
        " Giá tiền khi code " +
          x +
          " dòng trong thời gian " +
          y +
          " là " +
          (y * 20 - 5)
      );
    }
  }
}

function tienDien(x) {
  if (x <= 50 && x >= 0) {
    console.log("tien dien thang nay la " + x * 2000);
    return;
  }

  if (x >= 51 && x <= 100) {
    console.log("tien dien thang nay la " + (50 * 2000 + (x - 50) * 2500));
    return;
  }

  if (x >= 101 && x <= 200) {
    console.log(
      "tien dien thang nay la " + (50 * 2000 + 50 * 2500 + (x - 100) * 3000)
    );
    return;
  }

  if (x <= 300 && x >= 201) {
    console.log(
      "tien dien thang nay la " + (50 * 2000 + 50 * 2500 + (x - 200) * 4000)
    );
    return;
  }
  if (x >= 301) {
    console.log("tien dien thang nay la " + x * 5000);
    return;
  }
}

function phuongTrinhbachai(a, b, c) {
  let fanta = b * b - 4 * a * c;
  console.log(fanta);

  let x1 = (-b + Math.sqrt(fanta)) / (2 * a);
  let x2 = (-b - Math.sqrt(fanta)) / (2 * a);
  let x3 = -b / (2 * a);
  //let x3 = b * x3 + c;
  //let x5 = Math.sqrt(-c / a);
  if (a == 0 && b != 0 && c != 0) {
    console.log(" phuong trinh co mot nghiem duy nhat " + -c / b);
  } else {
    if (a == 0 && b == 0 && c == 0) {
      console.log(" phuong trinh vo so nghiem ");
    } else {
      if (a == 0 && b == 0 && c != 0) {
        console.log(" phuong trinh vo nghiem ");
      } else {
        if (fanta == 0) {
          console.log(" phương trình có mot nghiem duy nhat " + x3);
        } else {
          if (fanta > 0) {
            console.log(
              " phương trình có 2 nghiệm phân biệt " + x1 + " và " + x2
            );
          } else {
            if (fanta < 0) {
              console.log(" phương trình vô nghiệm ");
            } else {
              // if (a == 0) {
              // console.log(
              // " Nếu a = 0 thì phương trình có dạng bx + c = 0. Khi đó x có giá trị là " +
              // x3
              //);
              //} else {
              //if (b == 0) {
              // console.log(
              // " Nếu b = 0 thì phương trình có dạng ax^2 + c = 0. Khi đó x có giá trị là " +
              // x5 +
              //-x5
              //);
              //}
              // else {
              console.log(
                " phương trình không hề tồn tại, anh viết tầm bậy hã? "
              );
              //}
              //}
            }
          }
        }
      }
    }
  }
}

/*function daySochan ( start, end ) {
    let soTunhien = [];
    for ( let i = 1; i <= 1000; i++ ) 
    { soTunhien.push (i)  };
    //let d = i % 3 ;
    
    if ( d == 0 ) {
     
        console.log( " số chẵn thuộc khoảng từ " + start + " đến " + end + " là " + i );}
        else {

            console.log(  i );}
        };*/

/*function soChan(start, end) {
  for (var k = start; k <= end; k++) {
    let d = k % 2;
    if (d == 0) {
      console.log(" số chẵn " + k);
    } else {
    }
  }
}*/

function soNguyento(x) {
  for (var i = 2; i < x; i++) {
    let h = x % i;

    /*if (h == 0) {
        console.log(" hok pk so nguyen to ");
        
    }*/

    if (h == 0) {
      console.log(x + " không phải nguyên tố ");
      break;
    } else {
      if (i == x - 1) {
        console.log(x + " là số nguyên tố ");
      }
    }

    /*else {
      console.log(" khong phai so nguyen to ");
    }*/
  }
}

function giaiThua(x) {
  let u = 1;

  for (var i = 1; i <= x; i++) {
    u = u * i;
  }
  console.log(" so giai thua cua " + x + " la " + u);
}

/*function tongChuso ( x ) {  
      
        let a = x % 10;
        let b = ( x - a ) / 10; 
        let c = a + b;



        
      &  let e =  x % 100;
        let d = e - a;
        let f = ( x - e ) / 100; 
let g = f + a + d;


  if  (  x < 10 ) {
    console.log ( x = x );
  }

  else {
    if ( x < 100 ) {
        console.log ( " tong các chư số đcho be hơn 100 là " +  c  );
    }
    else {
        if ( x < 1000 ) {
            console.log ( " tong cac chu so la " + g );
        } 
    }
}
  }*/

function tongChuso(x) {
  const chuSo = [];

  while (x > 0) {
    let y = x % 10; /* số dư*/
    let z = x - y; /* số còn lại */
    x = z / 10;
    chuSo.push(y);
  }

  let so = 0;
  for (i = 0; i < chuSo.length; i++) {
    so += chuSo[i];
  }
  return so;
}

function lonNho(x) {
  const conSo = [];

  while (x > 0) {
    let y = x % 10;
    let z = x - y;
    x = z / 10;
    conSo.push(y);
  }

  let max = conSo[0];
  let min = conSo[0];
  for (i = 0; i < conSo.length; i++) {
    if (min > conSo[i]) {
      min = conSo[i];
    }

    if (max < conSo[i]) {
      max = conSo[i];
    }
  }

  return max - min;
}

function soToanchan(x) {
  const soChan = [];

  while (x > 0) {
    let y = x % 10;
    let z = x - y;
    x = z / 10;
    soChan.push(y);
  }

  let chan = 0;
  for (i = 0; i < soChan.length; i++) {
    //chan = soChan[i] % 2;
    chan = soChan[i] % 2;
  }

  if (chan == 0) {
    console.log(" là số toàn chẵn" + x);
  } else {
    console.log(" không phải số toàn chẵn ");
  }
}

function soTienlen(x) {
  const soTien = [];

  while (x > 0) {
    let y = x % 10;
    let z = x - y;
    x = z / 10;
    soTien.push(y);
  }
  const newsoTien = soTien.reverse();
  for (i = 0; i < newsoTien.length; i++) {
    tien = newsoTien[i + 1] - newsoTien[i];

    if (newsoTien[i] > newsoTien[i + 1]) {
      return " khong phai so tien ";
    }
  }
  return " la so tien ";
}

//i < newsoTien.length

function daoNguoc(x) {
  let dao = [];
  while (x > 0) {
    let y = x % 10;
    let z = x - y;
    x = z / 10;
    dao.push(y);
  }
  /* let newdao = dao.reverse();
  return newdao;*/
  return dao;
}

function reverseString(x) {
  return x.split("").reverse().join("");
}

//spit tách chuỗi thành mảng các phần tử vd: "hello" -> " "h, e, l, l, o "
// reverse đảo ngược thành phần trong mảng
//join nhập các thành phần lại thành chuỗi

function reserveNumber(x) {
  x += "" + x;
  return x.split("").reverse().join("");
}
console.log(" số đảo ngược của aa nà " + x); /* ĐẢO NGƯỢC GIÁ TRỊ VÀ STRING  */

function nhanCapso(x) {
  let a = 1;

  for (var i = 1; i <= x; i++) {
    a = a * i;
  }
  console.log(" giá trị nhân từ 1 đến " + x + " là " + a);
}

function congSotunhien(x) {
  let a = 0;
  for (var i = 0; i <= x; i++) {
    a = i + a;
  }
  console.log(" gia tri cong tu 1 den " + x + " la " + a);

  //return (x * (x + 1)) / 2;
}

function congSotunhan(x) {
  let a = 1;
  for (var i = 1; i <= x; i++) {
    a = i * (i + 1);
  }
  console.log(" gia tri tổng của dãy số từ 1 den " + x + " la " + a);
}

function congSo(x) {
  let a = 1;
  for (var i = 1; i <= x; i++) {
    a = i * i;
  }
  console.log(" in ra tổng của dãy số từ 1 đến " + x + " la " + a);
}

function luyThua(x) {
  let a = 1;
  for (let i = 1; i <= x; i++) {
    a *= x;
  }
  return a;
}

function tongLuythua(x) {
  let a = 0;
  for (let i = 1; i <= x; i++) {
    a += luyThua(i);
  }
  return a;
}

/*function soMu ( x ) { 
  let a = 0;
  for ( let i = 1; i <= x; i++) {
a = i ;
  } 
  return a;
 }

 function coSo ( x ) {
  let a = 0;
  for ( let i = 1; i <= x; i ++  ) {
    a =  a * soMu(i)   ;
  }
  return a;
 }*/

function tongBinhphuong(x) {
  return (1 / 6) * x * (x + 1) * (2 * x + 1);
}

function lapPhanso(x) {
  let a = 0;
  for (let i = 1; i <= x; i++) {
    a += 1 / i;
  }
  return a;
}

function tongPhanso(x) {
  let a = 0;
  for (let i = 2; i <= x + 1; i++) {
    a += 1 / i;
  }
  return a;
}

function lapLuythua(x) {
  let a = 1;
  for (let i = 1; i <= x; i++) {
    a *= i;
  }
  return a;
}
function lapLailuythua(x) {
  let a = 0;
  for (let i = 1; i <= x; i++) {
    a += lapLuythua(i);
  }
  return a;
}

/*function boiSo(x) {
  let boi =[];
  let a = 0;

  for (let i = 1; i < 100; i++) {
    a = i % x;
    boi.push (a);
  }

  if (a == 0) {
   console.log( " boi so cua " + x + " la " + a );
  }
 
}*/

function boisoLessThan100(x) {
  const boiSo = [];

  for (let i = 0; i * x < 100; i++) {
    boiSo.push(i * x);
  }

  return boiSo;
}

function uocsoLessthanx(x) {
  const uocSo = [];

  for (let i = 1; i <= x; i++) {
    if (x % i == 0) {
      uocSo.push(i);
    }
  }

  return uocSo;
}

function laptimUocso(x) {
  const timUoc = [14, 12, 3, 5, 6];

  for (i = 0; i < timUoc.length; i++) {
    if (timUoc[i] > 0 && x % timUoc[i] == 0) {
      return true;
    }
  }

  return false;
}

function boichungNhonhat(x, y) {
  const boiChung = [];
  for (i = 1; i > 0; i++) {
    boiChung.push(i);
    if (i % x == 0 && i % y == 0) {
      return i;
    }
  }
  return false;
}

function uocchungLonnhat(x, y) {
  for (i = 2; i > 0; i++) {
    if (x % i == 0 && y % i == 0) {
      return i;
    }
  }
  console.log(x + " và " + y + " khong có ước chung lớn nhất ");
}

function thaphinhdauTru(x) {
  for (let i = 1; i <= x; i++) {
    let stars = "*".repeat(x);
    console.log(stars);
  }
}

function thaphinhdauChia(x) {
  for (let i = 1; i <= x; i++) {
    let spaces = "".repeat(x - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(stars + spaces);
  }
}

/*function thapHinhw (x) { 
  for (let i = 1; i < x; i++) {
   let spaces = " ".repeat( 6);
    let stars = "*".repeat( x + i );
    console.log(spaces + stars );
  }
}*/

function drawW(height) {
  for (let i = 0; i < height; i++) {
    let line = "";

    // Thêm khoảng trắng cho phần bên trái
    line += " ".repeat(i);

    // Thêm ký tự 'W'
    line += "*";

    // Thêm khoảng trắng giữa hai phần 'W'
    if (i < height - 1) {
      line += " ".repeat((height - i - 1) * 2 - 1);
      line += "W";
    }

    console.log(line);
  }
}

// sử dụng filter

/* indexof lặp lại các phần tử trong mảng
 */

const array = [0, 1, 2, 0, 0, 3];

array.indexOf(0);
array.indexOf(1);
array.indexOf(2);
array.indexOf(3);

/*function soChana ( x ) {

for (let i = 0 ; i < sochan.length; i++) {
  if ( i % 2 == 0 ) {
    return sochan[i];
  }
}
return NaN;
}*/

function tinhTrungBinhCong(mang) {
  if (mang.length === 0) {
    return 0;
  }

  // Tính tổng các phần tử trong mảng
  let tong = 0;
  for (let i = 0; i < mang.length; i++) {
    tong += mang[i];
  }

  // Tính trung bình cộng
  let trungBinhCong = tong / mang.length;
  return trungBinhCong;
}

function taoMang(x) {
  const arrInt = [1, 2, 3];
  let indexx = arrInt.indexOf(x);
  if (indexx == -1) {
    console.log(x + " không tồn tại");
  } else {
    console.log(x + " tồn tại");
  }
}

function tongHaisobencanh(x) {
  for (let i = 1; i < soBencanh.length - 1; i++) {
    let tongSobencanh = soBencanh[i + 1] + soBencanh[i - 1];
    if (tongSobencanh == soBencanh[i]) {
      return true;
    }
  }
  return false;
}


function laptimTrungbinhcong(x, y) {
  for (let i = 0; i < x.length; i++) {
    if (y == x[i]) {
      return true; // Tìm thấy
    }
  }
  return false; // Không tìm thấy
}


 function trungBinhIndexOf (x, y) {

let idx = x.indexOf(y); 
 
  if (idx == -1) {
    console.log( y + " không tồn tại trong " + x  );
  } else {
    console.log  ( y + " tồn tại trong " + x );
  }
}

 







/*function soNhosaucung(x) {
  const nhoNhat = [2, 2, 6, 2, 3];
  const newnhonhat = nhoNhat.reverse();
  let min = newnhonhat(i);
  for (let i = 0; i < newnhonhat.length; i++) {
    if (min > newnhonhat(i) ) {
      min = newnhonhat(i);
    }
    return min;
  }
  
}*/
