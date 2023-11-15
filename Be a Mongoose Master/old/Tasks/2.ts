//https://docs.google.com/document/d/18kV3-bZgQ3z2GqDNL0gTaZsp6oKJFcUYR5NsFV166kg/edit
import mongoose from "mongoose";
import BookModel from "./path/to/your/book/model"; // Adjust the path accordingly

// Assuming you have a MongoDB connection established
mongoose.connect("your-mongodb-uri", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Function to find books by genre
async function findBooksByGenre(genre: string): Promise<Book[]> {
  try {
    const books = await BookModel.find({ genre });
    return books;
  } catch (error) {
    console.error("Error finding books by genre:", error);
    throw error;
  }
}

// Example usage: Find all books with genre "Fantasy"
findBooksByGenre("Fantasy")
  .then((books) => {
    console.log('Books with genre "Fantasy":', books);
  })
  .finally(() => {
    // Close the MongoDB connection when done
    mongoose.disconnect();
  });
