# story-generator

This is a frontend project built with React. It utilizes the OpenAI API to generate humorous stories based on provided keywords. The generated stories are displayed on the frontend.

## Prerequisites

Before running this project, make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Getting Started

1. Clone the repository:

   ```shell
   git clone https://github.com/DishaGup/story-generator.git
   ```

2. Navigate to the project directory:

  - frontend
    cd view
  
3. Install the dependencies:
  
  - backend
   ```shell
    npm install
   ```
  - frontend
    npm install

4. Create an OpenAI account and obtain an API key. Update the `.env` file with your API key:

   ```
   SECRET_KEY_OPENAI=your-api-key
   ```

5. Start the development server:

   ```shell
   npm start
   ```

6. Open your browser and visit `http://localhost:3000` to see the application running.
   

## Usage

1. In the frontend, enter a list of keywords separated by commas.

2. Select a language for the story.

3. Click the "Generate Story" button.

4. The generated story will be displayed on the screen.

## Configuration

The configuration for the OpenAI API is stored in the `.env` file. You can modify the `.env` file to change the API key or adjust other API settings if needed.


## Backend Routes
The backend of this application is built with Express and provides the following routes:

POST /story: Generates a humorous story based on the provided keywords and language.
Please refer to the backend/index.js file for the implementation details of these routes.


## Contributing

Contributions are welcome! If you find any issues or would like to add new features, feel free to open a pull request.

## SnapShots 

![Screenshot (278)](https://github.com/DishaGup/story-generator/assets/115460391/8fe33048-9620-4b82-9711-d6d927219c50)
