class User {
    constructor(id, login, borrowedBooks = []) {
        this.id = id;
        this.login = login;
        this.borrowedBooks = borrowedBooks;
    }

    static getAll() {
        return [
            new User(1, "user1"),
            new User(2, "user2"),
            new User(3, "user3"),
        ];
    }

    borrowBook(book) {
        if (!this.borrowedBooks.includes(book)) {
            this.borrowedBooks.push(book);
        }
    }

    returnBook(book) {
        this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
    }
}

module.exports = User;
