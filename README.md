# Persona Generator Frontend

This is the frontend application for the Persona Generator project. The application is built with **Next.js** and integrates with a backend API to generate structured personas based on user input. It uses **Tailwind CSS** for styling.

## Features

- Input form for role title, LinkedIn profiles, and industry context.
- Integration with the backend API for persona generation.
- Dynamic display of persona data with hierarchical structure.
- Error handling for invalid inputs or server errors.
- Responsive design using Tailwind CSS.

## Prerequisites

- **Node.js** (v16 or later)
- **npm** or **yarn**

## Getting Started

### 1. Clone the Repository

```bash
git clone git@github.com:Animesh-chaturvedi/persona-featurely-frontend.git
cd persona-generator-frontend
```

### 2. Install Dependencies

Install the required packages:

```bash
npm install
# or
yarn install
```


### 4. Run the Development Server

Start the application in development mode:

```bash
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Usage

### Input Form

The input form accepts:
- **Role Title**: The title of the persona (e.g., `Frontend Developer`).
- **LinkedIn Profiles**: A comma-separated list of LinkedIn profile URLs.
- **Industry Context**: The industry or domain for the persona.

### Persona Display

After submitting the form, the application sends a request to the backend API and displays the generated persona in a structured format.

## API Integration

The frontend communicates with the backend API via the `/api/persona/generate` endpoint. Ensure the backend server is running and accessible.

Example request payload:

```json
{
  "roleTitle": "Frontend Developer",
  "linkedinProfiles": ["https://linkedin.com/in/example1"],
  "industryContext": "Tech"
}
```

## Styling

This project uses **Tailwind CSS** for styling. The global styles are defined in the `styles/globals.css` file. To customize styles, modify the Tailwind configuration or add custom classes in your components.

## Deployment

### Build for Production

Generate a production build:

```bash
npm run build
# or
yarn build
```

### Start the Production Server

Start the application in production mode:

```bash
npm run start
# or
yarn start
```

## Troubleshooting

### Common Issues

#### 1. CORS Errors
Ensure the backend server allows requests from the frontend domain. Configure CORS settings in the backend.

#### 2. API Endpoint Issues
Verify the `NEXT_PUBLIC_API_BASE_URL` environment variable is correctly set.

#### 3. Backend Connection Errors
Check if the backend server is running and accessible.


## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
