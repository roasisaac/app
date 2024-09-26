import { useEffect } from "react";

const TestComponent = () => {
    useEffect(() => {
        console.log("API Key: ", process.env.REACT_APP_API_KEY);
    }, []);

    return <div>Check console for API Key</div>;
};

export default TestComponent;