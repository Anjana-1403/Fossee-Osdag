# Fossee-Osdag Project Demo

This project is a web-based application that includes a frontend built with React and a backend built with Django.

## Features Implemented
1. **Dynamic Tab Management**:
   - Tabs are dynamically created or updated based on the title of the content.
   - If a tab with the same title exists, new content is added under it; otherwise, a new tab is created.

2. **Dark Mode Support**:
   - The application supports a dark mode toggle for better user experience.

3. **Backend API Integration**:
   - The backend provides APIs for fetching tabs, tab content, and sidebar menu items.

4. **Responsive Design**:
   - The frontend is styled to be responsive and user-friendly.

## How to Run

### Prerequisites
- Node.js and npm installed for the frontend.
- Python and pip installed for the backend.

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Apply migrations:
   ```bash
   python manage.py migrate
   ```
4. Start the backend server:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```

### Access the Application
- Open your browser and navigate to `http://localhost:5173` for the frontend.
- The backend API is available at `http://localhost:8000`.

## Notes
- Ensure the backend server is running before accessing the frontend.
- The backend uses SQLite as the default database. You can configure it in `backend/settings.py` if needed.
