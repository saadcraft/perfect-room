export const handleInputNumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = (event.target as HTMLInputElement).value;
    if (!/^\d*$/.test(inputValue)) {
        (event.target as HTMLInputElement).value = inputValue.replace(/\D/g, ''); // Remove non-numeric characters
    }
};