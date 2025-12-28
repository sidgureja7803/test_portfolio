# 🚀 Siddhant Gureja - Portfolio

A modern, responsive, and beautifully designed portfolio showcasing my work as a Full Stack Developer. Built with React.js and featuring cutting-edge UI/UX design with smooth animations, multiple theme options, and an elegant glassmorphic aesthetic.

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://sidgureja.dev/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/sidgureja7803)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/sidgureja)

## ✨ Features

- **🎨 Multiple Theme Support**: Choose from Light, Dark, Ocean, Sunset, and Forest themes
- **📱 Fully Responsive**: Optimized for all devices - desktop, tablet, and mobile
- **🎭 Modern UI/UX**: Glassmorphism, smooth gradients, and micro-animations
- **⚡ Performance Optimized**: Fast loading with lazy loading and code splitting
- **🌟 Interactive Components**: Hover effects, animations, and smooth transitions
- **📊 LeetCode Integration**: Real-time LeetCode stats and contest ratings
- **🎯 SEO Optimized**: Proper meta tags, semantic HTML, and optimized content
- **♿ Accessibility**: WCAG compliant with keyboard navigation support

## 🛠️ Tech Stack

### Frontend
- **Framework**: React.js 18.3.1
- **Styling**: Tailwind CSS 3.4.17 + Custom CSS
- **UI Components**: Radix UI + Shadcn/ui
- **Routing**: React Router DOM 7.5.1
- **Icons**: Lucide React 0.507.0
- **Animations**: CSS animations + Tailwind transitions

### Development Tools
- **Build Tool**: Create React App with CRACO
- **Package Manager**: Yarn 1.22.22
- **Code Quality**: ESLint 9.23.0
- **Version Control**: Git

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- Yarn or npm

### Quick Start

```bash
# Clone the repository
git clone https://github.com/sidgureja7803/Portfolio.git

# Navigate to project directory
cd Portfolio

# Install dependencies
yarn install
# or
npm install

# Start development server
yarn dev
# or
npm run dev
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
# Create production build
yarn build
# or
npm run build
```

The optimized build will be in the `build/` directory.

## 📁 Project Structure

```
Portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components (Shadcn)
│   │   ├── About.js
│   │   ├── Achievements.js
│   │   ├── Contact.js
│   │   ├── Experience.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── LeetCodeStats.js
│   │   ├── OpenSource.js
│   │   ├── Projects.js
│   │   └── Skills.js
│   ├── contexts/          # React contexts
│   │   └── ThemeContext.js
│   ├── App.js            # Main app component
│   ├── App.css           # App-specific styles
│   ├── index.css         # Global styles & theme variables
│   ├── mock.js           # Portfolio data
│   └── index.js          # Entry point
├── tailwind.config.js    # Tailwind configuration
├── craco.config.js       # CRACO configuration
└── package.json          # Dependencies

```

## 🎨 Available Themes

The portfolio includes **5 beautiful themes**:

1. **🌞 Light** - Clean and professional
2. **🌙 Dark** - Easy on the eyes
3. **🌊 Ocean** - Deep blue vibes
4. **🌅 Sunset** - Warm and inviting
5. **🌲 Forest** - Natural greens

Switch themes using the theme selector in the header!

## 📝 Customization Guide

### Update Personal Information

Edit `src/mock.js` to update:
- Personal info (name, email, bio)
- Social links
- Skills and technologies
- Work experience
- Projects
- Achievements

### Modify Theme Colors

Edit `src/index.css` to customize theme variables:
```css
:root {
  --background: ...;
  --foreground: ...;
  --primary: ...;
  /* etc */
}
```

### Add New Sections

1. Create component in `src/components/`
2. Import in `src/App.js`
3. Add to the main layout
4. Update navigation in `Header.js`

## 🚀 Featured Projects

### CodeFusion
🔗 [Live Demo](https://www.code-fusion.live/) | [GitHub](https://github.com/sidgureja7803/CollabCode.git)

Real-time collaborative coding platform with AI-powered debugging using LLaMA API.

### MergeMates
🔗 [Live Demo](https://www.mergemates.site/) | [GitHub](https://github.com/sidgureja7803/MergeMates_client.git)

A "Tinder for Developers" matching collaborators based on GitHub data.

### LiveCV
🔗 [Live Demo](https://livecv.online/) | [GitHub](https://github.com/sidgureja7803/LiveCV)

AI-powered resume builder with real-time editing and PDF export.

## 🏆 Achievements

- 🥉 **3rd Prize** - IBM TechXchange AI & Automation Hackathon
- 🥉 **3rd Place** - CodeSprint 2024, ACM TIET
- 🏅 **LeetCode Guardian Badge** - 2213 contest rating
- ☁️ **AWS Certified Cloud Practitioner**

## 📊 LeetCode Stats

- **Contest Rating**: 2213
- **Problems Solved**: 300+
- **Contests Participated**: 20+
- **Global Rank**: Top percentile

## 📬 Contact

- **Email**: siddhantgureja39@gmail.com
- **Phone**: +91 8193006167
- **Location**: India
- **LinkedIn**: [linkedin.com/in/sidgureja](https://linkedin.com/in/sidgureja)
- **GitHub**: [github.com/sidgureja7803](https://github.com/sidgureja7803)
- **Portfolio**: [sidgureja.dev](https://sidgureja.dev/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- UI Components: [Shadcn/ui](https://ui.shadcn.com/)
- Icons: [Lucide React](https://lucide.dev/)
- Styling: [Tailwind CSS](https://tailwindcss.com/)
- Framework: [React.js](https://react.dev/)

---

**Made with ❤️ by Siddhant Gureja**

⭐ Star this repo if you found it helpful!
