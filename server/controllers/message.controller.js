const MessageModel = require("../models/Message");
require("dotenv").config();

const createMessage = async (req, res) => {
  try {
    const { text, file, sender, recipient } = req.body;
    const message = new MessageModel({
      text,
      file,
      sender,
      recipient,
    });
    await message.save();
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ error: "Failed to create message" });
  }
};

const getMessages = async (req, res) => {
  try {
    const { sender, recipient } = req.query;
    const messages = await MessageModel.find({
      $or: [
        { sender, recipient },
        { sender: recipient, recipient: sender },
      ],
    }).sort({ createdAt: 1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve messages" });
  }
};

module.exports = {
  createMessage,
  getMessages,
};
