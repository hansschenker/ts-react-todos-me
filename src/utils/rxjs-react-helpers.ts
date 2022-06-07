import { useEffect, useState } from "react";
import { Observable } from "rxjs";


export function useSubscription<T>(source$: Observable<T>, 
    nextHandler: (value: T) => void,
    errorHandler?: (error: any) => void){
    useEffect(() => {
        if(source$){    
            const subscription = source$.subscribe(
                {next: nextHandler, 
                 error: errorHandler});
            return () => subscription.unsubscribe();
        }
    }, [source$])
}

export function useObservable<T>(source$: Observable<T>, initialState: T, errorHandler?: (error: any) => void):T {
    const [value, setValue] = useState(initialState)
    useSubscription<T>(source$, setValue, errorHandler)
    return value
}
