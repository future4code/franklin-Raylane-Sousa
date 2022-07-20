export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goToAdminHomePage = (navigate) => {
    navigate("admin/trips/list")
}


export const goToDetailTrip = (navigate, id) => {
    navigate(`/admin/trips/${id}`)
}

export const goToLogin = (navigate) => {
    navigate("/login")
}
export const goToAppFormPage = (navigate) => {
    navigate("/appform")
}

export const goToListTripPage = (navigate) => {
    navigate("/lista")
}

export const goToCreateTrip = (navigate) => {
    navigate("/admin/trips/create")
}
