#Tugas Pekanan 2 - Javascript

#1. (soal1.js) Buatlah sebuah program dari akar pangkat 2 dari x dengan x harus bilangan genap, dengan kondisi sebagai berikut :
    - Jika user input angka kurang dari 0 , user get error message "Tidak bisa input bilangan negatif" 
    - Jika user input angka ganjil, user get error message "Tidak bisa input bilangan ganjil"

#2. (soal2.js) Misalkan terdapat response API sebagai berikut. 

let productBin = {
  "requestId": null,
  "data": [
    {
      "id": 100000057465,
      "storageId": 10000008207,
      "code": "A01-01-01-A",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 76,
      "createdTime": "2021-12-21T13:54:48Z",
    },
    {
      "id": 100000057466,
      "storageId": 10000002181,
      "code": "A01-01-01-B",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 71,
      "createdTime": "2021-12-21T13:54:48Z",
    },
    {
      "id": 100000065224,
      "storageId": 10000008884,
      "code": "Tgt00-A-A-01",
      "productId": 110000081009,
      "productName": "FloBrand-DressBSPink",
      "productCode": "FBR00040101",
      "quantity": 10,
      "createdTime": "2022-02-08T10:35:19Z",
    }
  ],
  "message": "success"
}
Sebagai QA Engineer kalian ingin mengecek total quantity  dari bebarapa storageId untuk productCode FBR00040101 (FloBrand-DressBSPink). Buatlah sebuah program javascript untuk menjumlahkan quantity dari semua storageId untuk produk tersebut 

Screenshot run: 
    - jawaban 1:  https://prnt.sc/iL0sDWzTUhFV (angka genap), 
                  https://prnt.sc/nhuWXjIzRzNz (angka ganjil), 
                  https://prnt.sc/1e27yC2TUE2A (angka < 0)
    - jawaban 2:  https://prnt.sc/o3FwZuuo2pSW