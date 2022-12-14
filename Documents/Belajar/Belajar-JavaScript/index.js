// 1. clousure
// function salam(waktu) {
//   return function (nama) {
//     console.log(`halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
//   };
// }
// let ucapanSalamPagi = salam(`pagi`);
// let ucapanSalamSiang = salam(`siang`);
// let ucapanSalamMalam = salam(`malam`);
// ucapanSalamMalam(`Reza`);
/*






*/
// 2. object.create
// const methodMain = {
//   makan: function (porsi) {
//     this.energi += porsi + 2;
//     console.log(`Halo ${this.nama}. Selamat makan!`);
//   },
//   tidur: function (waktu) {
//     this.energi += waktu * 1.5;
//     console.log(`Halo ${this.nama}. Selamat tidur!`);
//   },
// };
// function mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMain);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   return mahasiswa;
// }

// let reza = mahasiswa("Reza", 20);
// let nur = mahasiswa("Nur", 10);
/*






8/
//  3. Arrow Function
// let nama = ["Reza", "Nur", "Hakim"];
// let jumlahHuruf = nama.map((banyak) => banyak.length);
// console.log(jumlahHuruf);
// console.table(jumlahHuruf);

// konsep this pada Arrow Function Expression
// const murid = function () {
//   this.nama = "Reza Nur Hakim";
//   this.umur = 24;
//   this.salam = function () {
//     return `Halo nama saya ${this.nama}, umur saya ${this.umur} tahun.`;
//   };

//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// };
// const reza = new murid();

// A. constructor function
// const murid = function () {
//   this.nama = "Reza Nur Hakim";
//   this.umur = 24;
//   this.salam = function () {
//     return `Halo nama saya ${this.nama}, umur saya ${this.umur} tahun.`;
//   };
// };
// const reza = new murid();

// B. Object Literral
// const murid1 = {
//   nama: "Reza",
//   umur: 24,
//   sayHello: function () {
//     return `Halo nama saya ${this.nama}, umur saya ${this.umur} tahun.`;
//   },
// };
/*






*/
// 4. Higher Order Function
// function kerjakanTugas(mataKuliah, selesai) {
//   console.log(`Mulai mengerjakan tugas ${mataKuliah}`);
//   selesai();
// }
// function selesai() {
//   console.log(`Selesai mengerjakan tugas!`);
// }
// kerjakanTugas("Higher Order Function", selesai);
// 'kerjakanTugas' disebut sebagai Higher Order Function, sedangkan 'selesai' disebut Callback
/*






*/
// 5. Filter, Map, & Reduce
// I. Filter
// let x = [];
// for (let i = 0; i < 20; i++) {
//   x.push(i);
// }
// console.log(x);
// const y = x.filter((a) => a > 10);
// console.log(y);
// II. Map
// let x = [];
// for (let i = 0; i < 20; i++) {
//   x.push(i);
// }
// console.log(x);
// const y = x.map((a) => a * 4);
// console.log(y);
// III. Reduce
// let x = [];
// for (let i = 1; i < 5; i++) {
//   x.push(i);
// }
// console.log(x);
// const y = x.reduce(
//   (accumulator, currentValue) => accumulator - currentValue,
//   20
// );
// console.log(y);
// nilai'20' disitu adalah nilai awal. Jika tidak dituliskan maka defaultnya adalah '0'
/*






*/
// 6. Template Literrals
// adalah string literral yang memungkinkan adanya expression di dalamnya
// I. Embeded expression
// console.log(`${1 + 3}`);
// const x = 10;
// console.log(`${x % 2 === 0 ? "genap" : "ganjil"}`);
// II. Tagged Literrals
// const nama = "Reza";
// const umur = 24;
// function coba(strings, ...values) {
//   let result = "";
//   strings.forEach((str, i) => {
//     result += `${str}${values[i] || ""}`;
//   });
//   return result;
// }
// const str = coba`Halo nama saya ${nama}, umur saya ${umur} tahun.`;
// console.log(str);
// atau cara ini
// const nama = "Reza";
// const umur = 24;
// function coba(strings, ...values) {
//   return strings.reduce(
//     (result, str, i) => `${result}${str}${values[i] || ""}`,
//     ""
//   );
// }
// const str = coba`Halo nama saya ${nama}, umur saya ${umur} tahun.`;
// console.log(str);
/*






*/
// 7.A. Destructing Assignment
// adalah expression pada javascript untuk unpacking array atau object
// const aray = ["satu", "dua", "tiga"];
// const [a, b, c] = array;
// console.log(a);
// const object = {
//   nama: "Reza",
//   umur: 24,
//   email: "Rezaheho6@gmail.com",
// };
// const { nama, umur, email } = object;
// console.log(umur);
// Assignment tanpa deklarasi
// ({
//   nama: "Reza",
//   umur: 24,
//   email: "Rezaheho6@gmail.com",
// });
// const { nama, umur, email } = {
//   nama: "Reza",
//   umur: 24,
//   email: "Rezaheho6@gmail.com",
// };
// console.log(umur);
// Assignment ke variabel
// const object = {
//   nama: "Reza",
//   umur: 24,
//   email: "Rezaheho6@gmail.com",
// };
// const { nama: n, umur: u, email: e } = object;
// console.log(n);
// Memberikan Nilai Default
// const object = {
//   nama: "Reza",
//   umur: 24,
// };
// const { nama: n, umur: u, email = "Rezaheho6@gmail.com" } = object;
// console.log(email);
// Mengambil Field pada object, setelah dikirim sebagai parameter untuk function
// const object = {
//   id: 123,
//   nama: "Reza",
//   umur: 24,
//   email: "Rezaheho6@gmail.com",
// };
// function getIdObjet({ id, nama }) {
//   return id + nama;
// }
// console.log(getIdObjet(object));
// 6.B. Destructing Function
// function tambahKaliBagi(a, b) {
//   return [a + b, b * a, a + a / b];
// }
// const [tambah, kali, bagi] = tambahKaliBagi(4, 2);
// console.log(kali);
// Destructing function object bersarang
// const murid = {
//   nama: "Reza",
//   umur: 24,
//   nilai: {
//     uts: 90,
//     uas: 80,
//   },
// };
// function get({ nama, umur, nilai: { uas, uts } }) {
//   return `Halo nama saya ${nama}, umur saya ${umur} tahun. Baru-baru ini saya mendapatkan nilai uas ${uas} dan nilai uts ${uts}`;
// }
// console.log(get(murid));
/*






*/
// 8. A.  For...of...
// adalah looping selain object
// A. I. Looping Array
// const murid = ["Reza", "Nur", "Hakim"];
// for (const m of murid) {
//   console.log(m);
// }
// A. II. Looping Strings
// const nama = "Reza Nur Hakim";
// for (const n of nama) {
//   console.log(n);
// }
// A. III. Argument
// function jumlahAngka() {
//   let jumlah = 0;
//   for (a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }
// console.log(jumlahAngka(1, 2, 3, 4, 5));
// 7. B. For...in..
// adalah looping pada object
// const data = {
//   nama: "Reza",
//   umur: 24,
//   email: "Rezaheho6@gmail.com",
// };
// for (const d in data) {
//   console.log(d);
// }
/*






*/
// 9. Spread Operator & Rest Parameter
// 9. A. Spread Operator
// adalah unpacking iterables menjadi single element
// a. Menggabungkan nilai 2 array
// const murid = ["Reza", "Nur", "Hakim"];
// const murid1 = ["Abdurrahman", "Afif"];
// const gabungan = [...murid, ...murid1];
// console.log(gabungan);

