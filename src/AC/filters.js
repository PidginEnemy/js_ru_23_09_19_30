import { SAVE_FILTERS } from '../constants'

export function saveFilters(filters) {
    return {
        type: SAVE_FILTERS,
        payload: {
            filters: filters
        }
    }
}