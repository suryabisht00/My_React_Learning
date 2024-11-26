// HOW TO STYLE REACT COMPONENTS WITH CSS 
// ----------------------------------------
// (not including external frameworks or preprocessors)

// 1. EXTERNAL - index.css
// 2. MODULES  - Button.module.css "create a new folder named 'Button (inside src)' and add a file named 'Button.module.css' with 'Button.jsx' "
// 3. INLINE - use for minimum styling (use camelCase for css properties in JSX)


import Button from "./Button/Button.jsx"

function App() {


    return (
        <div>
            
            <Button />
        </div>
    )
}

export default App
