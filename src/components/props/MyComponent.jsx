import ComponentWithProps from "./ComponentWithProps";

const MyComponent = () => {
    return (
        <>
            <ComponentWithProps header="My Header" content="My COntent" number={4494} nonexistent="Your face"/> 
        </>
    )
}

export default MyComponent;