
# HiddenHive

### An AI-Powered Platform for Open Discussions, Anonymous Expression, and Community Conversations.

<p align="center">
  <strong>Think freely. Express openly. Discover different perspectives.</strong>
</p>

---

## About the Project

**HiddenHive** is an AI-powered discussion platform designed to create a space where people can express their thoughts, share opinions, discover different perspectives, and participate in meaningful conversations.

The platform focuses on making discussions more accessible by allowing users to create topics and engage with others without requiring traditional identity-based social interactions.

Unlike conventional social media platforms that emphasize personal profiles, followers, and popularity, HiddenHive focuses on the ideas and conversations themselves.

The project combines a modern React frontend, a serverless backend architecture, a cloud database, and AI-powered content processing to deliver a lightweight and scalable discussion experience.

This repository contains both the frontend and backend applications in a single monorepo.

---

## Table of Contents

1. Problem Statement
2. Our Solution
3. Project Objectives
4. Core Features
5. Technology Stack
6. System Architecture
7. How HiddenHive Works
8. AI Integration
9. Backend Architecture
10. Database Design
11. API Documentation
12. Project Structure
13. Installation and Setup
14. Environment Configuration
15. Running the Project Locally
16. Deployment
17. Security and Privacy Considerations
18. Future Scope
19. Contribution Guidelines
20. Project Information

---

# 1. Problem Statement

Social media has made communication easier, but meaningful and open discussions are still difficult to find.

Many existing platforms emphasize:

- Personal identity and social profiles.
- Followers, likes, and popularity.
- Content visibility based on engagement.
- Public recognition and social validation.
- Algorithm-driven content consumption.

These factors can discourage people from expressing honest opinions, asking questions, or discussing subjects they genuinely care about.

People may hesitate to participate in conversations because of social pressure, fear of judgment, or the expectation that their personal identity will be associated with everything they publish.

Another challenge is content organization.

Traditional social platforms often prioritize short-form content and engagement rather than structured discussions around specific topics.

### The Problem We Want to Solve

We want to create a platform where:

1. People can express their thoughts more comfortably.
2. Discussions are centered around ideas rather than personal popularity.
3. Users can explore topics and discover different perspectives.
4. Conversations can develop through comments and responses.
5. AI can assist in maintaining content quality and organizing discussions.

---

# 2. Our Solution

HiddenHive addresses these challenges through a discussion-focused platform supported by AI-powered content processing.

The platform allows users to:

- Create discussion topics.
- Express their thoughts through descriptions.
- Discover discussions created by other users.
- Open individual discussions.
- Participate through comments and responses.
- Explore AI-generated summaries and categories.

AI integration helps process submitted posts, evaluate content against community guidelines, and generate useful metadata.

The goal is to build an environment where the primary focus is the discussion itself.

### Our Approach

| Traditional Social Platforms | HiddenHive |
|---|---|
| Focus on personal profiles | Focus on discussions |
| Popularity-driven interactions | Idea-centered conversations |
| Content often organized around accounts | Content organized around topics |
| Manual content organization | AI-assisted categorization |
| Conventional content moderation | AI-assisted content moderation |

These are the project's design goals rather than claims that every traditional platform behaves identically.

---

# 3. Project Objectives

The primary objectives of HiddenHive are:

- Build an accessible discussion platform.
- Encourage open expression and meaningful conversations.
- Reduce unnecessary emphasis on personal popularity.
- Use AI to assist with content moderation.
- Automatically generate summaries and topic categories.
- Maintain a scalable backend architecture.
- Separate frontend and backend responsibilities.
- Use cloud infrastructure for database and application hosting.

---

# 4. Core Features

## 4.1 Create Discussion Topics

Users can create new discussion topics by providing:

- A title.
- A detailed description.

When a post is submitted, the backend sends its content for AI processing.

The AI response is used to determine whether the content meets the configured moderation criteria and to generate additional metadata.

## 4.2 AI-Powered Content Processing

HiddenHive integrates an AI model to assist with:

- Content moderation.
- Community guideline evaluation.
- Automatic post summarization.
- Topic categorization.
- Emoji generation.

This reduces the need for users to manually organize every discussion.

## 4.3 Explore Discussions

Users can browse available discussions and explore topics created by other users.

The frontend retrieves posts from the backend API and displays them through reusable React components.

## 4.4 Individual Post View

Each discussion has an individual view containing:

