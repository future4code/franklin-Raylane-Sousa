
export const GoToPlayLists = (navigate) => {
    navigate("/")

}

export const goToCreate = (navigate) => {
    navigate("/create")
}

export const goToDetailTrack = (navigate, id) => {
    navigate(`${id}/tracks`)
}
