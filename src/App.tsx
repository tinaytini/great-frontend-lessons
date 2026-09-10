import TextInputPage from './pages/TextInputPage';

function App() {
  return (
    <div className="flex min-h-screen flex-row place-items-center bg-[radial-gradient(circle_at_top_left,rgba(88,101,242,0.18),transparent_34rem),linear-gradient(145deg,#fdfdff_0%,#eef1f8_100%)]">
      <main className="flex-1 border-l-2 place-items-center">
        <TextInputPage/>
      </main>
    </div>
  );
}

export default App;