- Post title.
- Full discussion content.
- AI-generated summary.
- Category.
- Associated emoji.
- Creation timestamp.

## 4.5 Comments and Responses

Users can participate in discussions by submitting comments.

The backend stores comments in the database and associates each comment with its corresponding post.

## 4.6 Centralized Backend Architecture

The frontend communicates with a centralized API.

All database operations and AI processing happen on the backend, keeping the frontend independent of database implementation details.

---

# 5. Technology Stack

HiddenHive uses a modern JavaScript and TypeScript ecosystem with serverless cloud infrastructure.

## Frontend

| Technology | Purpose |
|---|---|
| React 19 | Component-based UI development |
| Vite 8 | Development server and production build |
| JavaScript | Frontend application logic |
| CSS3 | Styling and responsive layouts |
| React Router 7 | Client-side navigation |
| Fetch API | HTTP communication with backend |
| Axios | HTTP client dependency |

### Why React?

React allows the application to be divided into reusable components.

Different parts of the platform, such as post creation, discussion cards, post details, and comments, can be developed and maintained independently.

### Why Vite?

Vite provides:

- Fast development startup.
- Hot Module Replacement.
- Optimized production builds.
- Environment variable support.
- Modern frontend tooling.

## Backend

| Technology | Purpose |
|---|---|
| Hono.js | Lightweight API framework |
| TypeScript | Backend application development |
| Cloudflare Workers | Serverless backend execution |
| Cloudflare D1 | Relational database |
| Wrangler | Cloudflare development and deployment CLI |
| Fetch API | External AI API communication |

### Why Hono.js?

Hono is a lightweight web framework designed for modern JavaScript runtimes.

It provides:

- Fast HTTP routing.
- Middleware support.
- Request and response handling.
- TypeScript support.
- Compatibility with Cloudflare Workers.

It allows the backend to expose REST API endpoints without requiring a traditional long-running Node.js server.

### Why Cloudflare Workers?

Cloudflare Workers provides a serverless execution environment.

Benefits include:

- No traditional server management.
- Global execution infrastructure.
- Integration with Cloudflare services.
- Simple deployment workflows.
- Automatic infrastructure scaling.

## Database

| Technology | Purpose |
|---|---|
| Cloudflare D1 | SQL database |
| SQLite | Database engine underlying D1 |
| SQL | Database queries and migrations |

D1 stores discussion posts and their associated comments.

## Artificial Intelligence

| Technology | Purpose |
|---|---|
| Krutrim AI API | AI-powered content processing |
| OpenAI-compatible Chat Completions API format | Model request and response interface |
| gpt-oss-120b | Configured AI model |

The AI integration is performed exclusively by the backend.

---

# 6. System Architecture

HiddenHive follows a frontend-backend architecture with an external AI integration.

```text
                   USER
                     |
                     |
                     v
          +----------------------+
          |  HIDDENHIVE FRONTEND |
          |                      |
          |      React + Vite    |
          +----------------------+
                     |
                     |
              HTTP REST API
                     |
                     v
          +----------------------+
          |  HIDDENHIVE BACKEND  |
          |                      |
          |       Hono.js        |
          |     TypeScript       |
          |  Cloudflare Workers  |
          +----------------------+
                     |
          +----------+-----------+
          |                      |
          v                      v
   +--------------+       +--------------+
   | Cloudflare D1|       |  Krutrim AI  |
   |              |       |              |
   | Posts        |       | Moderation   |
   | Comments     |       | Summaries    |
   | Timestamps   |       | Categories   |
   +--------------+       | Emojis       |
                          +--------------+
```

### Architectural Responsibilities

**Frontend**

- Renders the user interface.
- Collects user input.
- Sends API requests.
- Displays posts and comments.
- Handles loading and error states.

**Backend**

- Exposes REST API endpoints.
- Validates incoming requests.
- Performs database operations.
- Communicates with the AI service.
- Processes AI responses.
- Returns JSON responses.

**Cloudflare D1**

- Stores discussion posts.
- Stores comments.
- Maintains relationships between posts and comments.

**Krutrim AI**

- Evaluates submitted content.
- Assists with moderation.
- Generates summaries.
- Determines categories.
- Generates associated emojis.

---

# 7. How HiddenHive Works

This section explains the application's main workflows.

## 7.1 Creating a Discussion

