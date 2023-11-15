//https://docs.google.com/document/d/18kV3-bZgQ3z2GqDNL0gTaZsp6oKJFcUYR5NsFV166kg/edit

import mongoose from "mongoose";
import BookModel from "./path/to/your/book/model"; // Adjust the path accordingly

// Assuming you have a MongoDB connection established
mongoose.connect("your-mongodb-uri", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Function to update prices for books published after 2020
async function updatePricesForRecentBooks(): Promise<void> {
  try {
    // Update prices only for books published after 2020
    await BookModel.updateMany(
      { publicationYear: { $gt: 2020 }, price: { $type: "string" } },
      { $set: { price: { $toInt: "$price" } } }
    );

    console.log("Prices updated successfully for recent books.");
  } catch (error) {
    console.error("Error updating prices:", error);
    throw error;
  }
}

// Example usage: Update prices for recent books
updatePricesForRecentBooks().finally(() => {
  // Close the MongoDB connection when done
  mongoose.disconnect();
});
