# Research: Controlled vs Uncontrolled Components

## Controlled Components
- **Definition:** React controls the input using `useState`.
- **Value comes from:** Component state.
- **Good for:** 
  - Real-time validation (e.g., password strength).
  - Conditional rendering (e.g., show/hide inputs).
  - Enabling/disabling buttons based on input.
- **Drawback:** More code and re-renders for every keystroke.

## Uncontrolled Components
- **Definition:** Input controls itself, React accesses value using `ref`.
- **Value comes from:** The DOM (HTML element itself).
- **Good for:** 
  - Simple forms (e.g., contact forms).
  - Third-party libraries (like file uploads).
  - Performance-sensitive cases (less re-rendering).
- **Drawback:** Harder to control and validate in real-time.

## Summary
- Use **controlled** when you need React to "watch" the input.
- Use **uncontrolled** when you just want the value at the end (like on submit).
