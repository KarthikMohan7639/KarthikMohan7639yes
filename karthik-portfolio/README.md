# Karthik Mohan Portfolio

A modern, responsive portfolio website built with React and Bootstrap to showcase my projects, skills, and experience.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```
git clone https://github.com/KarthikMohan7639yes/karthik-portfolio.git
cd karthik-portfolio
```

2. Install dependencies:
```
npm install
```

3. Start the development server:
```
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Building for Production

```
npm run build
```

This creates an optimized production build in the `build` folder.

## Deployment Options

### Vercel Deployment (Recommended)
1. Create a GitHub repository and push this project.
2. Sign in to [Vercel](https://vercel.com).
3. Click "Add New Project" and import your GitHub repo.
4. Configure:
   - Build command: `npm run build`
   - Output directory: `build`
5. Click "Deploy" and wait for the build to complete.

### Netlify Deployment
1. Create a GitHub repository and push this project.
2. Sign in to [Netlify](https://app.netlify.com).
3. Click "Add New Site" → "Import from Git".
4. Configure:
   - Build command: `npm run build`
   - Publish directory: `build`
5. Click "Deploy Site" and wait for the build to complete.

## Project Structure

- `public/` - Static files like resume PDF, favicon, etc.
- `src/` - Source code
  - `assets/` - Images and other media
  - `components/` - React components
  - `data/` - Data files like resumeData.js
  - `styles/` - CSS files

## Customization

### Personal Information
Edit `src/data/resumeData.js` to update your personal details, experience, education, projects, etc.

### Profile Photo
Replace `src/assets/profile.jpg` with your own profile picture.

### Resume
Replace `public/Karthik_Mohan_Resume.pdf` with your current resume PDF.

### Colors and Styling
Edit `src/styles/main.css` to customize colors, fonts, and other styling elements.

## Features
- Responsive design for all devices
- Animated page transitions using Framer Motion
- Resume download
- Contact form with email integration
- Project showcase with details and links
- Skills visualization with progress bars
- Experience timeline
- Publications list

## License
This project is open source and available under the MIT License.