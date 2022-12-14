// 1. Kuis Object
/*
 * TODO
 * 1. Buatlah variabel dengan nama restaurant yang bertipe object dengan ketentuan berikut:
 *    - Memiliki properti bernama "name"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti bernama "city"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti "favorite drink"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti "favorite food"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti "isVegan"
 *       - Bertipe data boolean
 *       - Bernilai boolean apa pun.
 *
 * 2. Buatlah variabel bernama name.
 *    Kemudian isi dengan nilai name dari properti object restaurant
 * 3. Buatlah variabel bernama favoriteDrink.
 *    Kemudian isi dengan nilai "favorite drink" dari properti object restaurant
 */

// TODO
// const restaurant = {
//     name:"Rganthong",
//     city:"Semarang",
//     "favorite drink":"Es teh",
//     "favorite food":"Bakso",
//     isVegan:true
//    };
//    const name = (restaurant.name);
//    const favoriteDrink = restaurant["favorite drink"];
//    console.log(restaurant);
//    console.log(favoriteDrink);
/*





/*
// 2. Kuis Array
/*
 * TODO:
 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
 *   - Array tersebut menampung bilangan genap dari 1 hingga 100
 *
 * Catatan:
 *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
 */

// TODO
// const evenNumber = [];
// for (i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     evenNumber.push(i);
//   }
// }
// console.log(evenNumber);
/*





*/
// 3. Kuis Map
/*
 * TODO:
 * 1. Buatlah variabel currency yang merupakan Map dengan kriteria:
 *   - key "USD", value 14000
 *   - key "JPY", value 131
 *   - key "SGD", value 11000
 *   - key "MYR", value 3500
 * 2. Buatlah variabel priceInIDR yang bernilai dari hasil perkalian:
 *     - priceInJPY dengan nilai currency JPY
 */

//  const priceInJPY = 5000;

//  // TODO
//  const currency = new Map([
//    ["USD", 14000],
//    ["JPY", 131],
//    ["SGD", 11000],
//    ["MYR", 3500],
//  ]);

//  const priceInIDR = priceInJPY * currency.get("JPY");
//  console.log(priceInIDR);
/*





*/
// 4. Kuis Function
/*
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // 1
 *    minimal(3, 2) // 2
 *    minimal(3, 3) // 3
 *
 * 2. Buatlah fungsi bernama power dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai dari hasil perkalian a sebanyak b (fungsi kuadrat).
 *
 *    contoh:
 *    power(7, 3) // 343
 *    power(3, 3) // 27
 *    power(4, 0.5) // 2
 */

// TODO
// function minimal(a, b) {
//     if (a < b) {
//       return a;
//     } else if (b<a) {
//       return b;
//     } else if (a===b){
//       return a;
//     }
//   }
//   console.log(minimal(5, 4));

//   function power(a, b) {
//     return a ** b;
//   }

//   console.log(power(2, 5));
/*





*/
// 5. Kuis Object-Oriented-Progamming
/**
 * TODO:
 * 1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string `${this.name} sedang makan!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string `${this.name} sedang terbang!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */

// TODO
// class Animal {
//     constructor(name, age, isMammal) {
//       this.name = name;
//       this.age = age;
//       this.isMammal = isMammal;
//     }
//   }
//   class Rabbit extends Animal {
//     constructor(name, age, isMammal) {
//       super(name, age, isMammal);
//       this.isMammal = true;
//     }
//     eat() {
//       return `${this.name} sedang makan!`;
//     }
//   }

//   class Eagle extends Animal {
//     constructor(name, age, isMammal) {
//       super(name, age, isMammal);
//       this.isMammal = false;
//     }
//     fly() {
//       return `${this.name} sedang terbang!`;
//     }
//   }

//   const myRabbit = new Rabbit("Labi", 2);
//   const myEagle = new Eagle("Elo", 4);

