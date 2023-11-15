//https://docs.google.com/document/d/18kV3-bZgQ3z2GqDNL0gTaZsp6oKJFcUYR5NsFV166kg/edit

import mongoose from "mongoose";
import BookModel from "./path/to/your/book/model"; // Adjust the path accordingly

// Assuming you have a MongoDB connection established
mongoose.connect("your-mongodb-uri", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Function to find books by genre and publisher
async function findBooksByGenreAndPublisher(
  genre: string,
  publisher: string
): Promise<Book[]> {
  try {
    const books = await BookModel.find({ genre, "publisher.name": publisher });
    return books;
  } catch (error) {
    console.error("Error finding books by genre and publisher:", error);
    throw error;
  }
}

// Example usage: Find all books with genre "Sci-Fi" and published by "Roli Books"
findBooksByGenreAndPublisher("Sci-Fi", "Roli Books")
  .then((books) => {
    console.log(
      'Books with genre "Sci-Fi" and published by "Roli Books":',
      books
    );
  })
  .finally(() => {
    // Close the MongoDB connection when done
    mongoose.disconnect();
  });
