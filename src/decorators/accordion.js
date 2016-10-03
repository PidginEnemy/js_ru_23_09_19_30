import React from 'react'

export default function Accordion(Component) {
    return class WrappedComponent extends React.Component {

        state = {
            //Не привязывайся к названию сущности, декоратор будет использоваться везде. Назови, скажем, openItemId
            openArticleId: null
        }
        
        render() {
            return <Component {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
        }

        toggleOpenArticle = id => ev => {
            this.setState({
                openArticleId: (id != this.state.openArticleId) ? id : null
            })
        }
        
    }
}