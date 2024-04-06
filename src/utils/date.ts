type DateStyle = Intl.DateTimeFormatOptions["dateStyle"]

const formatDate = (date: Date, dateStyle: DateStyle = "medium", locales = "en") => {
    const formatter = new Intl.DateTimeFormat(locales, { dateStyle })

    return formatter.format(date)
}

export { formatDate }