// atau bisa pake method concat

// const murid = ["Reza", "Nur", "Hakim"];
// const murid1 = ["Abdurrahman", "Afif"];
// const mrd = ["Zaza", "Mahendra"];
// const gabungan = mrd.concat(murid1, "Dada", murid);
// console.log(gabungan);

// atau meng-copy array

// const mrd = ["Reza", "Nur", "Hakim"];
// const copy = [...mrd];
// copy[1] = "Apip";
// console.log(copy);
// console.log(mrd);
/*




*/
// 9. B. Rest Parameter
// Adalah representasi dari argument pada function dengan juumlah tak terbatas yang menjadi

// menjumlahkan function menggunakan for...of...
// function jumlahkan() {
//   let total = 0;
//   for (a of arguments) {
//     total += a;
//   }
//   return total;
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));

// menjumlahkan angka menggunakan Rest Parameter
// function jumlahkan(...myArgs) {
//   return myArgs.reduce((a, b) => a + b);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));

// menggunakan Rest Parameter untuk Array Destructing
// const jajaran = ["Reza", "Nur", "Hakim", "Afif", "Khoir"];
// const [guru, ketua, wakil, ...murid] = jajaran;

// Filtering
// function fil(type, ...values) {
//   return values.filter((a) => typeof a === type);
// }
// console.log(fil("boolean", 1, 4, "Reza", "Nur", 10, "Hakim", false, true));
/*






*/
// 10. Asynchronous JavaScript
// 10. A. Callback
// Adalah sebuah function yang dieksekusi setelah function lain selesai dijalankan

