import { useEffect } from "react";

const useEvent = (event, handler) => {
    useEffect(() => {
        window.addEventListener(event, handler)

        return () => {
            window.removeEventListener(event, handler)
        }
    }, [])
}

export default useEvent;