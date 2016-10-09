import { SAVE_FILTERS } from '../constants'

export default (filters = {
    articles: null,
    dates: null
}, action) => {
    const { type, payload } = action
    
    switch (type) {
        case SAVE_FILTERS:
            return Object.assign({}, filters, payload.filters)
    }
    
    return filters
}