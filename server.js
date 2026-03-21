import express from "express";
import bitcoinMessage from "bitcoinjs-message";

const app = express();
app.use(express.json());

app.post("/verify", (req, res) => {
  const { address, signature, message } = req.body;

  try {
    const verified = bitcoinMessage.verify(message, address, signature);
    res.json({ success: verified });
  } catch (e) {
    res.json({ success: false });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
