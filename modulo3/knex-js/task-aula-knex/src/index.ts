import app from "./app"
import avgSalaryByGenderReq from "./endpoints/avgSalaryByGenderReq"
import countByGender from "./endpoints/countByGender"
import createActorReq from "./endpoints/createActorReq"
import createMovieReq from "./endpoints/createMovieReq"
import deleteActorReq from "./endpoints/deleteActorReq"
import getActorByIdReq from "./endpoints/getActorByIdReq"
import getActorByName from "./endpoints/getActorByName"
import getAllActors from "./endpoints/getAllActors"
import getAllMoviesLimitedReq from "./endpoints/getAllMoviesLimitedReq"
import getMovieByStringReq from "./endpoints/getMovieByStringReq"
import updateSalaryReq from "./endpoints/updateSalaryReq"

//ENDPOINTS API
app.get("/allactors", getAllActors ) // Select * from Actor
app.get("/actor/:id", getActorByIdReq) //SELECT
app.get("/actors/:name", getActorByName ) // SELECT * FROM Actor WHERE name = '${name}'
app.get("/actor", countByGender ) // SELECT * FROM Actor WHERE gender = '${gender}'
app.post("/actor", createActorReq )  //INSER INTO VALUES
app.put("/actor", updateSalaryReq) //UPDATE WHERE
app.delete("/actor/:id", deleteActorReq) //DELETE ACTOR
app.get("/average", avgSalaryByGenderReq) //AVG
app.post("/movie", createMovieReq) //CREATE
app.get("/movie/all", getAllMoviesLimitedReq) //SELECT * FROM Movie LIMIT 15
app.get("/movie/search", getMovieByStringReq) // SELECT * FROM Movie WHERE title or synopsis LIKE "%${string}%" ORDER BY release_Date

