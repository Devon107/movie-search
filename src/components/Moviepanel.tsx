const placeholder = '300x450.svg'


const Moviepanel = (movies: any) => {
    if (movies?.length === 0) return(<>No hay resultados</>)
    return (
        <div className="moviepanel">
            {movies?.movies.map((movie: any) => (
                <article className="movie" key={movie.id}>
                    <h3>{movie.title}</h3>
                    <p>{movie.year}</p>
                    <picture>
                        <source type="image/webp" srcSet={movie.image === 'N/A' ? placeholder: movie.image}/>
                        <img loading="lazy" src={placeholder} alt="movie title banner"/>
                    </picture>
                </article>
            ))}
        </div>
    );
};

export default Moviepanel;