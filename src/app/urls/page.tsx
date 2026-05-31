import Link from "next/link";

async function fetchUrls() {
  const response = await fetch("/api/urls", {
    cache: "force-cache",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch Urls");
  }
  return response.json();
}

export default async function UrlList() {
  let urls;
  try {
    urls = await fetchUrls();
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="p-10 bg-white rounded-lg shadow-2xl max-w-4xl w-full">
          <h1 className="text-3xl font-bold mg-6 text-center text-gray-700">
            Error
          </h1>
          <p className=" text-center text-red-500">Failed to load URLs.</p>
        </div>
      </div>
    );
  }

  return (
    <div className=" font-mono min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className=" p-10 bg-white rounded-l-2xl shadow-2xl max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          All Short Urls
        </h1>
        <div className="flex flex-col overflow-x-auto items-center justify-center">
          <Link
            href="/"
            className=" text-center items-center bg-amber-300  font-sans text-blue-950  p-1"
          >
            Go To HomePage
          </Link>
          <table className="table table-zebra text-gray-700 w-full">
            <thead className="text-gray-900">
              <tr>
                <th>Original URL</th>
                <th>Short URL</th>
              </tr>
            </thead>
            <tbody>
              {urls.urls &&
                urls.urls.map(
                  (url: {
                    _id: string;
                    originalUrl: string;
                    shortUrl: string;
                  }) => {
                    return (
                      <tr key={url._id}>
                        <td>{url.originalUrl}</td>
                        <td>
                          <a
                            href={`/urls/${url.shortUrl}`}
                            target="_blank"
                            className="link link-primary"
                          >
                            {process.env.NEXT_PUBLIC_BASE_URL
                              ? `${process.env.NEXT_PUBLIC_BASE_URL}/urls/${url.shortUrl}`
                              : `/urls/${url.shortUrl}`}
                          </a>
                        </td>
                      </tr>
                    );
                  },
                )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
