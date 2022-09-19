import connection from "../../connection";

export const averageSalaryByGender = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });
  
    return result[0].average.toFixed(2);
  };