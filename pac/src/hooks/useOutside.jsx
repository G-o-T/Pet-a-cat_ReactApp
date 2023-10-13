import { useState, useEffect, useRef } from "react";

export const useOutside = (initialValue) => {
    const [isShown, setShown] = useState(initialValue);
    const ref = useRef(null);

    const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target))
        {
            setShown(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)

        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    })

    return {ref, isShown, setShown}
}