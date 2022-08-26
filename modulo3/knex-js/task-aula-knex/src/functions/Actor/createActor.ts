import connection from "../../connection";

export const createActor = async (
    id: number,
    name: string,
    salary: number,
    birth_date: Date,
    gender: string,
    fav_ice_cream_flavor: string
  ): Promise<void> => {
    await connection
      .insert({
        id: id,
        name: name,
        salary: salary,
        birth_date: birth_date,
        gender: gender,
        fav_ice_cream_flavor: fav_ice_cream_flavor
      })
      .into("Actor");
  };