//   console.log(myRabbit);
//   console.log(myEagle);
/*





*/
// 6. Kuis Functional Programming
/**
 * TODO:
 * Buatlah variabel greatAuthors yang merupakan array
 * berdasarkan hasil filter() dan map() dari books:
 *   - Gunakan fungsi filter untuk mengembalikan nilai item books
 *     yang hanya memiliki nilai sales lebih dari 1000000.
 *   - Gunakan fungsi map pada books yang sudah ter-filter,
 *     untuk mengembalikan nilai string dengan format:
 *     - `${author} adalah penulis buku ${title} yang sangat hebat!`
 *
 * Catatan: Jangan ubah nilai atau struktur dari books
 */

//  const books = [
//     { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
//     { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
//     { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
//     { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
//     { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
//     { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
//     { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
//   ];

//   // TODO
//   const greatAuthors = books.filter((books) => books.sales > 1000000).map((books) => {return `${books.author} adalah penulis buku ${books.title} yang sangat hebat!`;});

//   console.log(greatAuthors);
/*





*/
// 7. Kuis Modul
// class Tiger {
//     constructor() {
//       this.strength = Math.floor(Math.random() * 100);
//     }

//     growl() {
//       return 'grrrrrrr';
//     }
//   }

//   // TODO 1
//   module.exports=Tiger;

//   class Wolf {
//     constructor() {
//       this.strength = Math.floor(Math.random() * 100);
//     }

//     howl() {
//       return 'Auuuuuuuuu';
//     }
//   }

//   // TODO 2
//   module.exports=Wolf;

/**
 * TODO 1 (Tiger.js):
 * Ekspor nilai dari class Tiger
 *
 * TODO 2 (Wolf.js)
 * Ekspor nilai dari class Wolf
 *
 * TODO 3 (main.js)
 * Impor class Tiger dan Wolf
 *
 * TODO 4 (main.js)
 * Ekspor fungsi fight, myTiger, myWolf, dan result
 *
 */

// TODO 3
// const Tiger = require('./Tiger')
// const Wolf = require('./Wolf')

// const fight = (tiger, wolf) => {
//   if (tiger.strength > wolf.strength) {
//     return tiger.growl();
//   }
//   if (wolf.strength > tiger.strength) {
//     return wolf.howl();
//   }
//   return 'Harimau dan serigala sama-sama kuat!';
// };

// const myTiger = new Tiger();
// const myWolf = new Wolf();

// const result = fight(myTiger, myWolf);

// TODO 4
// module.exports = {fight, myTiger, myWolf, result};
// console.log(fight);
// console.log(myTiger);
// console.log(myWolf);
// console.log(result);
/*





*/
// 8. Penanganan Error
/**
 * Saat ini, Anda sudah memiliki fungsi detectTriangle yang berguna untuk
 * mendeteksi jenis segitiga berdasarkan nilai argumen.
 * Contoh:
 *  - 1, 1, 1 -> Segitiga sama sisi
 *  - 4, 4, 2 -> Segitiga sama kaki
 *  - 3, 4, 6 -> Segitiga sembarang
 *
 * Namun fungsi detectTriangle belum berjalan dengan baik karena
 * bila ada argumen fungsi yang bukan number, alih-alih error, ia akan mengembalikan "Segitiga sembarang".
 * Contoh:
 *  - 1, false, 1 -> Segitiga sembarang
 *  - 'a', 3, 5 -> Segitiga sembarang
 *  - 12, 2, null -> Segitiga sembarang
 * Kondisi yang diharapkan:
 *  - 1, false, 1 -> Argumen kedua harus number
 *  - 'a', 3, 5 -> Argumen pertama harus number
 *  - 12, 2, null -> Argumen ketiga harus number
 *
 *  Tugas Anda adalah memperbaiki fungsi detectTriangle agar berjalan dengan kondisi yang diharapkan.
 *  Pastikan Anda menggunakan teknik Throwing dan Handling Error yah.
 *
 * TODO 1:
 * - Buatlah class ValidationError yang merupakan custom error dengan spesifikasi berikut:
 *   - Turunan dari class Error
 *   - Memiliki constructor(message)
 *   - this.name harus bernilai "ValidationError"
 *
 * TODO 2:
 * - Buatlah fungsi validateNumberInput yang memvalidasi 3 buah input (argumen) dengan spesifikasi berikut:
 *   - Menerima 3 argumen
 *   - Bila argumen pertama bukan number:
 *     - throw ValidationError dengan pesan 'Argumen pertama harus number'
 *   - Bila argumen kedua bukan number:
 *     - throw ValidationError dengan pesan 'Argumen kedua harus number'
 *   - Bila argumen ketiga bukan number:
 *     - throw ValidationError dengan pesan 'Argumen ketiga harus number'
 *
 * TODO 3:
 * - Panggil fungsi validateNumberInput di dalam fungsi detectTriangle untuk memvalidasi nilai argumen a, b, dan c.
 *   - pastikan Anda memanggil validateNumberInput menggunakan try .. catch.
 *   - bila block catch terpanggil, kembalikan fungsi detectTriangle dengan pesan error yang dibawa fungsi validateNumberInput.
 */

