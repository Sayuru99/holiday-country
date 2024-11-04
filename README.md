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

Here’s an updated contribution section that includes instructions for adding country-specific JSON files in the `countries` folder:

---

## Contributing

We welcome contributions! If you’d like to contribute to the project, please follow these steps:

1. **Fork the Repository**: Click on the "Fork" button at the top right corner of the repository page to create your own copy of the project.

2. **Clone the Repository**: Clone your forked repository to your local machine using the following command:

   ```bash
   git clone https://github.com/your-username/holiday-country.git
   ```

   Replace `your-username` with your GitHub username.

3. **Add Country Data**: In the `countries` folder, create a JSON file for your country. Name the file according to the country code (e.g., `LK.json` for Sri Lanka) and include the holiday data for that country in the JSON format.

4. **Update the JSON File**: Make sure your JSON file follows the existing structure. It should contain the relevant holiday information for the specified year. For example:

   ```json
   {
     "2024": [
       {
         "date": "2024-01-01",
         "holiday": "New Year's Day"
       },
       {
         "date": "2024-02-04",
         "holiday": "Independence Day"
       }
       // Add more holidays as needed
     ]
   }
   ```

5. **Commit Your Changes**: After adding your JSON file, commit your changes with a descriptive message:

   ```bash
   git add countries/LK.json
   git commit -m "Add holiday data for Sri Lanka"
   ```

6. **Push to Your Fork**: Push your changes to your forked repository:

   ```bash
   git push origin main
   ```

7. **Create a Pull Request**: Go to the original repository and click on the "Pull Requests" tab. Click on "New Pull Request," then select your forked repository and branch. Add a description of your changes and submit the pull request.

Feel free to open issues for bugs or feature requests. Thank you for contributing!

---

This updated contribution guide should help users understand how to add country-specific holiday data to your project.
## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

```
