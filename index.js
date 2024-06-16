// const | let | ver
// const 선언과 동시 값 지정 절대 불변 -- 상수선언
// let 선언과 동시에   변수, 같은 이름 불가
// ver

const myname = "김재표"
// myname = "돌돌이";

let myaccount = 100;
myaccount += 1100 + 2000;

console.log("금액확인", myaccount);

myaccount += "원";
myaccount += 5000;
myaccount += 5000;

console.log("단위추가", myaccount, "데이터타입은?", typeof myaccount);

const mynavi = ["네이버","다음","구글"];
const mynaiobj = {
    title : "네이버",
    daum : "다음",
    google : "구글"

}
console.log(mynavi[0], mynaiobj["title"], mynaiobj.title);

const mynaimulti = {
    title : [],
    daum : [],
    google : []

}


const booksData = {
    "books": [
        {
            "title": "The Catcher in the Rye",
            "author": "J.D. Salinger",
            "year_published": 1951,
            "genres": ["Fiction", "Classics"],
            "available": true
        },
        {
            "title": "To Kill a Mockingbird",
            "author": "Harper Lee",
            "year_published": 1960,
            "genres": ["Fiction", "Classics"],
            "available": false
        },
        {
            "title": "1984",
            "author": "George Orwell",
            "year_published": 1949,
            "genres": ["Fiction", "Dystopian", "Science Fiction"],
            "available": true
        }
    ]
};

console.log(booksData.books[2]["title"], booksData.books[2].title,
    booksData["books"][2]["title"]
)
console.log(booksData.books[2].genres[0])
console.log(booksData.books[2]["title"], booksData.books[2].title, booksData["books"][2]["title"]);

console.log(booksData.books[2].genres[0]);





 