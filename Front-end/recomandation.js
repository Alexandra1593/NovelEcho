document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const keywords = params.get("keywords") 
        ? params.get("keywords").split(",").map(k => k.toLowerCase().trim()) 
        : [];

    document.getElementById("selected-keywords").textContent = keywords.length ? keywords.join(", ") : "No keywords selected";

    // 📚 Lista de cărți
    const books = [
        { title: "Dune", genre: "Science Fiction", author: "Frank Herbert", description: "A sci-fi epic about politics, power, and destiny.", image: "Images/dune1.jpg" },
        { title: "Pride and Prejudice", genre: "Romance", author: "Jane Austen", description: "A classic love story between Elizabeth Bennet and Mr. Darcy.", image: "Images/pride.jpg" },
        { title: "The Notebook", genre: "Romance", author: "Nicholas Sparks", description: "A heartwarming and tear-jerking tale of first love and second chances.", image: "Images/notebook.png" },
        { title: "Me Before You", genre: "Romance", author: "Jojo Moyes", description: "A beautifully tragic story about love, life, and choices.", image: "Images/mebeforeyou.jpg" },
        { title: "Tu și eu", genre: "Romance", author: "Someone", description: "Once upon a time two children falling in love", image: "Images/us.jpg" },
   
        { title: "The Name of the Wind", genre: "Fantasy", author: "Patrick Rothfuss", description: "The tale of a gifted young man’s rise to legend.", image: "Images/nameofthewind.jpeg" },
        { title: "A Court of Thorns and Roses", genre: "Fantasy", author: "Sarah J. Maas", description: "A mesmerizing retelling of Beauty and the Beast with magic and romance.", image: "Images/ACOTAR.jpg" },
        { title: "Shadow and Bone", genre: "Fantasy", author: "Leigh Bardugo", description: "A girl discovers a magical power that could save her world.", image: "Images/shadowandbone.jpg" },
        { title: "Harry Potter and the Sorcerer’s Stone", genre: "Fantasy", author: "J.K. Rowling", description: "The magical journey of Harry Potter as he discovers his destiny at Hogwarts.", image: "Images/harrypotter.jpg" },
        { title: "Dracula", genre: "Horror", author: "Bram Stoker", description: "The legendary tale of Count Dracula and his quest for blood.", image: "Images/dracula.jpg" },
    
   
   
   
    ];
    const matchedBooks = books.filter(book => {
        const genres = Array.isArray(book.genre) ? book.genre.map(g => g.toLowerCase()) : [book.genre.toLowerCase()];
        const description = book.description.toLowerCase();
    
        // Count how many keywords are found in genre or description
        let matchCount = keywords.reduce((count, k) => {
            const keyword = k.toLowerCase();
            if (genres.includes(keyword) || description.includes(keyword)) {
                return count + 1; // Increase count if keyword is found
            }
            return count;
        }, 0);
    
        return matchCount >= 2; // Keep books that match at least 2 keywords
    });

    // 🔹 Elemente HTML
    const bookList = document.getElementById("book-list");
    const leftScrollBtn = document.getElementById("left");
    const rightScrollBtn = document.getElementById("right"); // Fixed selection

    //  Curăță lista de cărți
    bookList.innerHTML = "";

    //  Dacă nu sunt cărți potrivite, afișează un mesaj
    if (matchedBooks.length === 0) {
        bookList.innerHTML = "<p>No books found for the selected genres.</p>";
    } else {
        matchedBooks.forEach(book => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <div class="card-image">
                    <img src="${book.image}" alt="${book.title}" onerror="this.src='images/book.jpg'">
                </div>

                
                <div class="card-content">
                    <h3>${book.title}</h3>
                    <p><strong>Author:</strong> ${book.author}</p>
                    <br>
                    <p class="description">${book.description}</p>
                         

                    <div class="book-btns"> 
                            <div class="like-btn"></div>
                            <div class="read-btn"></div>
                    </div>
                 </div>
                    
            `;

            bookList.appendChild(card);
        
        });
    }
    });

    $(function() {
        $(".like-btn").on("click", function() {
          $(this).toggleClass("is-active");
        });
      });
      $(function() {
        $(".read-btn").on("click", function() {
          $(this).toggleClass("is-active");
        });
      });