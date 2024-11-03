# Holiday Country

A simple JavaScript package to fetch country-specific holidays by year. This package utilizes the S3-hosted JSON repository of holidays for different countries.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Country Codes](#country-codes)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install the package using npm:

```bash
npm install holiday-country
```

## Usage

Once installed, you can use the package to fetch holidays for a specific country and year. Here’s an example:

```javascript
import { getHolidays } from "holiday-country";

(async () => {
  try {
    const holidays = await getHolidays("LK", 2024);
    console.log(holidays);
  } catch (error) {
    console.error(error.message);
  }
})();
```

### Parameters

- `countryCode` (String): The country code for which you want to fetch holidays (case-insensitive).
- `year` (Number): The year for which you want to fetch holidays.

### Country Codes

You can find the list of country codes at the following URL:

[Country Codes JSON](https://lkholidays.s3.ca-central-1.amazonaws.com/codes/codes.json)

## Contributing

Contributions are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Ensure that your changes pass any relevant tests.
5. Submit a pull request.

Feel free to report any issues or request features in the Issues section of the repository.

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

---

### Additional Notes

- **JSON File**: If you choose to include the `country-codes.json` file, ensure you provide information on where it is located in your project structure.
- **Updating Information**: Remember to keep the README updated as you add more features or change functionality.
