import connection from "../../connection";

export const createMovie = async (
    id: number,
    title: string,
    synopsis: string,
    release_Date: Date,
    evaluation: number,
    playing_limit_date: Date
  ) => {
    await connection
      .insert({
        id: id,
        title: title,
        synopsis: synopsis,
        release_Date: release_Date,
        evaluation: evaluation,
        playing_limit_date: playing_limit_date,
      })
      .into("Movie");
  };