const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain", // Ensures plain text response
};

function stripRTF(rtf: string) {
  // Step 1: Remove RTF tags (e.g., {\rtf1\ansi...}, \b, \i, etc.)
  let cleanText = rtf.replace(/{\\.*?}|\\[a-z]+\d*|[\r\n\t]/g, "").trim();

  // Step 2: Remove HTML tags (e.g., <b>, <i>, <p>, etc.)
  cleanText = cleanText.replace(/<\/?[^>]+(>|$)/g, "");

  // Step 3: Remove Markdown or special characters (e.g., *, _, #, etc.)
  cleanText = cleanText.replace(/[\*\_\#\!\-\+\=\~\`\<\>\[\]\(\)]/g, "");

  // Step 4: Trim extra spaces at the beginning or end
  cleanText = cleanText.trim();

  // Return the cleaned text 
  return cleanText;
}



// Start chat session (sync or with a callback depending on the API)
export const chatSession = model.startChat({
  generationConfig,
  history: [],
});

// Directly process response if `chatSession` is an object (not a Promise)
if (chatSession && chatSession.text) {
  const cleanResponse = stripRTF(chatSession.text);
  console.log(cleanResponse);  // Outputs the plain text response
} else {
  // If `chatSession` is not immediate, you may need to handle via a callback or other method
  console.error("No text received from chat session or it might be async.");
}
