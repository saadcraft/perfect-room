export const handleInputNumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = (event.target as HTMLInputElement).value;
    if (!/^\d*$/.test(inputValue)) {
        (event.target as HTMLInputElement).value = inputValue.replace(/\D/g, ''); // Remove non-numeric characters
    }
};

export const FormatDate = (dateString: string, locale: string = 'en-US', timeZone: string = 'Africa/Algiers') => {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        timeZone: timeZone
    };

    // Format date with a fixed locale and time zone
    return new Date(dateString).toLocaleDateString(locale, options);
};