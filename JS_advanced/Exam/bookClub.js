class BookClub {
    constructor(library) {
        this.library = library;
        this.books = {};
        this.members = [];
    }

    addBook(title, author) {
        if (this.books.hasOwnProperty(title)) {
            throw new Error(`The book "${title}" by ${author} is already in ${this.library} library.`);
        }
        this.books[title] = author;
        return `The book "${title}" by ${author} has been added to ${this.library} library.`;
    }

    addMember(memberName) {
        if (this.members.includes(memberName)) {
            console.log(`Member ${memberName} is already a part of the book club.`);
        }
        this.members.push(memberName);
        return `Member ${memberName} has been joined to the book club.`;
    }

    assignBookToMember(memberName, bookTitle) {
        if (!this.members.includes(memberName)) {
            throw new Error(`Member ${memberName} not found.`);
        }
        if (!this.books.hasOwnProperty(bookTitle)) {
            throw new Error(`Book "${bookTitle}" not found.`);
        }
        let output = `Member ${memberName} has been assigned the book "${bookTitle}" by ${this.books[bookTitle]}.`;
        delete this.books[bookTitle];
        return output;
    }

    generateReadingReport() {
        if (this.members.length === 0) {
            if (Object.keys(this.books).length === 0) {
                return "No members in the book club.\nNo available books in the library.";
            }
            return "No members in the book club.";
        }
        if (Object.keys(this.books).length === 0) {
            if (this.members.length === 0) {
                return "No available books in the library.\nNo members in the book club.";
            }
            return "No available books in the library.";
        }
        let result = `Available Books in ${this.library} library:\n`;
        const sortedKeys = Object.keys(this.books).sort((a, b) => b.localeCompare(a));
        for (const key of sortedKeys) {
            result += `"${key}" by ${this.books[key]}\n`;
        }
        result = result.trim();
        return result;
    }


}
const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("The Great Gatsby", "F. Scott Fitzgerald"));
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.assignBookToMember("Alice", "The Great Gatsby"));
console.log(myBookClub.generateReadingReport());
