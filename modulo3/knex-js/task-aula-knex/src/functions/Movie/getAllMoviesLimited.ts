import connection from "../../connection";

export const getAllMoviesLimited = async (): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Movie LIMIT 15
    `);
  
    return result[0];
  };