```text
User
 |
 | Enters title and description
 |
 v
React Frontend
 |
 | POST /api/posts
 |
 v
Hono Backend
 |
 | Validates request
 |
 v
Krutrim AI API
 |
 | Evaluates content
 | Generates summary
 | Generates category
 | Generates emoji
 |
 v
Backend Processes AI Response
 |
 | If accepted
 v
Cloudflare D1
 |
 | Stores post and metadata
 |
 v
Backend Returns JSON
 |
 v
Frontend Displays Success
```

### Step-by-Step Explanation

1. The user opens the post creation form.
2. The user enters a title and description.
3. React sends a POST request to the backend.
4. Hono receives and validates the request.
5. The backend sends the content to Krutrim AI.
6. The AI evaluates the content and generates metadata.
7. The backend checks the AI response and moderation result.
8. If accepted, the post is stored in Cloudflare D1.
9. The backend returns the post ID and generated metadata.
10. The frontend displays the success message.

If the content is rejected, the backend returns an unsuccessful response instead of creating the post.

## 7.2 Fetching All Discussions

```text
Frontend
   |
   | GET /api/posts
   |
   v
Hono Backend
   |
   | SQL SELECT
   |
   v
Cloudflare D1
   |
   | Returns posts
   |
   v
Hono Backend
   |
   | JSON Response
   |
   v
React Frontend
   |
   | Displays discussion cards
   |
   v
User
```

## 7.3 Opening an Individual Discussion

1. The user selects a discussion.
2. The frontend obtains its post ID.
3. The frontend requests `/api/posts/:id`.
4. The backend retrieves the corresponding record.
5. The frontend displays the post details.

## 7.4 Adding a Comment

1. The user enters a comment.
2. The frontend sends a POST request.
3. The backend receives the post ID from the URL.
4. The backend stores the comment in D1.
5. The frontend refreshes the comments list.

---

# 8. AI Integration

AI is an important part of HiddenHive's content-processing workflow.

The project integrates the Krutrim AI API through the backend.

The configured model is:

```text
gpt-oss-120b
```

The backend communicates with the API using the Chat Completions endpoint:

```text
https://cloud.olakrutrim.com/v1/chat/completions
```

## 8.1 Why AI Is Used

The primary objective of AI integration is to improve the quality and organization of discussions.

Instead of treating every post as unstructured text, HiddenHive uses AI to generate additional information that can help users understand and discover discussions.

The AI integration currently serves four primary purposes.

### A. Content Moderation

When a user submits a discussion, its content is sent to the AI model for evaluation against the configured community guidelines.

The model returns a moderation result.

The backend uses that result to decide whether the post can proceed through the creation workflow.

This helps identify content that may violate the platform's community guidelines.

AI moderation is an automated screening mechanism and should not be considered a guarantee that all harmful content will be detected.

### B. Automatic Summarization

Long discussion descriptions can be difficult to scan.

The AI generates a short summary of the submitted content.

This summary is stored with the post and can be displayed when presenting discussion information.

Benefits:

- Faster understanding of discussions.
- Easier content discovery.
- Better readability.
- Reduced effort when browsing longer posts.

### C. Automatic Categorization

The AI determines an appropriate category for the discussion.

For example, discussions may relate to:

- Technology.
- Education.
- Business.
- Entertainment.
- Lifestyle.
- Society.

These are illustrative category examples; actual categories depend on the model's response.

The category is stored in the database alongside the post.

### D. Emoji Generation

The AI also generates an emoji associated with the discussion.

This provides a simple visual representation of the topic.

The generated emoji is stored in the database and returned to the frontend.

## 8.2 AI Processing Workflow

```text
         User Submits Post
                 |
                 v
          Hono Backend
                 |
                 v
          Krutrim AI API
                 |
                 v
          AI Model Processing
                 |
       +---------+---------+
       |                   |
       v                   v
   Moderation          Metadata
   Evaluation          Generation
       |                   |
       |             +-----+------+
       |             |     |      |
       |             v     v      v
       |          Summary Category Emoji
       |             |     |      |
       +-------------+-----+------+
                     |
                     v
              Backend Validation
                     |
             +-------+-------+
             |               |
             v               v
          Rejected         Accepted
             |               |
             v               v
        Error Response   Cloudflare D1
                             |
                             v
                      Success Response
```

## 8.3 AI API Configuration

The backend uses the following API endpoint:

```text
https://cloud.olakrutrim.com/v1/chat/completions
```

The model is configured as:

```text
gpt-oss-120b
```

