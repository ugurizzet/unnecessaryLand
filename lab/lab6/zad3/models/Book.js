class Book {
    constructor(id, title, author, year, available = true) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.available = available;
    }

    static getAll() {
        return [
            new Book(1, "Book One", "Author A", 1999, true),
            new Book(2, "Book Two", "Author B", 2005, true),
            new Book(3, "Book Three", "Author C", 2011, false)
        ];
    }

    borrow() {
        if (this.available) {
            this.available = false;
        }
    }

    return() {
        this.available = true;
    }
}

module.exports = Book;
