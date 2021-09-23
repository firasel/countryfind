# Country Finds

# [Live View](https://countryfinds.netlify.app/)

# [Backend Code Repository](https://github.com/firasel/countryfindbackend)

## Features

- You can search any country
- If you click any country card then redirect other components and you see the country flag and country details
- You can see this country news after click the news button

## Using Technology

- React
- React-Router-Dom
- Bootstrap

## Receiving data from public APIs

### For ALL Countries:

It's return array of objects for all country details

```sh
https://api.worldbank.org/v2/country/all?per_page=300&format=json
```

### For One Country:

```sh
https://api.worldbank.org/v2/country/CountryCode?format=json
```

### For One Country News:

It's return an array of objects for the country all news or if not found news data then return an error

```sh
https://api-countryfinds.herokuapp.com/news/CountryCode
```

### For Country Flag:

```sh
https://flagcdn.com/256x192/CountryCode.png
```