The backend sends the API request with:

- Authorization header.
- API key.
- Model identifier.
- System instructions.
- User-submitted content.
- Model generation parameters.

The current integration uses a temperature of `0.2` and a maximum token limit of `350`.

These parameters control the model generation behavior.

## 8.4 Why AI Integration Is Backend-Side

The Krutrim API key must never be exposed in frontend code.

Therefore:

1. React sends the user's post to Hono.
2. Hono communicates with Krutrim AI.
3. Hono processes the response.
4. Hono stores the accepted post.
5. React receives only the required response data.

This architecture keeps private API credentials on the server side.

---

# 9. Backend Architecture

The backend is developed using Hono.js and TypeScript.

It runs on Cloudflare Workers and communicates with Cloudflare D1.

### Backend Responsibilities

- API routing.
- Request validation.
- Content processing.
- AI integration.
- Database queries.
- Error handling.
- JSON response generation.

### API Route Structure

| Method | Route | Description |
|---|---|---|
| GET | `/` | Backend health check |
| POST | `/api/posts` | Create a post |
| GET | `/api/posts` | Fetch all posts |
| GET | `/api/posts/:id` | Fetch individual post |
| POST | `/api/posts/:id/comments` | Add a comment |
| GET | `/api/posts/:id/comments` | Fetch comments |

### Database Binding

The backend uses the Cloudflare D1 binding:

```text
hiddenhive_db
```

The binding is configured in `wrangler.jsonc`.

Backend code accesses the database through the Cloudflare Worker environment.

---

# 10. Database Design

HiddenHive uses Cloudflare D1 as its relational database.

The current database contains two primary tables.

## 10.1 Post Table

The `post` table stores discussion information.

| Column | Type | Description |
|---|---|---|
| id | INTEGER | Primary key |
| title | TEXT | Post title |
| content | TEXT | Full discussion content |
| summary | TEXT | AI-generated summary |
| category | TEXT | AI-generated category |
| emoji | TEXT | AI-generated emoji |
| ip | TEXT | Request IP information |
| created_at | TEXT | Creation timestamp |

## 10.2 Comments Table

The `comments` table stores user responses.

| Column | Type | Description |
|---|---|---|
| id | INTEGER | Primary key |
| post_id | INTEGER | Associated post ID |
| text | TEXT | Comment content |
| ip | TEXT | Request IP information |
| created_at | TEXT | Creation timestamp |

## 10.3 Relationship

One post can have multiple comments.

```text
              POST
               |
               | 1
               |
               | 
               | N
               |
            COMMENTS
```

The `comments.post_id` column references `post.id`.

The database also uses an index on `comments.post_id` to support comment lookups.

---

# 11. API Documentation

Production API base URL:

```text
https://hiddenhive-backend.siddhantrkokate.workers.dev
```

## 11.1 Create Post

**POST**

```http
/api/posts
```

Request:

```json
{
  "title": "Example Discussion",
  "description": "This is an example discussion."
}
```

Successful response:

```json
{
  "success": true,
  "data": {
    "post_id": 1,
    "summary": "Example summary",
    "category": "Technology",
    "emoji": "💻"
  }
}
```

A moderation failure returns an unsuccessful response with an explanation.

## 11.2 Fetch All Posts

**GET**

```http
/api/posts
```

Example response:

```json
{
  "success": true,
  "data": [
    {
      "post_id": 1,
      "post_title": "Example Discussion",
      "post_description": "Discussion content",
      "post_category": "Technology",
      "post_emoji": "💻",
      "created_at": "2026-11-02 10:00:00"
    }
  ]
}
```

## 11.3 Fetch Individual Post

**GET**

```http
/api/posts/:id
```

Example:

```http
/api/posts/1
```

Returns the individual post in the `data` array.

## 11.4 Fetch Comments

**GET**

```http
/api/posts/:id/comments
```

Example:

```http
/api/posts/1/comments
```

Example response:

```json
{
  "success": true,
  "data": [
    {
      "text": "Interesting discussion!",
      "created_at": "2026-11-02 10:15:00"
    }
  ]
}
```

## 11.5 Add Comment

**POST**

```http
/api/posts/:id/comments
```

Example:

```http
/api/posts/1/comments
```

Request:

```json
{
  "text": "This is my comment."
}
```

The post ID is supplied in the URL.

---

# 12. Project Structure

The combined repository follows a monorepo structure.

