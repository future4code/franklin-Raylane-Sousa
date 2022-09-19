import connection from "../../connection";

export const getMovieByString = async (string: string): Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Movie WHERE title or synopsis LIKE "%${string}%" ORDER BY release_Date
    `);
  
    return result[0];
  };