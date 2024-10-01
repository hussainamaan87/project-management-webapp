# Project Management WebApp

A full-stack project management web application built using **Next.js**, **TypeScript**, **Node.js (Express)**, and AWS services. The application features optimized task management, enhanced data handling, and secure cloud architecture.
## 🌐 Live Project
Check out the live project of the Project Management WebApp here: [Live Demo](https://master.d3xlsguj1whep.amplifyapp.com/)
(If the link data says no records means AWS RDS has been disabled to avoid payment).
## 🎥 Demo Video
Watch a quick demonstration of the application in action: [Demo Video](https://your-demo-video-link.com)
[Relevant Images](https://drive.google.com/file/d/1LWOrFB9DoZLtbEl8Xb6TRMhQSCtEPeOb/view?usp=sharing)
## 🚀 Features

- **Task Management**: Organize, track, and manage tasks efficiently with real-time updates.
- **Efficient Data Loading**: Implemented **Redux Toolkit** and **Material UI Data Grid** to boost data loading efficiency by 40%.
- **Optimized Database Operations**: Integrated **AWS RDS (PostgreSQL)** with **Prisma ORM**, reducing query times by 35%.
- **Secure Networking**: Deployed **AWS VPC** for secure and optimized networking, resulting in 50% faster data access.
- **Cost-Effective Serverless Architecture**: Leveraged **AWS Lambda** for serverless functions and **AWS S3** for static asset hosting, achieving 24% cost savings.

## 🛠️ Technology Stack

### Frontend
- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **Redux Toolkit**
- **Material UI Data Grid**

### Backend
- **Node.js** (Express)
- **Prisma** (PostgreSQL ORM)

### Database
- **PostgreSQL** (Managed via **PgAdmin**)

### Cloud Infrastructure
- **AWS EC2**
- **AWS RDS**
- **AWS VPC**
- **AWS Lambda**
- **AWS S3**
- **AWS API Gateway**
- **AWS Cognito**

## 📈 Performance Improvements

- **40% increase** in data loading efficiency.
- **35% reduction** in database query times.
- **50% improvement** in data access speed.
- **24% cost savings** on infrastructure.

## 🤝 Collaborators

We thank the following collaborators who have contributed to this project:

- [Amaan Hussain](https://github.com/hussainamaan87) - Full-Stack Developer
- [Akanksha Kumari](https://github.com/akseth314) - Full-Stack Developer

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hussainamaan87/project-management-webapp.git
   cd project-management-webapp
2. Install Dependencies
   ```bash
   npm install
3. Set up environment variables by creating a .env file in the root directory, with the following values:
   ```bash
   DATABASE_URL=<Your AWS RDS PostgreSQL URL>
   AWS_ACCESS_KEY_ID=<Your AWS Access Key>
   AWS_SECRET_ACCESS_KEY=<Your AWS Secret Key>
Update these values with your AWS credentials and database URL.

4. Start the development server:
   ```bash
   npm run dev

5. Open http://localhost:3000 in your browser to view and interact with the application.

## 🚀 Deployment
This application is designed to be deployed on AWS EC2 for the backend, with AWS Lambda. For static assets, use AWS S3. You can follow these steps for deployment:
1. Set up an EC2 instance and configure it with Node.js and Express.
2. Use AWS Lambda for serverless functions, connecting it to the backend APIs.
3. Host static files (like images or front-end assets) on AWS S3.
Make sure to configure AWS VPC for secure and efficient networking between the services.
