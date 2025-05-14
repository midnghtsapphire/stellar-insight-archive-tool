
import DiagramCard from "@/components/DiagramCard";

const Index = () => {
  const diagrams = [
    {
      title: "System Overview",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600",
      imageAlt: "Colorful software or web code on a computer monitor",
      description: "High-level architecture of the project.",
      codeOrNotes: `// Main system component\nfunction System() {\n  // ...\n}`
    },
    {
      title: "Module Interconnection",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600",
      imageAlt: "Macro photography of black circuit board",
      description: "How different modules connect and interact.",
      codeOrNotes: `interface ModuleA {\n  connectTo(moduleB: ModuleB): void;\n}`
    },
    {
      title: "Deployment Setup",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600",
      imageAlt: "A MacBook with lines of code on its screen on a busy desk",
      description: "Diagram illustrating the deployment environment.",
      codeOrNotes: `// server_setup.sh\necho "Starting deployment..."`
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">Stellar Insight Archive Tool</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">Your Inventions, Documentation, and Kickstarter Assets</p>
      </header>

      <section id="setup-diagrams">
        <h2 className="text-3xl font-semibold text-center text-gray-700 dark:text-gray-200 mb-8">Setup Diagrams</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {diagrams.map((diagram, index) => (
            <DiagramCard
              key={index}
              title={diagram.title}
              imageUrl={diagram.imageUrl}
              imageAlt={diagram.imageAlt}
              description={diagram.description}
              codeOrNotes={diagram.codeOrNotes}
            />
          ))}
        </div>
      </section>

      {/* You can add more sections here for documentation, images, etc. */}
      {/* For example:
      <section id="documentation" className="mt-16">
        <h2 className="text-3xl font-semibold text-center text-gray-700 dark:text-gray-200 mb-8">Documentation</h2>
        {/* ... content ... */}
      {/* </section> */}
    </div>
  );
};

export default Index;
