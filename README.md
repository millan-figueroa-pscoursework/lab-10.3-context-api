### Lab 10.3

# Context API Implementation

## Scenario

You are tasked with building a functional Todo application. Instead of relying on prop drilling or a complex third-party state management library for this scale, you will leverage React’s Context API to manage various aspects of the application’s state. This includes managing the list of todos, current visibility filters, and a simple theme. <br>

This lab will provide practical experience in designing multiple contexts, implementing providers, consuming context values in components, and handling more involved state updates. You will also explore basic persistence and optimization considerations with Context.<br>

## Learning Objectives

Upon successful completion of this lab, you will be able to:

- Design and implement multiple, independent contexts for different pieces of global state.
- Create and use Context Providers to make state and dispatch functions available throughout the component tree.
- Consume context values and functions in components using the useContext hook.
- Manage complex state (e.g., an array of objects, filter states) using useState or useReducer within context providers.
- Implement features requiring interaction between different contexts (e.g., filtering todos).
- dd a persistence layer to a Context-based application (e.g., using localStorage).
- Understand basic performance considerations when working with Context API.
