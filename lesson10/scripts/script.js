
//Задание 1
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
    }
console.log(Object.values(numbers).filter(val=>val>3));

//Задание 2

const post = {
        author: "John", // вывести этот текст
        postId: 23,
        comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
            likes: 10,
            dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
        ],
    };

//Задание 3

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
    ];

products.forEach(el=>el.price*=0.85)

//Задание 4

const products1 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
    ];
    
const productsWithPhotos = products1.filter(product => console.log(product.photos));
console.log(productsWithPhotos);
console.log(products1); 

//Задание 5 Вариант 1

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
const week={};

for(counter=0;counter<en.length;counter++){
    week[en[counter]]=ru[counter];
}
console.log(week);
 
//Задание 5 Вариант 2

const result = en.reduce((acc, curr, index) => {
    acc[curr] = ru[index];
    return acc;
  }, {});
  
  console.log(result);
  