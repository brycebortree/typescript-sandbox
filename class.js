var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
// newBook.list();
var Childrens = (function (_super) {
    __extends(Childrens, _super);
    //new constructor
    function Childrens(title_name, chapter_list, total_pages) {
        return _super.call(this, title_name, chapter_list, total_pages) || this;
    }
    Childrens.prototype.list = function () {
        console.log("children's books chapters: ");
        for (var i = 0; i < this.chapters.length; i++) {
            console.log(this.chapters[i]);
        }
    };
    return Childrens;
}(Book));
var childrens_book = new Childrens("Hello World", ["Saying Hi", "Saying Bye"], 28);
childrens_book.list();
