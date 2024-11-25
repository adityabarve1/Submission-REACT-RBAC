# **RBAC UI**

A responsive and functional MERN stack application with a **sidebar, member table, and group creation functionality**. The project mimics a professional UI, inspired by **WhatsApp Web**, and includes CRUD operations, member management, and group creation features.

## **Table of Contents**
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup Instructions](#setup-instructions)
5. [Usage](#usage)
6. [Folder Structure](#folder-structure)
7. [Future Improvements](#future-improvements)



---

## **Project Overview**

This project is a **responsive web application** built using the MERN stack (**MongoDB**, **Express**, **React**, and **Node.js**). It provides a platform for managing members, displaying detailed user information, and creating groups dynamically. The design and functionality are intuitive and modern, catering to a seamless user experience.

### Key Objectives:
- Enable CRUD operations on members.
- Allow group creation with a simple UI.
- Provide a professional and responsive design for all screen sizes.
- Maintain scalability and modularity for future enhancements.

---

## **Features**

1. **Sidebar Navigation**:
   - A sleek, responsive sidebar with icons for quick navigation.
   - Hover effects and active state indication.
   - Accessible design for both desktop and mobile.

2. **Members Table**:
   - Displays member details (name, email, role, etc.) in a structured format.
   - Includes **Edit** and **Delete** actions for each member.
   - Styled like a professional chat application with user images and details.

3. **Group Creation**:
   - A "Create Group" button in the header.
   - Opens a modal where users can select members to form a group.
   - Confirms group creation with selected members.

4. **CRUD Operations**:
   - Add, edit, and delete members with ease.
   - Instant updates on the table without requiring a backend.

5. **Responsive Design**:
   - Ensures optimal usability across desktop, tablet, and mobile devices.
   - Styled components that adapt seamlessly to various screen sizes.

---

## **Technologies Used**

- **Frontend**: React, CSS Modules
- **State Management**: React State
- **Styling**: CSS (responsive, clean, and modern)
- **Icons**: Font Awesome

---

## **Setup Instructions**

Follow these steps to get the project running locally:

### **Prerequisites**
1. **Node.js** (>= v14)
2. **npm** or **yarn**
3. A modern web browser (Chrome, Firefox, Edge)

### **Installation**
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/project-name.git
   cd project-name
2. **Install Dependencies**
   ```bash
   npm install
1. **Run the Development Server**
   ```bash
   npm start

   
## **Usage**

- **Sidebar**: Use the sidebar for navigation. Click icons to see active states.
- **Member Table**: View and manage member details.
  - Click "Edit" to modify member details.
  - Click "Delete" to remove a member.
- **Create Group**:
    -  Click the "Create Group" button in the header.
    -  Select members from the modal.
    -  Confirm group creation.
- **Responsive UI**: Resize the browser to see the design adapt to different screen sizes.

## **Folder Structure**
    project-name/
    ├── public/               # Static assets
    ├── src/
    │   ├── components/       # Reusable components
    │   │   ├── Header.js
    │   │   ├── Sidebar.js
    │   │   ├── MembersTable.js
    │   │   └── Modal.js
    │   ├── styles/           # Component-specific styles
    │   │   ├── Header.css
    │   │   ├── Sidebar.css
    │   │   ├── MembersTable.css
    │   │   └── Modal.css
    │   ├── App.js            # Main app component
    │   └── index.js          # Entry point
    ├── package.json          # Dependencies and scripts
    └── README.md             # Project documentation


## **Future Improvements**

- **Backend Integration**: 
  - Add a backend using Express and MongoDB.
  - Enable persistent storage of members and groups.
    
- **Search and Filter**:
    -  Implement a search bar to filter members.
    -  Add sorting by role, expiration date, or projects.
      
- **User Authentication**:
    -  Integrate a login system with role-based access control.
      
- **Theme Customization**:
    -  Allow users to switch between light and dark themes.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
