export const increment = (number) => {
    return {
        type: 'INCREMENT',
        payload: number
    }
} 

export const derement = () => {
    return {
        type: 'DECREMENT'
    }
} 