```text
hiddenhive/
│
├── hiddenive-frontend/
│   │
│   ├── public/
│   ├── src/
│   │   ├── config/
│   │   ├── code/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   ├── .env.development
│   ├── .env.production
│   └── README.md
│
├── hiddenhive-backend/
│   │
│   ├── src/
│   │   └── index.ts
│   │
│   ├── migrations/
│   ├── package.json
│   ├── package-lock.json
│   ├── tsconfig.json
│   ├── wrangler.jsonc
│   ├── .dev.vars
│   └── README.md
│
├── .gitignore
└── README.md
```

The root README documents the complete platform.

The individual frontend and backend README files document their respective applications.

---

# 13. Installation and Setup

Follow these instructions to run HiddenHive locally.

## Prerequisites

Install:

- Node.js
- npm
- Git
- A code editor
- A Cloudflare account for backend development and deployment
- A Krutrim API key for AI-powered post creation

## Step 1: Clone the Main Repository

```bash
git clone https://github.com/siddhantrkokate/hiddenhive.git
```

Navigate into the repository:

```bash
cd hiddenhive
```

## Step 2: Install Frontend Dependencies

```bash
cd hiddenive-frontend
npm install
```

## Step 3: Configure Frontend Environment

Create `.env.development`:

```env
VITE_API_BASE_URL=http://localhost:8787
```

## Step 4: Install Backend Dependencies

Open another terminal:

```bash
cd hiddenhive/hiddenhive-backend
npm install
```

## Step 5: Configure Cloudflare

Authenticate Wrangler:

```bash
npx wrangler login
```

Configure the D1 database binding in:

```text
wrangler.jsonc
```

For a new developer using their own Cloudflare account, create their own D1 database and replace the database ID with their own database ID.

Apply migrations:

```bash
npx wrangler d1 migrations apply hiddenhive-db --remote
```

## Step 6: Configure Krutrim AI

Create a `.dev.vars` file inside the backend directory:

```env
KRUTRIM_API_KEY=your_actual_krutrim_api_key
```

For production, configure the secret using:

```bash
npx wrangler secret put KRUTRIM_API_KEY
```

Never commit `.dev.vars` or API credentials to GitHub.

## Step 7: Start the Backend

From the backend directory:

```bash
npm run dev
```

The local backend normally runs at:

```text
http://localhost:8787
```

## Step 8: Start the Frontend

Open another terminal:

```bash
cd hiddenhive/hiddenive-frontend
```

Run:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

Both applications should now be running.

---

# 14. Environment Configuration

## Frontend Development

File:

```text
hiddenive-frontend/.env.development
```

```env
VITE_API_BASE_URL=http://localhost:8787
```

## Frontend Production

File:

```text
hiddenive-frontend/.env.production
```

```env
VITE_API_BASE_URL=https://hiddenhive-backend.siddhantrkokate.workers.dev
```

## Backend Development

File:

```text
hiddenhive-backend/.dev.vars
```

```env
KRUTRIM_API_KEY=your_actual_api_key
```

### Important

- `.dev.vars` must never be committed.
- Krutrim API credentials must never be exposed to React.
- Vite variables are public in the compiled frontend.
- Each developer should configure their own credentials and Cloudflare resources.

---

# 15. Development Workflow

Frontend and backend are separate applications within the same repository.

### Frontend Commands

Navigate into:

```bash
cd hiddenive-frontend
```

Install dependencies:

```bash
npm install
```

Start development:

```bash
npm run dev
```

Run lint:

```bash
npm run lint
```

Build:

```bash
npm run build
```

Preview:

```bash
npm run preview
```

### Backend Commands

Navigate into:

```bash
cd hiddenhive-backend
```

Install dependencies:

```bash
npm install
```

Start development:

```bash
npm run dev
```

Deploy:

```bash
npx wrangler deploy
```

Apply database migrations:

```bash
npx wrangler d1 migrations apply hiddenhive-db --remote
```

The exact scripts and Wrangler configuration should be checked in the backend `package.json` and `wrangler.jsonc`.

---

# 16. Deployment

HiddenHive uses Cloudflare for hosting its frontend and backend.

## Frontend Deployment

The frontend is built using Vite.

Generate a production build:

```bash
cd hiddenive-frontend
npm run build
```

The output is generated inside:

```text
dist/
```

Deploy the generated frontend using the configured Cloudflare frontend deployment workflow.

Production URL:

