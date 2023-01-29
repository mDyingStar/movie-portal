<div align="center">
  <img src="https://user-images.githubusercontent.com/70911193/214497485-dc0ccc11-3e78-4311-9ddb-0451abcc65a5.png">
</div>

The application was launched to train the developer's personal skills in the full-stack area, specifically in the front-end. The movie portal always retrieves the latest film information from a public database through an API provided by https://developers.themoviedb.org/3. The developer wants to share the opportunity to improve their skills in the full-stack area with others, and therefore makes the project available as an open-source project.

The latest version of the master branch can be accessed at this link: https://mdyingstar.github.io/movie-portal/
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
3. For local development, it is necessary for you to register an account at https://www.themoviedb.org/ and thus receive an API key. Once a CI/CD pipeline is set up and the website is hosted in the cloud, the owner of the repository will store an API key for the production environment in a cloud key-value store.
Please do not share or push your API key to prevent potential abuse.

4. After Registering an account you find your API key under settings:
![image](https://user-images.githubusercontent.com/70911193/215284913-90e04ab8-3c09-4fe9-bd2c-5d3d3b49fa87.png)

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
