import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  if (!process.env.API_KEY) {
    throw new Error("API Key not found");
  }
  return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const editImageWithGemini = async (
  base64Image: string,
  mimeType: string,
  prompt: string
): Promise<string> => {
  const ai = getAiClient();
  
  // Using gemini-2.5-flash-image for image editing tasks
  const modelId = "gemini-2.5-flash-image";

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Image,
              mimeType: mimeType,
            },
          },
          {
            text: prompt,
          },
        ],
      },
    });

    // Check for inline data (image) first, then text if no image
    // The model might return text if it refuses or explains something, but usually returns an image for edits.
    const parts = response.candidates?.[0]?.content?.parts;
    if (parts) {
      for (const part of parts) {
        if (part.inlineData && part.inlineData.data) {
          return `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
        }
      }
    }
    
    throw new Error("No image generated.");
  } catch (error) {
    console.error("Gemini Image Edit Error:", error);
    throw error;
  }
};

export const processContactMessage = async (message: string, contactInfo: string): Promise<string> => {
  const ai = getAiClient();
  // Using gemini-2.5-flash for basic text tasks
  const modelId = "gemini-2.5-flash";

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: `
        You are an AI assistant for a developer portfolio website. 
        A visitor has left a message. 
        Visitor Contact: "${contactInfo}"
        Message: "${message}"
        
        Please generate a polite, professional, and short auto-reply message (max 50 words) 
        confirming that I (the developer) have received their inquiry and will respond shortly.
      `,
    });

    return response.text || "Thank you for your message. I will get back to you soon.";
  } catch (error) {
    console.error("Gemini Message Error:", error);
    return "Thank you for your message. I have received it and will respond shortly.";
  }
};
