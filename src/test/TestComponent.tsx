import { useEffect } from "react";

const TestComponent = () => {
    useEffect(() => {
        console.log("API Key:", 1);
    }, []);

    return <div>Check console for API Key</div>;
};

export default TestComponent;