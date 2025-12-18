import React, { useState, useRef } from 'react';
import { editImageWithGemini } from '../services/geminiService';
import { LoadingState } from '../types';

const ImageEditor: React.FC = () => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [loadingState, setLoadingState] = useState<LoadingState>(LoadingState.IDLE);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setOriginalImage(reader.result as string);
        setProcessedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    if (!originalImage || !prompt) return;

    setLoadingState(LoadingState.LOADING);
    try {
      // Extract base64 data and mime type
      const match = originalImage.match(/^data:(.+);base64,(.+)$/);
      if (!match) throw new Error("Invalid image data");
      
      const mimeType = match[1];
      const base64Data = match[2];

      const result = await editImageWithGemini(base64Data, mimeType, prompt);
      setProcessedImage(result);
      setLoadingState(LoadingState.SUCCESS);
    } catch (error) {
      console.error(error);
      setLoadingState(LoadingState.ERROR);
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6 md:p-10 shadow-2xl border border-gray-700">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">AI Image Studio</h2>
        <p className="text-gray-400">Powered by Gemini 2.5 Flash Image. Upload a photo and describe how to edit it.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div 
            className="border-2 border-dashed border-gray-600 rounded-lg h-64 flex flex-col items-center justify-center cursor-pointer hover:border-indigo-500 transition-colors bg-gray-900/50"
            onClick={() => fileInputRef.current?.click()}
          >
            {originalImage ? (
              <img src={originalImage} alt="Original" className="h-full w-full object-contain rounded-lg" />
            ) : (
              <div className="text-center p-4">
                <svg className="w-12 h-12 text-gray-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <span className="text-gray-400 text-sm">Click to upload image</span>
              </div>
            )}
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              accept="image/*" 
              onChange={handleFileChange} 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Edit Instruction</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., 'Add a retro filter', 'Make it snowy', 'Add a cat'"
                className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={handleEdit}
                disabled={loadingState === LoadingState.LOADING || !originalImage || !prompt}
                className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-medium transition-all"
              >
                {loadingState === LoadingState.LOADING ? 'Processing...' : 'Generate'}
              </button>
            </div>
          </div>
        </div>

        {/* Output Section */}
        <div className="border-2 border-gray-700 rounded-lg h-64 md:h-auto flex items-center justify-center bg-gray-900/50 relative overflow-hidden">
          {loadingState === LoadingState.LOADING && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 z-10">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
            </div>
          )}
          
          {processedImage ? (
             <div className="relative w-full h-full group">
                <img src={processedImage} alt="Processed" className="h-full w-full object-contain" />
                <a 
                  href={processedImage} 
                  download="gemini-edit.png"
                  className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Download
                </a>
             </div>
          ) : (
            <div className="text-gray-500 text-sm">AI Output will appear here</div>
          )}
        </div>
      </div>
      
      {loadingState === LoadingState.ERROR && (
        <div className="mt-4 p-3 bg-red-900/30 text-red-300 rounded text-sm text-center">
          Failed to process image. Please try again with a different prompt or image.
        </div>
      )}
    </div>
  );
};

export default ImageEditor;
