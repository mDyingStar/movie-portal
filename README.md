<div align="center">
  <img src="https://user-images.githubusercontent.com/70911193/214497485-dc0ccc11-3e78-4311-9ddb-0451abcc65a5.png">
</div>

The application was launched to train the developer's personal skills in the full-stack area, specifically in the front-end. The movie portal always retrieves the latest film information from a public database through an API provided by https://developers.themoviedb.org/3. The developer wants to share the opportunity to improve their skills in the full-stack area with others, and therefore makes the project available as an open-source project.

## Movie-Portal

The movie portal can display all film trends based on selectable parameters. Additionally, there is the option to play various trailers.
Currently, the functionality is still under development and will offer many more possibilities in the future.

<div align="center">
  <img src="https://user-images.githubusercontent.com/70911193/214502276-e4b88432-8ada-46fd-8205-b1d579d4521c.png">
</div>

## Installation

1. Clone or fork the project. <br>
2. Run this command in the IDE or project root to install the required node modules:
```
npm i
```
3. In order for the application to work locally, you need an API key for the movie database. You can get this API key by registering a user on https://www.themoviedb.org/. In the first deployed release, the key will be provided by the owner.
4. You find the API Key in your created user under: <br>
Settings -> API -> API Key (v3 auth) <br>
Place this API Key under environment.ts:
```
apiKey:<<api-key>>
```
6. Start the application on localhost
```
npm run start
```

## Contributing

Everyone is welcome and appreciated to help with my project. If you would like to contribute, please read through https://github.com/mDyingStar/movie-portal/blob/master/CONTRIBUTING.md before getting started.
