export const goToHome = (navigate) => {
    navigate("/");
};

export const goToPopularMovie = (navigate) => {
    navigate("/movie/popular");
};

export const goTopMovies = (navigate) => {
    navigate("/movie/top_rated");
};

export const goToMovieDetail = (navigate, id) => {
    navigate(`movie/${id}`)
}

export const goBack = (navigate) => {
    navigate(-1)
}

export const goAhead = (navigate) => {
    navigate(-1)
}