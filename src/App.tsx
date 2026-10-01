import { Routes, Route } from 'react-router';
// import { TestimonialCard } from './components/TestimonialCard';
// import { HomePage } from './pages/HomePage';
// import { Navbar } from './components/Navbar';
// import TextInputPage from './pages/TextInputPage';
import { BlogCard } from './pages/BlogCard'

function App() {
  return (
    <div className="flex min-h-screen flex-row place-items-center bg-[radial-gradient(circle_at_top_left,rgba(88,101,242,0.18),transparent_34rem),linear-gradient(145deg,#fdfdff_0%,#eef1f8_100%)]">
      {/* <Navbar /> */}
      <main className="flex-1 border-l-2 place-items-center">
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/"element={<BlogCard />} />
          {/* <Route path="/testimonialCard" element={<TestimonialCard />} />
          <Route path="/inputText" element={<TextInputPage />} />
          <Route path="/blogCard" element={<BlogCard />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
