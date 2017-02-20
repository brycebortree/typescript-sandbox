var Book = (function () {
    function Book(title_name, chapter_list, total_pages) {
        this.title = title_name;
        this.chapters = chapter_list;
        this.pages = total_pages;
    }
    //Methods
    Book.prototype.list = function () {
        console.log('Chapters in this here book: ', this.title);
        for (var i = 0; i < this.chapters.length; i++) {
            console.log(this.chapters[i]);
        }
    };
    return Book;
}());
var newBook = new Book("Television", ["Walking", "Talking", "Netflix"], 1003);
newBook.list();
