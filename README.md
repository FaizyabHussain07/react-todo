# Todo App

A modern, feature-rich Todo application built with React and Vite.

## Features

### Core Functionality
- ✅ Add new todos with input field
- ✅ Mark todos as complete/incomplete with checkboxes
- ✅ Delete todos with remove button
- ✅ Edit todos with inline editing
- ✅ Persistent storage using localStorage

### Filtering & Navigation
- 🔍 Filter todos by: All, Active, Completed
- 📊 Real-time item counter
- 🗑️ Clear completed todos button

### User Experience
- 📱 Fully responsive design
- 🎨 Modern UI with smooth transitions
- ⌨️ Keyboard accessible
- 🖱️ Double-click to edit todos
- 💫 Hover and focus states

## Technical Stack

- **Frontend:** React 18 with Hooks
- **Build Tool:** Vite
- **Styling:** CSS Modules with CSS Variables
- **Storage:** Browser localStorage
- **Icons:** Text-based (no external icon libraries)

## Project Structure

```
src/
├── components/
│   ├── TodoForm.jsx     # Input and add button
│   ├── TodoList.jsx     # Todo list container
│   ├── TodoItem.jsx     # Individual todo item
│   ├── TodoEdit.jsx     # Inline edit form
│   └── TodoFooter.jsx   # Filters and actions
├── App.jsx              # Main application component
├── App.module.css       # All styles
└── main.jsx             # Entry point
```

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd todo-web
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Usage

### Adding Todos
1. Type your todo in the input field
2. Press Enter or click "Add" button

### Editing Todos
1. Click the "Edit" button on any active todo
2. OR double-click on the todo text
3. Make your changes
4. Press Enter or click "Save"
5. Press Escape or click "Cancel" to discard changes

### Managing Todos
- Click checkbox to mark as complete
- Click "×" to delete a todo
- Use filters to view specific todo types
- Click "Clear completed" to remove all finished todos

## Features Details

### Data Persistence
- All todos are automatically saved to localStorage
- Data persists between browser sessions
- No backend required

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface

### Accessibility
- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Focus management

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Built With

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [CSS Modules](https://github.com/css-modules/css-modules) - Styling

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
