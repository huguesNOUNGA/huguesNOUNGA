import express from "express";
import userRoute from "./routes/authRoute.js";

const app = express(); 
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", userRoute)


app.listen(PORT, () => {
    
console.log(`Server is running on http://localhost:${PORT}`);
});
