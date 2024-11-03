# Holiday Country

## Description

`holiday-country` is an npm package that allows you to fetch country-specific holidays by year. It retrieves holiday data from a JSON repository hosted on AWS S3.

## Installation

You can install this package via npm:

```bash
npm install holiday-country
```

## Usage

To use the `getHolidays` function, you need to import it and call it with the country code and the desired year. Here’s an example:

```javascript
import { getHolidays } from "holiday-country";

(async () => {
  try {
    const holidays = await getHolidays("lk", 2024);
    console.log(holidays);
  } catch (error) {
    console.error(error.message);
  }
})();
```

### Country Codes

You can find the list of country codes at the following URL:

[Country Codes JSON](https://lkholidays.s3.ca-central-1.amazonaws.com/codes/codes.json)

This will help users find the appropriate country code to use when calling the `getHolidays` function. 

## Contributing

We welcome contributions! If you’d like to contribute to the project, please fork the repository and submit a pull request. Feel free to open issues for bugs or feature requests.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

```
