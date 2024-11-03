import axios from "axios";

const BASE_URL = "https://lkholidays.s3.ca-central-1.amazonaws.com/jsons";

export const getHolidays = async (countryCode, year) => {
  try {
    const url = `${BASE_URL}/${countryCode.toUpperCase()}.json`;

    const response = await axios.get(url);

    const holidayData = response.data.find(
      (data) => data.year === year.toString()
    );

    if (!holidayData) {
      throw new Error(
        `No holidays found for ${countryCode} in the year ${year}`
      );
    }

    return holidayData.holidays;
  } catch (error) {
    console.error(
      `Error fetching holidays for ${countryCode} in the year ${year}:`,
      error.message
    );
    throw error;
  }
};
