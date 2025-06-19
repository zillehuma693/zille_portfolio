import { Helmet } from "react-helmet";

const Resume = () => {
  return (
    <div className="min-h-screen pt-20 pb-10 bg-gray-100 text-center px-4">
      <Helmet>
        <title>Zillehuma | Resume</title>
        <meta
          name="description"
          content="View and download the latest resume of Zillehuma, a frontend developer skilled in React and Tailwind CSS."
        />
      </Helmet>

      <h2 className="text-3xl font-bold mb-6">📄 My Resume</h2>

      {/* Keep PDF at full size but remove black border using background and padding */}
      <div className="mx-auto w-full max-w-screen-md bg-gray-200 p-1 rounded-md shadow">
        <iframe
          src="/Zillehuma.pdf#toolbar=0"
          title="Zillehuma Resume"
          className="w-full h-[90vh] rounded bg-white"
          frameBorder="0"
        ></iframe>
      </div>

      {/* Better padded Download Button */}
     <div className="mt-8 mb-16">
  <a
    href="/Zillehuma.pdf"
    download
    className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
  >
    👇 Download Resume
  </a>
</div>
    </div>
  );
};

export default Resume;
