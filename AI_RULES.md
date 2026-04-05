# AI Development Rules & Tech Stack

## Tech Stack
*   **React & TypeScript**: Core framework for building the user interface with strong typing.
*   **Vite**: Fast build tool and development server.
*   **Tailwind CSS**: Utility-first CSS framework for all styling needs.
*   **shadcn/ui**: Collection of re-usable components built using Radix UI and Tailwind CSS.
*   **React Router**: Standard library for routing and navigation in React applications.
*   **Lucide React**: Clean and consistent icon library.
*   **Radix UI**: Low-level UI primitives for building accessible components.

## Library Usage Rules
*   **Styling**: Use **Tailwind CSS** exclusively. Avoid writing raw CSS or using CSS modules unless there is a specific technical requirement that Tailwind cannot meet.
*   **UI Components**: Always check for and use **shadcn/ui** components first. Do not build custom buttons, inputs, or modals from scratch if a shadcn version exists.
*   **Icons**: Use **Lucide React** for all iconography to maintain visual consistency.
*   **Navigation**: All application routes must be defined and managed within `src/App.tsx` using **React Router**.
*   **File Organization**: 
    *   Place page-level components in `src/pages/`.
    *   Place reusable UI elements in `src/components/`.
    *   The entry point for the main application view is `src/pages/Index.tsx`.
*   **State Management**: Use standard React hooks (`useState`, `useContext`, `useReducer`) for state management. Keep state as local as possible.
*   **User Feedback**: Use toast notifications to inform users about the success or failure of their actions.