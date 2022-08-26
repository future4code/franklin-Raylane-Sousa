import connection from "../../connection";

export const deleteActorById = async (id: string): Promise<void> => {
    await connection("Actor")
    .delete()
    .where("id", id);
  }; 

