import { SAVE_FILTERS } from '../constants'

export default (filters = {
    articles: null
}, action) => {
    const { type, payload } = action
    
    switch (type) {
        case SAVE_FILTERS:
            return payload.filters
    }
    
    return filters
}