import { timeFormat } from 'd3'
export function dateFormatter(date: Date | string) {
    if (!date) {
        return ""
    }
    return timeFormat('%Y-%m-%d')(new Date(date))
}