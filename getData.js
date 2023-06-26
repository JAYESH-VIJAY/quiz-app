import jsonData from "../data/questions.json";

export const handler = async (event, context) => {
  try {
    return {
      statusCode: 200,
      body: JSON.stringify(jsonData),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};
