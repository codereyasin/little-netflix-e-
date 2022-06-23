import Hero from "./app/components/hero";
import MovieList from "./app/components/movieList";
import Nav from "./app/components/nav";

function App() {
  return (
    <div className="">
     <div className="max-w-4xl container mx-auto">
     <Nav />
     <Hero />
     <MovieList 
     title="Top Rated🔥" 
     filter="short_by=rating"
     carousel={true}
     />
     <MovieList com
     title="Drama🔥" 
     filter="genre=drama"
     carousel={true}
     duration={1000}
     speed={1500}

     />
     <MovieList 
     title="Action🔥" 
     filter="genre=action"
     carousel={false}
     />
     <MovieList 
     title="Romance🔥" 
     filter="genre=Romance"
     carousel={true}
     />
     <MovieList 
     title="Fantasy🔥" 
     filter="genre=fantasy"
     carousel={true}
     />
     <MovieList 
     title="Documentary🔥" 
     filter="genre=documentary"
     carousel={true}
     />
     </div>
     <div className="text-white text-center py-4 text-lg">
      Build With 💝 by <a href="https://www.facebook.com/EyAsiN.ArAfAt.XYZ/"><span className="font-semibold text-[30] text-center">Eaysin Arafat</span></a>
     </div>
    </div>
  );
}

export default App;
