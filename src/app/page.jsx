// app/page.jsx

export const metadata = {
  title: "Portfolio - Home",
  description: "Home page of my portfolio.",
};

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Hero Section */}
      <section className="mb-24 text-center">
        <h2 className="text-4xl font-semibold mb-4 text-gray-900 dark:text-white">Hello, I'm Anthony Escobedo 👋</h2>
        <p className="text-lg max-w-xl mx-auto text-gray-700 dark:text-gray-300">
          This is my portfolio page where I'll showcase my projects and skills. I'm passionate about web development and
          design, and I love creating beautiful and functional websites.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-24">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded p-4 shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">Shepherd's Guide</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Web application keeps track of students at risk of failing courses and sends messages in Canvas. Backend
              built with Django with SQLite. Frontend built with React.
            </p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded p-4 shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">Electronic Invoicing</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Obtained certification for official electronic invoicing provider from SUNAT, national organization for
              customs and taxation. Developed invoicing software for parking ticketing to include capabilities for
              electronic invoicing
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Get in Touch</h3>
        <p className="text-gray-700 dark:text-gray-300">Email: are305@ensign.edu</p>
      </section>
    </main>
  );
}
