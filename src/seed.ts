import dotenv from "dotenv";
import mongoose from "mongoose";
import Credits from "./models/credits";
import ContainerUptime from "./models/containerUptime";

dotenv.config();

async function seed(): Promise<void> {
  try {
    // 1. Connect to MongoDB
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in environment variables");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // 2. Clear old data
    await Credits.deleteMany({});
    await ContainerUptime.deleteMany({});
    console.log("✅ Cleared old data");

    // 3. Insert dummy data
    await Credits.insertMany([
      {
        user_address: "0xABC123",
        total_credits: 100,
        credits_used: 20,
        last_checked: new Date("2025-05-01T10:00:00Z"),
      },
      {
        user_address: "0xDEF456",
        total_credits: 50,
        credits_used: 5,
        last_checked: new Date("2025-05-02T12:30:00Z"),
      },
    ]);

    await ContainerUptime.insertMany([
      {
        container_id: "container-001",
        user_address: "0xABC123",
        nft_id: "nft-789",
        start_time: new Date("2025-05-01T09:00:00Z"),
        last_ping: new Date(),
        is_active: true,
      },
      {
        container_id: "container-002",
        user_address: "0xDEF456",
        nft_id: "nft-012",
        start_time: new Date("2025-05-02T08:00:00Z"),
        last_ping: new Date(),
        is_active: true,
      },
      {
        container_id: "container-003",
        user_address: "0xDEF457",
        nft_id: "nft-013",
        start_time: new Date("2025-05-02T08:00:00Z"),
        last_ping: new Date(),
        is_active: false,
      },
      {
        container_id: "container-004",
        user_address: "0xDEF557",
        nft_id: "nft-014",
        start_time: new Date("2025-05-02T17:35:00Z"),
        last_ping: null,
        is_active: false,
      },
    ]);

    console.log("✅ Dummy data inserted");
  } catch (err) {
    console.error("❌ Error during seeding:", err);
  } finally {
    // 4. Close connection
    await mongoose.connection.close();
    console.log("✅ MongoDB connection closed");
  }
}

seed().catch((err) => {
  console.error("Unhandled error in seeding:", err);
});