https://hiddenhive.siddhantrkokate.workers.dev/

## Backend Deployment

Navigate to:

```bash
cd hiddenhive-backend
```

Deploy:

```bash
npx wrangler deploy
```

Configure the required Cloudflare D1 binding and production secrets before deployment.

Production API:

https://hiddenhive-backend.siddhantrkokate.workers.dev/

## Independent Deployment

The frontend and backend can be deployed independently.

If only the frontend changes, deploy the frontend.

If only the backend changes, deploy the backend.

If the backend URL changes, update the frontend production environment variable and rebuild the frontend.

Database schema changes must be applied through migrations.

---

# 17. Security and Privacy Considerations

HiddenHive is designed around open discussion and reduced emphasis on personal profiles.

However, anonymity and privacy require careful implementation.

Important considerations:

- API credentials are stored on the backend.
- The frontend must never contain private API keys.
- Backend endpoints should validate incoming request data.
- Database operations should use parameterized queries.
- CORS should allow only the intended frontend origins.
- AI moderation should be treated as an automated screening layer, not a perfect guarantee.
- Error responses should not expose internal secrets or infrastructure details.
- Rate limiting and abuse prevention should be considered for public endpoints.

### IP Address Handling

The current database schema includes IP address fields for posts and comments.

Therefore, HiddenHive should not be described as guaranteeing complete anonymity or zero data collection.

Any public privacy statement should accurately explain what information is collected, why it is collected, how long it is retained, and who can access it.

---

# 18. Future Scope

HiddenHive can be expanded with additional features.

Potential future improvements include:

### User Experience

- Improved discussion discovery.
- Search functionality.
- Topic filtering.
- Trending discussions.
- Improved responsive layouts.

### AI Capabilities

- Improved content moderation.
- Better topic classification.
- Discussion recommendations.
- Duplicate discussion detection.
- AI-assisted discussion summaries.
- Multilingual content processing.
- More advanced semantic search.

### Backend Improvements

- Rate limiting.
- Stronger abuse prevention.
- Authentication and authorization where required.
- Better database indexing.
- Caching.
- Monitoring and observability.
- Automated testing.

### Community Features

- Discussion reporting.
- Community moderation tools.
- Threaded conversations.
- Voting and reactions.
- Better content discovery.

These are potential future enhancements, not necessarily features already implemented.

---

# 19. Contribution Guidelines

Contributions and improvements are welcome.

### Getting Started

1. Fork or clone the repository.
2. Create a new feature branch.
3. Implement your changes.
4. Test the affected application.
5. Run lint and production build checks.
6. Commit your changes.
7. Submit a pull request.

Create a feature branch:

```bash
git checkout -b feature/your-feature-name
```

Commit changes:

```bash
git add .
git commit -m "Add your feature"
```

Push changes:

```bash
git push origin feature/your-feature-name
```

### Contribution Principles

- Keep frontend and backend responsibilities separate.
- Follow existing coding conventions.
- Avoid hardcoded API URLs.
- Never commit credentials.
- Preserve existing API contracts unless intentionally updating them.
- Document important architectural changes.

---

# 20. Project Information

| Property | Details |
|---|---|
| Project Name | HiddenHive |
| Project Type | AI-Powered Discussion Platform |
| Repository | hiddenhive |
| Frontend | React + Vite |
| Backend | Hono.js + TypeScript |
| Runtime | Cloudflare Workers |
| Database | Cloudflare D1 |
| AI Provider | Krutrim AI |
| AI Model | gpt-oss-120b |
| Frontend Hosting | Cloudflare |
| Backend Hosting | Cloudflare Workers |
| API Architecture | REST |

### Project Repositories

**Main Repository**

https://github.com/siddhantrkokate/hiddenhive

**Live Frontend**

https://hiddenhive.siddhantrkokate.workers.dev/

**Backend API**

https://hiddenhive-backend.siddhantrkokate.workers.dev/

---

# Conclusion

HiddenHive explores a different approach to online conversations by placing discussions and ideas at the center of the experience.

By combining React, Hono.js, Cloudflare Workers, Cloudflare D1, and Krutrim AI, the project brings together a modern frontend, a lightweight serverless backend, persistent data storage, and AI-assisted content processing.

The long-term vision is to build a platform where people can discover ideas, express opinions, and participate in meaningful conversations without unnecessary emphasis on personal popularity.

**HiddenHive — A space for thoughts, ideas, and conversations.**
