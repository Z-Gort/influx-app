# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

------------------------------------
Docker Info: 

Command: docker compose build
Behavior: Builds docker image

Command: docker compose up
Behavior: Runs the containers in the foreground, attaching the terminal to the container's output. You can see the logs and interact with the container directly.
Stopping: To stop the containers, you would use CTRL + C in the terminal where they are running. This will shut down all services defined in the docker-compose.yml file.
Use Case: Useful for debugging or when you want to monitor logs and see real-time output from the services

Command: docker compose up -d
Behavior: Runs the containers in the background (detached), freeing up the terminal for other tasks. You won’t see the logs in the terminal unless you explicitly check them with docker-compose logs.
Stopping: You stop the containers with docker-compose down or docker-compose stop.
Use Case: Ideal for running services in the background, such as long-running tasks or services that don't need real-time monitoring.