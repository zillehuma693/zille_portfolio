import { useState } from "react";

const AboutGenerator = () => {
  const [inputs, setInputs] = useState({
    name: "",
    profession: "",
    skills: "",
    funFact: "",
  });

  const [generatedBio, setGeneratedBio] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const generateBio = () => {
    setLoading(true);
    setGeneratedBio("");

    // Simulate API call with timeout
    setTimeout(() => {
      const bio = `Hi, I'm ${inputs.name}, a passionate ${inputs.profession} skilled in ${inputs.skills}. Fun fact: ${inputs.funFact}. I love creating web experiences that users enjoy!`;
      setGeneratedBio(bio);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">AI Bio Generator</h2>

      <div className="space-y-4 mb-6">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={inputs.name}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
        <input
          type="text"
          name="profession"
          placeholder="Your profession"
          value={inputs.profession}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
        <input
          type="text"
          name="skills"
          placeholder="Your skills (comma separated)"
          value={inputs.skills}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
        <input
          type="text"
          name="funFact"
          placeholder="Fun fact about you"
          value={inputs.funFact}
          onChange={handleChange}
          className="w-full p-3 border rounded"
        />
      </div>

      <button
        onClick={generateBio}
        disabled={loading}
        className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 disabled:opacity-50 w-full"
      >
        {loading ? "Generating..." : "Generate Bio"}
      </button>

      {generatedBio && (
        <div className="mt-6 p-4 border rounded bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
          <h3 className="font-semibold mb-2">Generated Bio:</h3>
          <p>{generatedBio}</p>
        </div>
      )}
    </div>
  );
};

export default AboutGenerator;