// TODO 1
// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "ValidationError";
//   }
// }

// // TODO 2
// function validateNumberInput(a, b, c) {
//   if (typeof a !== "number") {
//     throw new ValidationError("Argumen pertama harus number");
//   } else if (typeof b !== "number") {
//     throw new ValidationError("Argumen kedua harus number");
//   } else if (typeof c !== "number") {
//     throw new ValidationError("Argumen ketiga harus number");
//   }
// }

// const detectTriangle = (a, b, c) => {
//   // TODO 3
//   try {
//     validateNumberInput(a, b, c);
//   } catch (error) {
//     return error.message;
//   }

//   if (a === b && b === c) {
//     return "Segitiga sama sisi";
//   }

//   if (a === b || a === c || b === c) {
//     return "Segitiga sama kaki";
//   }

//   return "Segitiga sembarang";
// };

// console.log(detectTriangle(1, false, 1));
// console.log(detectTriangle("a", 3, 5));
// console.log(detectTriangle(12, 2, null));
/*





*/
// 9. Kuis Concurrency
/*
 * Ini adalah program untuk mendapatkan nama user dari internet.
 * Terdapat dua fungsi yang sudah dibuat, berikut penjelasanya:
 *   - fetchingUserFromInternet:
 *     - fungsi ini digunakan untuk mendapatkan data user seolah-olah dari internet.
 *     - fungsi ini menerima dua argumen yakni callback, dan isOffline.
 *     - Argumen callback membawa dua nilai yakni error dan user:
 *       - error: NetworkError akan dibawa oleh callback bila isOffline bernilai true.
 *       - user: data user akan dibawa oleh callback bila isOffline bernilai false.
 *   - gettingUserName:
 *      - fungsi ini memanggil fungsi fetchingUserFromInternet dengan nilai isOffline: false untuk mendapatkan data user name dari internet.
 *      - fungsi ini harus mengembalikan nilai user.name, namun sulit karena menggunakan pola callback.
 *      - Maka dari itu, ubahlah fetchingUserFromInternet dari callback menjadi promise
 *      - Dengan begitu, Anda bisa memanfaatkan .then atau async/await untuk mendapatkan user.name.
 *
 * TODO: 1
 * - Ubahlah fungsi fetchingUserFromInternet dengan memanfaatkan Promise. Anda bisa menghapus implementasi callback.
 *
 * TODO: 2
 * - Ubahlah cara mengonsumsi fungsi fetchingUserFromInternet dari callback ke Promise.
 * - Tips:
 *   - Agar penulisan kode lebih bersih dan mudah dibaca, coba manfaatkan async/await
 *
 *
 * Notes:
 * - Jangan ubah struktur atau nilai dari objek user yang dibawa oleh callback sebelumnya.
 * - Tetap gunakan NetworkError untuk membawa nilai error pada Promise
 */

// class NetworkError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "NetworkError";
//   }
// }

// // TODO: 1
// const fetchingUserFromInternet = (isOffline) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (isOffline) {
//         reject(new NetworkError("Gagal mendapatkan data dari internet"), null);
//       } else {
//         resolve({ name: "John", age: 18 });
//       }
//     }, 500);
//   });
// };
// console.log(fetchingUserFromInternet);

// // TODO: 2
// const gettingUserName = async () => {
//   try {
//     let user = await fetchingUserFromInternet(false);
//     return user.name;
//   } catch (user) {
//     return user.message;
//   }
// };

// gettingUserName()
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((value) => {
//     console.log(value);
//   });
