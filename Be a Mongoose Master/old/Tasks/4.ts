//https://docs.google.com/document/d/18kV3-bZgQ3z2GqDNL0gTaZsp6oKJFcUYR5NsFV166kg/edit

import mongoose, { Document, Schema } from "mongoose";

// Define the Review subdocument schema
interface Review {
  user: string;
  comment: string;
}

// Define the Publisher subdocument schema
interface Publisher {
  name: string;
  location: string;
}

// Define the Book interface
interface Book extends Document {
  title: string;
  author: string[];
  genre: string;
  publicationYear: number;
  publisher: Publisher;
  reviews: Review[];
  rating: number;
  price: number;
  featured?: string; // New "featured" field
}

// Define the Book schema
const bookSchema = new Schema<Book>({
  title: { type: String, required: true },
  author: { type: [String], required: true },
  genre: { type: String, required: true },
  publicationYear: { type: Number, required: true },
  publisher: {
    name: { type: String, required: true },
    location: { type: String, required: true },
  },
  reviews: [
    {
      user: { type: String, required: true },
      comment: { type: String, required: true },
    },
  ],
  rating: { type: Number, required: true },
  price: { type: Number, required: true },
  featured: { type: String }, // New "featured" field
});

// Create static method for finding featured books
bookSchema.statics.findFeaturedBooks = async function (): Promise<Book[]> {
  try {
    const featuredBooks = await this.find({ rating: { $gte: 4 } });

    // Update the "featured" field based on the rating
    featuredBooks.forEach((book) => {
      if (book.rating >= 4.5) {
        book.featured = "BestSeller";
      } else {
        book.featured = "Popular";
      }
    });

    return featuredBooks;
  } catch (error) {
    console.error("Error finding featured books:", error);
    throw error;
  }
};

// Create and export the Book model
const BookModel = mongoose.model<Book>("Book", bookSchema);

export default BookModel;



// Assuming you have a MongoDB connection established
mongoose.connect('your-mongodb-uri', { useNewUrlParser: true, useUnifiedTopology: true });

// Example usage: Find featured books
BookModel.findFeaturedBooks()
  .then((featuredBooks) => {
    console.log('Featured Books:', featuredBooks);
  })
  .finally(() => {
    // Close the MongoDB connection when done
    mongoose.disconnect();
  });

