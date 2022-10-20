export const goHome= (navigate) => {
    navigate("/")
}

export const goToMovieId = (navigate, id) => {
    navigate(`movie/${id}`)
} 

export const goToSearch = (navigate) => {
    navigate("search")
}
 