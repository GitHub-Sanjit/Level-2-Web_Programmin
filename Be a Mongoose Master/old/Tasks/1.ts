// https://docs.google.com/document/d/18kV3-bZgQ3z2GqDNL0gTaZsp6oKJFcUYR5NsFV166kg/edit
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
});

// Create and export the Book model
const BookModel = mongoose.model<Book>("Book", bookSchema);

export default BookModel;
