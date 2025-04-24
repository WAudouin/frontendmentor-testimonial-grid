import "./App.css";
import TestimonialCard from "./components/TestimonialCard";
import { testimonials_data } from "./data";

function App() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {testimonials_data.map((t) => (
        <TestimonialCard testimonial={t} />
      ))}
    </main>
  );
}

export default App;
