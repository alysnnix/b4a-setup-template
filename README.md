# Back4App Parse Server with React Client

This project is a template for deploying a Parse Server application on Back4App, with a React client built using Vite. The backend is designed to be easily deployable and includes a Docker setup for local development.

![image](https://github.com/user-attachments/assets/14b55853-6239-4b06-80df-15962f538af0)


## GitHub Secrets Configuration

To enable the deployment process for this project, you need to configure three secrets in your GitHub repository. These secrets are required for authentication and proper integration with the deployment system.

### Required Secrets

1. **B4A_EMAIL**  
   The email address associated with your B4A account.

2. **B4A_APP_ID**  
   The application ID of your B4A project.

3. **B4A_ACCOUNT_KEY**  
   The account key for your B4A account.

### Steps to Add Secrets

1. Go to your GitHub repository.
2. Navigate to **Settings** > **Secrets and variables** > **Actions**.
3. Click on **New repository secret**.
4. Add each secret with its corresponding name and value:
   - `B4A_EMAIL`
   - `B4A_APP_ID`
   - `B4A_ACCOUNT_KEY`
5. Save each secret.

### Deploying the Project

After setting up the secrets, simply create a new release in your GitHub repository. This will trigger the deployment process, and your project will be deployed to Back4App.

### Project Structure

The client-side application for this project is located in the `/client` directory. This directory contains the source code for the React application, which is built using Vite for fast development and optimized builds. The application serves as the front-end interface for interacting with the Back4App backend.

Key files and directories in `/client`:
- **`src/`**: Contains the main application code, including components, styles, and assets.
- **`public/`**: Holds static assets that are served directly without processing.
- **`vite.config.ts`**: Configuration file for Vite, specifying build and development settings.
- **`package.json`**: Defines project dependencies, scripts, and metadata.

To start the development server, navigate to the `/client` directory and run `npm run dev`. This will launch the application locally with hot module replacement (HMR) enabled.

### Testing the Backend Locally

To test the backend locally, follow these steps:

1. **Start MongoDB using Docker Compose**  
   Navigate to the root directory of the project and run the following command to start a MongoDB instance:
   ```bash
   docker-compose up -d
   ```

2. **Install Backend Dependencies**  
   In the root directory, install the required backend packages by running:
   ```bash
   npm run install-backend-packages
   ```

3. **Start the Parse Server**  
   After installing the dependencies, start the Parse Server by running:
   ```bash
   npm run server
   ```

Once the server is running, your Parse Server will be available locally for development and testing.
