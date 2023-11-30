const useFormatDate = (date) => {
    const newDate = new Date(date);
    const formattedDate = newDate.toLocaleDateString();
    return formattedDate;
}
export default useFormatDate;