class Book {
  title: string;
  chapters: Array<string>;
  pages: number;


  constructor(title_name: string, chapter_list: Array<string>, total_pages: number){
    this.title = title_name;
    this.chapters = chapter_list;
    this.pages = total_pages;
  }

  //Methods
  list(): void{
    console.log('Chapters in this here book: ', this.title);
    for(var i = 0; i < this.chapters.length; i++){
      console.log(this.chapters[i]);
    }
  }
}

var newBook = new Book("Television", ["Walking", "Talking", "Netflix"], 1003);

newBook.list();