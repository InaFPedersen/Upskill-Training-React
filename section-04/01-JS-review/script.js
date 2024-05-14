const data = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    publicationDate: '1954-07-29',
    author: 'J. R. R. Tolkien',
    genres: [
      'fantasy',
      'high-fantasy',
      'adventure',
      'fiction',
      'novels',
      'literature',
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: 'El señor de los anillos',
      chinese: '魔戒',
      french: 'Le Seigneur des anneaux',
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: 'The Cyberiad',
    publicationDate: '1965-01-01',
    author: 'Stanislaw Lem',
    genres: [
      'science fiction',
      'humor',
      'speculative fiction',
      'short stories',
      'fantasy',
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: 'Dune',
    publicationDate: '1965-01-01',
    author: 'Frank Herbert',
    genres: ['science fiction', 'novel', 'adventure'],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: '',
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: '1997-06-26',
    author: 'J. K. Rowling',
    genres: ['fantasy', 'adventure'],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: 'Harry Potter y la piedra filosofal',
      korean: '해리 포터와 마법사의 돌',
      bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
      portuguese: 'Harry Potter e a Pedra Filosofal',
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: 'A Game of Thrones',
    publicationDate: '1996-08-01',
    author: 'George R. R. Martin',
    genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: '왕좌의 게임',
      polish: 'Gra o tron',
      portuguese: 'A Guerra dos Tronos',
      spanish: 'Juego de tronos',
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Functional array methods:
const books = getBooks();

// MAP METHOD:
const titles = books.map((book) => book.title);
console.log(titles);

// To much code
// const essentialData = books.map((book) => {
//   return {
//     title: book.title,
//     author: book.author,
//   };
// });

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
console.log(essentialData(book[2]));

// Example of map method
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

// FILTER METHOD
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBooks);

const adventureBooks = books
  .filter((books) => books.genres.includes('adventure'))
  .map((book) => book.title);
console.log(adventureBooks);

// REDUCE METHOD
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
console.log(pagesAllBooks);

// SORT METHOD
const arr = [3, 6, 1, 7, 5];
const sorted = arr.slice().sort((a, b) => a - b);
console.log(sorted);
console.log(arr);

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);

/*
THEORETICAL EXAMPLES!!!

// Destructuring
// const books = getBooks();
const book = getBook(1);

// Wrong method
// const title = book.title;
// const author = book.author;

// Correct method
// const {title, author} = book;
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title, genres);

// Wrong method
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// Correct method
// const [primaryGenre, secondaryGenre] = genres;

// console.log(primaryGenre, secondaryGenre);

// Rest / Spread Operator
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre, otherGenres);

const newGenres = ['epic fantasy', ...genres];

const updatedBook = {
  ...book,
  // Adding new property
  moviePublicationDate: '2001-12-19',
  // Overwriting an existing property
  pages: 1210,
};

// Template Literals

// const summary = `${title}, ${pages} pages long book, and was written by ${author} abd published in ${
//   publicationDate.split('-')[0]
//}`;

//Old school function

// function getYear(str) {
//   return str.split('-'[0]);
// }

// Arrow function
const getYear = (str) => str.split('-')[0];

console.log;
getYear(getYear(publicationDate));

// Ternaries operator
const summary = `${title}, ${pages} pages long book, and was written by ${author} abd published in ${
  publicationDate.split('-')[0]
} The book has ${hasMovieAdaptation ? '' : 'not'} been adapted as a movie`;

const pagesRange = pages > 1000 ? 'over a thousand' : 'less than 1000';
console.log(`The book has ${pagesRange} pages`);

// Short-circuiting
console.log(true && 'Some string');
console.log(false && 'Some string');
console.log(hasMovieAdaptation && 'This book has an movie');

console.log(true || 'Some string');
console.log(false || 'Some string');

console.log(book.translations.spanish);
const spanishTranslation = book.translations.spanish || 'NOT TRANSLATED';

console.log(book.reviews.librarything.reviewsCount);
countWrong = book.reviews.librarything.reviewsCount || 'NO data';

//Nullish coalescing operator
const count = book.reviews.librarything.reviewsCount ?? 'NO data';

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

console.log(getTotalReviewCount(book));
*/