// Synchronous Callback
// function halo(nama) {
//   alert(`Halo ${nama}`);
// }
// function tampilkan(callBack) {
//   const nama = prompt(`masukkan nama`);
//   callBack(nama);
// }
// tampilkan(halo);

// Asynchronous Callback
// function getData(url, succes, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         succes(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };
//   xhr.open("get", url);
//   xhr.send();
// }
// getData(
//   "data.json",
//   (result) => {
//     const murid = JSON.parse(result);
//     murid.forEach((a) => {
//       console.log(a.nama);
//     });
//   },
//   (e) => {
//     console.log(`eror ya`);
//   }
// );
/*






*/
// 11. Promise
// Adalah sebuah object yang mempresentasikan keberhasilan atau kegagalan sebuah event yang asynchronous di masa yang akan datang.
// keadaannya (state) bisa (A. terpenuhi / fulfilled, B. ingkar / rejected, C. tunggu / pending)
// untuk menjalankan keadaanya ( state ) ada 3 fungsi callback (1. resolve, 2. reject, 3. finally)
// Dalam promise ada aksi yang dilakukan
// I. jika terpenuhi (.then)
//II. jika ingkar (.catch)
//III. jika pending (finally)

// contoh 1
// let ditepati = false;
// const janji = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve(`Lu keren`);
//   } else {
//     reject(`ASU!!!!`);
//   }
// });

// janji
//   .then((response) => console.log("Ok " + response))
//   .catch((response) => console.log("Not Ok " + response));

// contoh 2
// let ditepati = true;
// const janji = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("LU KEREN!!!");
//     }, 200);
//   } else {
//     setTimeout(() => {
//       reject("ASU!!!");
//     }, 200);
//   }
// });
// console.log("Mulai");
// janji
//   .then((response) => console.log("OK " + response))
//   .finally(() => console.log("Sedang Menunggu"))
//   .catch((response) => console.log("NOT OK " + response));
// console.log("selesai");

// Promise.all()
// dijalankan ketika memiliki banyak promise
// const film = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve([
//       {
//         judul: "Angkling Darmo",
//         sutradara: "Reza",
//         genre: "Action",
//       },
//     ]);
//   }, 500);
// });
// const cuaca = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve([
//       {
//         kota: "Grobogan",
//         temp: 30,
//         kondisi: "Cerah",
//       },
//     ]);
//   }, 500);
// });

// Promise.all([film, cuaca]).then((response) => {
//   const [film, cuaca] = response;
//   console.log(film);
//   console.log(cuaca);
// });
/*






*/
// 12. Async and Await
// sebuah async function dapat memiliki keyword await di dalamnya untuk memberhentikan sementara eksekusi fungsinya sambil menunggu promise-nya selesai.
// function cobaPromise(resolve) {
//   return new Promise((resolve, reject) => {
//     const w = 5000;
//     if (w < 5000) {
//       setTimeout(() => {
//         resolve("selesai");
//       }, w);
//     } else {
//       reject("Lama Ah!");
//     }
//   });
// }

// Menggunakan Then

// const coba = cobaPromise();
// coba.then(() => console.log(coba)).catch(() => console.error(coba));

// menggunakan async and await

// async function cobaAsync() {
//   try {
//     const coba = await cobaPromise();
//     console.log(coba);
//   } catch (err) {
//     console.error(err);
//   }
// }
// cobaAsync();
