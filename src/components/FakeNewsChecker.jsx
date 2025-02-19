import { useState } from "react";
import ReactMarkdown from "react-markdown";

const FakeNewsChecker = () => {
  const [source, setSource] = useState("");
  const [headline, setHeadline] = useState("");
  const [content, setContent] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [useImage, setUseImage] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("source", source);
      formData.append("headline", headline);
      formData.append("content", content);
      if (file) {
        formData.append("file", file);
      }

      const response = await fetch("https://fakenewzz.onrender.com/generate", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResult(data.response);
    } catch (error) {
      console.error("Error verifying news:", error);
      setResult("Error");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[600px] p-10">
      <div className="text-center">
        <span className="bg-neutral-900 text-red-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Fake News Checker
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Verify {" "}
          <span className="bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text">
            News Authenticity
          </span>
        </h2>
      </div>
      <div className="mt-10 lg:mt-20 max-w-3xl mx-auto">
        {!result ? (
          <>
            <div className="flex items-center mb-6">
              <label className="mr-2 text-white">Use Image:</label>
              <button
                onClick={() => setUseImage(!useImage)}
                className={`w-12 h-6 flex items-center bg-gray-600 rounded-full p-1 transition duration-300 ${useImage ? "bg-red-500" : "bg-gray-700"}`}
              >
                <div className={`bg-white w-4 h-4 rounded-full shadow-md transform ${useImage ? "translate-x-6" : "translate-x-0"}`}></div>
              </button>
            </div>
            {!useImage ? (
              <>
                <input
                  type="text"
                  placeholder="Source (URL, file, platform)"
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
                  className="w-full p-3 mb-6 border border-neutral-700 rounded bg-neutral-900 text-white"
                />
                <input
                  type="text"
                  placeholder="Headline"
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                  className="w-full p-3 mb-6 border border-neutral-700 rounded bg-neutral-900 text-white"
                />
                <textarea
                  placeholder="Content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full p-3 mb-6 border border-neutral-700 rounded bg-neutral-900 text-white h-40"
                ></textarea>
              </>
            ) : (
              <div className="flex items-center justify-center w-full mb-6">
                {preview ? (
                  <div className="relative">
                    <img src={preview} alt="Uploaded preview" className="w-full h-64 object-cover rounded-lg" />
                    <button
                      onClick={() => {
                        setFile(null);
                        setPreview(null);
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                      </svg>
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
                  </label>
                )}
              </div>
            )}
            <button
              onClick={handleSubmit}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded text-lg"
              disabled={loading}
            >
              {loading ? "Checking..." : "Check Authenticity"}
            </button>
          </>
        ) : (
          <div className="mt-6 p-4 bg-neutral-900 border border-red-500 rounded-lg text-white">
            <h3 className="text-lg font-bold text-red-500 mb-4">Analysis Result:</h3>
            <ReactMarkdown className="prose prose-invert">{result}</ReactMarkdown>
            <button
              onClick={() => setResult("")}
              className="mt-6 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FakeNewsChecker;